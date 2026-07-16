import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = resolve(root, "github-pages");
const repoName = process.env.GITHUB_PAGES_REPOSITORY_NAME
  ?? process.env.GITHUB_REPOSITORY?.split("/")[1]
  ?? "Yussufi-Djawed-Kfz-Aufbereitung";
const basePath = `/${repoName}`;

const routes = [
  { path: "/", file: "index.html" },
  { path: "/impressum", file: "impressum/index.html" },
  { path: "/datenschutz", file: "datenschutz/index.html" },
];

const workerUrl = pathToFileURL(resolve(root, "dist/server/index.js"));
workerUrl.searchParams.set("export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

await cp(resolve(root, "dist/client/assets"), resolve(outputDir, "assets"), {
  recursive: true,
});
await cp(
  resolve(root, "dist/client/images/mainzer"),
  resolve(outputDir, "images/mainzer"),
  { recursive: true },
);
await cp(resolve(root, "dist/client/favicon.svg"), resolve(outputDir, "favicon.svg"));
await writeFile(resolve(outputDir, ".nojekyll"), "");

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`http://localhost${route.path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Could not render ${route.path}: ${response.status}`);
  }

  const html = rewriteForGitHubPages(await response.text());
  const target = resolve(outputDir, route.file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

await cp(resolve(outputDir, "index.html"), resolve(outputDir, "404.html"));

function rewriteForGitHubPages(html) {
  return html
    .replace(/<script>self\.__VINEXT_RSC_(?:PARAMS|NAV)__=.*?<\/script>/g, "")
    .replace(/<script id="_R_">.*?<\/script>/g, "")
    .replace(/<script>self\.__VINEXT_RSC_(?:CHUNKS__|DONE__).*?<\/script>/g, "")
    .replace(/\/_vinext\/image\?url=([^&\s"']+)(?:&amp;|&)w=\d+(?:&amp;|&)q=\d+/g, (_, encodedUrl) => {
      const assetPath = decodeURIComponent(encodedUrl);
      return assetPath.startsWith("/") ? `${basePath}${assetPath}` : assetPath;
    })
    .replaceAll(`"/assets/`, `"${basePath}/assets/`)
    .replaceAll(`"/images/`, `"${basePath}/images/`)
    .replaceAll(`\\"/assets/`, `\\"${basePath}/assets/`)
    .replaceAll(`\\"/images/`, `\\"${basePath}/images/`)
    .replace(/(href|src)="\/assets\//g, `$1="${basePath}/assets/`)
    .replace(/(href|src)="\/images\//g, `$1="${basePath}/images/`)
    .replace(/(href|src)="\/favicon\.svg"/g, `$1="${basePath}/favicon.svg"`)
    .replace(/href="\/impressum\/?"/g, `href="${basePath}/impressum/"`)
    .replace(/href="\/datenschutz\/?"/g, `href="${basePath}/datenschutz/"`)
    .replace(/href="\/"/g, `href="${basePath}/"`)
    .replace(/http:\/\/localhost\//g, `${basePath}/`)
    .replace(/https:\/\/yussufi-djawed-kfz-aufbereitung\.f2hczvhjwm\.chatgpt\.site/g, `https://simonzeiner.github.io${basePath}`)
    .replace(/https:\/\/menk-harald-autoreparatur\.f2hczvhjwm\.chatgpt\.site/g, `https://simonzeiner.github.io${basePath}`);
}
