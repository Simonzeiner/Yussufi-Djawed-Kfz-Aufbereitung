import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Menk Harald Autoreparatur Mainz | Freie Kfz-Werkstatt",
  },
  description:
    "Moderne Website fuer Menk Harald Autoreparatur in Mainz: Reparatur, Wartung, Diagnose, Bremsen, Reifen und transparente Werkstattkommunikation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Menk Harald Autoreparatur Mainz",
    description:
      "Freie Kfz-Werkstatt in Mainz fuer Diagnose, Wartung, Reparatur, Bremsen und Reifenservice.",
    images: ["/images/werkstatt-hero.png"],
  },
};

const services = [
  {
    eyebrow: "01",
    title: "Inspektion & Wartung",
    text: "Planbare Services nach Herstellervorgaben, klare Rueckmeldung und saubere Dokumentation.",
  },
  {
    eyebrow: "02",
    title: "Fehlerdiagnose",
    text: "Strukturierte Suche statt Teiletausch auf Verdacht: auslesen, pruefen, erklaeren, beheben.",
  },
  {
    eyebrow: "03",
    title: "Bremsen & Fahrwerk",
    text: "Praezise Arbeit an sicherheitsrelevanten Komponenten mit Blick auf Komfort und Haltbarkeit.",
  },
  {
    eyebrow: "04",
    title: "Reifen & Raeder",
    text: "Wechsel, Sichtpruefung, Profilcheck und Beratung fuer die passende Saisonloesung.",
  },
  {
    eyebrow: "05",
    title: "Oel, Filter & Verschleissteile",
    text: "Routinen, die den Wagen verlaesslich halten: fachgerecht, nachvollziehbar und terminsicher.",
  },
  {
    eyebrow: "06",
    title: "HU/AU Vorbereitung",
    text: "Vorabcheck und Maengelbearbeitung, damit die Pruefung ohne unnoetige Ueberraschungen laeuft.",
  },
];

const proofPoints = [
  "Lokaler Ansprechpartner in Mainz",
  "Transparente Empfehlungen vor der Reparatur",
  "Keine Tracking-Cookies, keine externen Schriftarten",
  "Responsive, barrierearme Umsetzung",
];

