import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzhinweise für Djawed Yussufi Reifenservice und Kfz-Aufbereitung in Mainz.",
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
            Diese Website ist datensparsam umgesetzt: keine Analyse-Skripte,
            keine Marketing-Cookies, keine externen Webfonts und keine
            eingebettete Drittanbieter-Karte.
          </p>
          <h2>Verantwortliche Stelle</h2>
          <p>
            Djawed Yussufi Reifenservice und Kfz-Aufbereitung
            <br />
            Weisenauer Weg 4-6
            <br />
            55129 Mainz
            <br />
            Deutschland
            <br />
            Telefon: <a href="tel:+4961315565234">06131 5565234</a>
            <br />
            E-Mail:{" "}
            <a href="mailto:kontakt@mainzer-autoteile-discount.de">
              kontakt@mainzer-autoteile-discount.de
            </a>
          </p>
          <h2>Hosting und Server-Logfiles</h2>
          <p>
            Beim Aufruf der Website können technisch erforderliche Zugriffsdaten
            verarbeitet werden, etwa IP-Adresse, Datum, Uhrzeit, angeforderte
            Datei, Browserinformationen und Referrer. Diese Verarbeitung dient
            dem sicheren und stabilen Betrieb der Website.
          </p>
          <h2>Kontaktaufnahme</h2>
          <p>
            Wenn Besucher per Telefon, E-Mail, WhatsApp oder Instagram Kontakt
            aufnehmen, werden die übermittelten Daten zur Bearbeitung der Anfrage
            verarbeitet. Welche Daten konkret anfallen, hängt vom gewählten
            Kontaktweg und vom Inhalt der Anfrage ab.
          </p>
          <h2>Externe Links, WhatsApp, Instagram und Karten</h2>
          <p>
            Links zu Instagram, WhatsApp und Kartenanbietern werden erst geöffnet,
            wenn Besucher sie aktiv anklicken. Ab diesem Zeitpunkt gelten die
            Datenschutzbedingungen des jeweiligen Anbieters.
          </p>
          <h2>Rechte betroffener Personen</h2>
          <p>
            Betroffene Personen können je nach Voraussetzung Auskunft,
            Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch verlangen. Zudem besteht ein
            Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
          </p>
          <h2>Stand</h2>
          <p>Juli 2026.</p>
          <p>
            <Link href="/">Zurück zur Startseite</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
