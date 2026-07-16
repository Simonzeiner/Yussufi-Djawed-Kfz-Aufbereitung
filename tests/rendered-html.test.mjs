import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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
}

test("renders the redesigned Yussufi homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Djawed Yussufi Reifenservice und Kfz-Aufbereitung/);
  assert.match(html, /Mainzer Autoteile Discount/);
  assert.match(html, /Teilehandel/);
  assert.match(html, /Fahrzeugaufbereitung/);
  assert.match(html, /Weisenauer Weg 4-6/);
  assert.match(html, /06131 5565234/);
  assert.match(html, /09:00 - 18:00 Uhr/);
  assert.match(html, /@mainzer.autoteile.discount/);
  assert.match(html, /application\/ld\+json/);
});

test("renders legal pages with company details", async () => {
  const [impressum, datenschutz] = await Promise.all([
    render("/impressum"),
    render("/datenschutz"),
  ]);
  assert.equal(impressum.status, 200);
  assert.equal(datenschutz.status, 200);
  const impressumHtml = await impressum.text();
  const datenschutzHtml = await datenschutz.text();
  assert.match(impressumHtml, /Impressum/);
  assert.match(impressumHtml, /Weisenauer Weg 4-6/);
  assert.match(impressumHtml, /kontakt@mainzer-autoteile-discount.de/);
  assert.match(impressumHtml, /DE326116193/);
  assert.match(datenschutzHtml, /Datenschutz/);
  assert.match(datenschutzHtml, /06131 5565234/);
  assert.match(datenschutzHtml, /keine Analyse-Skripte/);
});
