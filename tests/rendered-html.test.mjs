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

test("renders the redesigned workshop homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Menk Harald Autoreparatur Mainz/);
  assert.match(html, /Autoreparatur mit Ruhe, Praezision und klarer Ansage/);
  assert.match(html, /Inspektion &amp; Wartung/);
  assert.match(html, /Fehlerdiagnose/);
  assert.match(html, /Keine Tracking-Cookies/);
  assert.match(html, /Telefonnummer ergaenzen/);
  assert.match(html, /application\/ld\+json/);
});

test("renders legal pages with visible placeholders", async () => {
  const [impressum, datenschutz] = await Promise.all([
    render("/impressum"),
    render("/datenschutz"),
  ]);

  assert.equal(impressum.status, 200);
  assert.equal(datenschutz.status, 200);

  const impressumHtml = await impressum.text();
  const datenschutzHtml = await datenschutz.text();

  assert.match(impressumHtml, /Impressum/);
  assert.match(impressumHtml, /Strasse und Hausnummer ergaenzen/);
  assert.match(datenschutzHtml, /Datenschutz/);
  assert.match(datenschutzHtml, /keine Analyse-Skripte/);
});
