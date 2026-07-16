import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Anbieterkennzeichnung für Djawed Yussufi Reifenservice und Kfz-Aufbereitung in Mainz.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Impressum() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <article className="legal-card">
          <p className="section-label">Rechtliches</p>
          <h1>Impressum</h1>
          <h2>Anbieter</h2>
          <p>
            <strong>Djawed Yussufi Reifenservice und Kfz-Aufbereitung</strong>
            <br />
            Weisenauer Weg 4-6
            <br />
            55129 Mainz
            <br />
            Deutschland
          </p>
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4961315565234">06131 5565234</a>
            <br />
            E-Mail:{" "}
            <a href="mailto:kontakt@mainzer-autoteile-discount.de">
              kontakt@mainzer-autoteile-discount.de
            </a>
          </p>
          <h2>Verantwortlich für den Inhalt</h2>
          <p>Djawed Yussufi</p>
          <h2>Vertretungsberechtigter</h2>
          <p>Djawed Yussufi</p>
          <h2>Umsatzsteuer-ID</h2>
          <p>DE326116193</p>
          <h2>Register</h2>
          <p>Amtsgericht Mainz</p>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <h2>Bildnachweise</h2>
          <p>
            Verwendete Bild- und Logoassets stammen aus der bestehenden Website
            von Mainzer Autoteile Discount und wurden lokal in diese Website eingebunden.
          </p>
          <p>
            <Link href="/">Zurück zur Startseite</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