const faqs = [
  {
    q: "Kann ich direkt online einen Termin buchen?",
    a: "Die Seite ist fuer Termin-Anfragen vorbereitet. Sobald Telefon, E-Mail oder ein Buchungstool bestaetigt sind, kann der CTA direkt verbunden werden.",
  },
  {
    q: "Welche Fahrzeugmarken werden betreut?",
    a: "Bitte die tatsaechlich betreuten Marken oder Spezialisierungen ergaenzen. Bis dahin kommuniziert die Website bewusst allgemein und rechtssicher.",
  },
  {
    q: "Sind Impressum und Datenschutz live-ready?",
    a: "Die Seitenstruktur ist vorbereitet. Vor Veroeffentlichung muessen die Pflichtangaben des Unternehmens und die finalen Datenschutzdetails ergaenzt und juristisch geprueft werden.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Menk Harald Autoreparatur",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mainz",
    addressCountry: "DE",
  },
  areaServed: "Mainz",
  image: "/images/werkstatt-hero.png",
  url: "https://example.com",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Startseite">
          <span className="brand-mark" aria-hidden="true">
            MH
          </span>
          <span>
            <strong>Menk Harald</strong>
            <small>Autoreparatur Mainz</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Hauptnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#werkstatt">Werkstatt</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="nav-cta" href="#kontakt">
          Termin anfragen
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <Image
            src="/images/werkstatt-hero.png"
            alt="Helle moderne Autowerkstatt mit Fahrzeugdiagnose"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="kicker">Freie Kfz-Werkstatt in Mainz</p>
            <h1 id="hero-title">Autoreparatur mit Ruhe, Praezision und klarer Ansage.</h1>
            <p className="hero-copy">
              Ein hochwertiger neuer Webauftritt fuer Menk Harald Autoreparatur:
              persoenlich, vertrauensstark und auf schnelle Termin-Anfragen optimiert.
            </p>
            <div className="hero-actions" aria-label="Schnellaktionen">
              <a className="button button-primary" href="#kontakt">
                Termin anfragen
              </a>
              <a className="button button-secondary" href="#leistungen">
                Leistungen ansehen
              </a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Wichtige Hinweise">
            <span>Standort</span>
            <strong>Mainz</strong>
            <p>Adresse, Telefon und Oeffnungszeiten vor Livegang ergaenzen.</p>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Vertrauensmerkmale">
          {proofPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </section>

        <section className="section intro" id="werkstatt">
          <div>
            <p className="section-label">Profil</p>
            <h2>Eine Werkstattseite, die Kompetenz zeigt, ohne laut zu werden.</h2>
          </div>
          <p>
            Besucher sollen sofort verstehen, wofuer die Werkstatt steht:
            ehrliche Diagnose, nachvollziehbare Reparaturen und ein lokaler
            Ansprechpartner in Mainz. Die Gestaltung kombiniert technische
            Praezision mit warmer, persoenlicher Tonalitaet.
          </p>
        </section>

        <section className="section services" id="leistungen" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-label">Leistungen</p>
            <h2 id="services-title">Alles Wichtige fuer Alltag, Sicherheit und Werterhalt.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span>{service.eyebrow}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band">
          <div className="feature-copy">
            <p className="section-label">Arbeitsweise</p>
            <h2>Erst verstehen. Dann reparieren.</h2>
            <p>
              Moderne Fahrzeugtechnik braucht eine Website, die den gleichen
              Anspruch vermittelt: Diagnose mit System, transparente Empfehlung
              und klare naechste Schritte fuer Kundinnen und Kunden.
            </p>
            <ul className="check-list">
              <li>Klare Anfragefuehrung statt verstreuter Kontaktinfos</li>
              <li>Verstaendliche Leistungsbereiche fuer schnelle Orientierung</li>
              <li>Trust-Signale ohne unbewiesene Superlative</li>
            </ul>
          </div>
          <div className="feature-media">
            <Image
              src="/images/service-bremsen-diagnose.png"
              alt="Bremsanlage, Werkzeug und Diagnoseumgebung in einer modernen Werkstatt"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </section>

        <section className="section process" id="ablauf" aria-labelledby="process-title">
          <div className="section-heading">
            <p className="section-label">Ablauf</p>
            <h2 id="process-title">Vom Problem zur Loesung in drei klaren Schritten.</h2>
          </div>
          <div className="timeline">
            <article>
              <span>1</span>
              <h3>Anfragen</h3>
              <p>Fahrzeugdaten, Anliegen und Wunschzeit mitteilen.</p>
            </article>
            <article>
              <span>2</span>
              <h3>Pruefen</h3>
              <p>Werkstatt prueft Ursache, Aufwand und sinnvolle Optionen.</p>
            </article>
            <article>
              <span>3</span>
              <h3>Freigeben</h3>
              <p>Reparatur startet erst nach Ruecksprache und klarer Empfehlung.</p>
            </article>
          </div>
        </section>

        <section className="section faq" aria-labelledby="faq-title">
          <div className="section-heading">
            <p className="section-label">Fragen</p>
            <h2 id="faq-title">Was Besucher vor dem ersten Kontakt wissen wollen.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-band" id="kontakt" aria-labelledby="contact-title">
          <div>
            <p className="section-label">Kontakt</p>
            <h2 id="contact-title">Bereit fuer Termine, sobald die echten Daten vorliegen.</h2>
            <p>
              Diese Vorschau nutzt Platzhalter, damit keine falschen
              Pflichtangaben veroeffentlicht werden. Vor dem Livegang bitte
              Adresse, Telefon, E-Mail und Oeffnungszeiten einsetzen.
            </p>
          </div>
          <div className="contact-card">
            <dl>
              <div>
                <dt>Telefon</dt>
                <dd>[Telefonnummer ergaenzen]</dd>
              </div>
              <div>
                <dt>E-Mail</dt>
                <dd>[E-Mail-Adresse ergaenzen]</dd>
              </div>
              <div>
                <dt>Adresse</dt>
                <dd>[Strasse, PLZ Mainz ergaenzen]</dd>
              </div>
              <div>
                <dt>Oeffnungszeiten</dt>
                <dd>[Zeiten ergaenzen]</dd>
              </div>
            </dl>
            <span className="button button-primary full placeholder-action">
              Kontaktdaten ergaenzen
            </span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Menk Harald Autoreparatur. Inhalte und Pflichtangaben vor Livegang finalisieren.</p>
        <nav aria-label="Rechtliche Links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </footer>
    </>
  );
}
