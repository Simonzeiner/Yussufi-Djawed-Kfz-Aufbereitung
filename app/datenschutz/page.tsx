import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzhinweise fuer Menk Harald Autoreparatur Mainz.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Datenschutz() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <article className="legal-card">
          <p className="section-label">Rechtliches</p>
          <h1>Datenschutz</h1>
          <p>
            Diese Vorschau ist datensparsam umgesetzt: keine Analyse-Skripte,
            keine Marketing-Cookies, keine externen Webfonts und keine
            eingebetteten Drittanbieter-Karten. Die finalen Angaben muessen vor
            Livegang auf Hosting, Kontaktwege und reale Prozesse abgestimmt
            werden.
          </p>

          <h2>Verantwortliche Stelle</h2>
          <p>
            Menk Harald Autoreparatur
            <br />
            Max-Hufschmidt-Str. 2
            <br />
            55130 Mainz
            <br />
            Telefon: <a href="tel:+49613185697">06131 8 56 97</a>
            <br />
            <span className="placeholder">E-Mail-Adresse ergaenzen</span>
          </p>

          <h2>Hosting und Server-Logfiles</h2>
          <p>
            Beim Aufruf der Website koennen technisch erforderliche Zugriffsdaten
            verarbeitet werden, etwa IP-Adresse, Datum, Uhrzeit, angeforderte
            Datei, Browserinformationen und Referrer. Diese Verarbeitung dient
            dem sicheren und stabilen Betrieb der Website.
          </p>

          <h2>Kontaktaufnahme</h2>
          <p>
            Wenn Besucher per Telefon oder E-Mail Kontakt aufnehmen, werden die
            uebermittelten Daten zur Bearbeitung der Anfrage verarbeitet. Welche
            Daten konkret anfallen, haengt vom gewaehlten Kontaktweg und vom
            Inhalt der Anfrage ab.
          </p>

          <h2>Cookies und Tracking</h2>
          <p>
            Diese Website setzt in der aktuellen Umsetzung keine
            einwilligungspflichtigen Marketing- oder Analyse-Cookies ein. Sollte
            spaeter ein Buchungstool, eine Karte, ein Chat, Analytics oder
            Werbung eingebunden werden, muss diese Datenschutzerklaerung
            entsprechend erweitert und gegebenenfalls ein Consent-Mechanismus
            integriert werden.
          </p>

          <h2>Rechte betroffener Personen</h2>
          <p>
            Betroffene Personen koennen je nach Voraussetzung Auskunft,
            Berichtigung, Loeschung, Einschraenkung der Verarbeitung,
            Datenuebertragbarkeit und Widerspruch verlangen. Zudem besteht ein
            Beschwerderecht bei einer Datenschutzaufsichtsbehoerde.
          </p>

          <h2>Stand</h2>
          <p>Juli 2026. Final vor Veroeffentlichung juristisch pruefen.</p>

          <p>
            <Link href="/">Zurueck zur Startseite</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
