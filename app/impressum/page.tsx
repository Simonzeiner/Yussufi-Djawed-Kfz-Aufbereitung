import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Anbieterkennzeichnung fuer Menk Harald Autoreparatur Mainz.",
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
          <p>
            Diese Seite ist als rechtssichere Struktur vorbereitet. Die
            bekannten Unternehmensdaten sind eingetragen. Fehlende Pflichtangaben
            muessen vor Veroeffentlichung noch ergaenzt und geprueft werden.
          </p>

          <h2>Anbieter</h2>
          <p>
            <strong>Menk Harald Autoreparatur</strong>
            <br />
            Max-Hufschmidt-Str. 2
            <br />
            55130 Mainz
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+49613185697">06131 8 56 97</a>
            <br />
            E-Mail: <span className="placeholder">E-Mail-Adresse ergaenzen</span>
          </p>

          <h2>Vertretungsberechtigte Person</h2>
          <p>
            <span className="placeholder">Name und Rechtsform ergaenzen</span>
          </p>

          <h2>Umsatzsteuer-ID / Registerangaben</h2>
          <p>
            <span className="placeholder">
              Nur ergaenzen, falls eine Pflichtangabe besteht
            </span>
          </p>

          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            <span className="placeholder">
              Teilnahmebereitschaft und zuständige Stelle final klaeren
            </span>
          </p>

          <h2>Bildnachweise</h2>
          <p>
            Die in dieser Vorschau verwendeten Werkstattbilder wurden fuer
            dieses Projekt generiert und enthalten keine bewusst eingebundenen
            Markenlogos, Kennzeichen oder identifizierbaren Personen.
          </p>

          <p>
            <Link href="/">Zurueck zur Startseite</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
