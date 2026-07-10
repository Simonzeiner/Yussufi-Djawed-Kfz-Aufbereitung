import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Menk Harald Autoreparatur Mainz | Freie Kfz-Werkstatt",
  },
  description:
    "Menk Harald Autoreparatur in Mainz, Max-Hufschmidt-Str. 2: Reparatur, Wartung, Diagnose, Karosseriebau und transparente Werkstattkommunikation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Menk Harald Autoreparatur Mainz",
    description:
      "Freie Kfz-Werkstatt in Mainz fuer Diagnose, Wartung, Reparatur, Bremsen, Reifenservice und Karosseriebau.",
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
  "Kfz-Meister mit langjaehriger Erfahrung",
  "Max-Hufschmidt-Str. 2 in 55130 Mainz",
  "8 Bewertungen bei Das Oertliche, golocal und 11880",
  "Mo-Do 07:30-17:30 Uhr, Fr bis 15:00 Uhr",
];

const faqs = [
  {
    q: "Kann ich direkt online einen Termin buchen?",
    a: "Aktuell fuehrt die Website direkt zur telefonischen Anfrage unter 06131 8 56 97. Ein Online-Buchungstool kann spaeter ergaenzt werden.",
  },
  {
    q: "Wann ist die Werkstatt geoeffnet?",
    a: "Montag bis Donnerstag von 07:30 bis 17:30 Uhr, Freitag von 07:30 bis 15:00 Uhr und Samstag von 10:00 bis 12:00 Uhr.",
  },
  {
    q: "Wo befindet sich Menk Harald Autoreparatur?",
    a: "Die Werkstatt befindet sich in der Max-Hufschmidt-Str. 2, 55130 Mainz.",
  },
];

const openingHours = [
  ["Montag", "07:30 - 17:30 Uhr"],
  ["Dienstag", "07:30 - 17:30 Uhr"],
  ["Mittwoch", "07:30 - 17:30 Uhr"],
  ["Donnerstag", "07:30 - 17:30 Uhr"],
  ["Freitag", "07:30 - 15:00 Uhr"],
  ["Samstag", "10:00 - 12:00 Uhr"],
];

const reviews = [
  {
    source: "golocal",
    date: "13.11.2019",
    author: "fridolin56",
    quote: "erfahrener und kompetenter Kfz-Meister",
  },
  {
    source: "golocal",
    date: "08.11.2016",
    author: "mariamaral_",
    quote: "Sehr zufrieden",
  },
  {
    source: "golocal",
    date: "16.07.2013",
    author: "barbara.zett",
    quote: "prompt und preiswert",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Menk Harald Autoreparatur",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Max-Hufschmidt-Str. 2",
    postalCode: "55130",
    addressLocality: "Mainz",
    addressCountry: "DE",
  },
  telephone: "+49 6131 85697",
  areaServed: "Mainz",
  openingHours: [
    "Mo-Th 07:30-17:30",
    "Fr 07:30-15:00",
    "Sa 10:00-12:00",
  ],
  image: "/images/werkstatt-hero.png",
  url: "https://menk-harald-autoreparatur.f2hczvhjwm.chatgpt.site",
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
          <a href="#bewertungen">Bewertungen</a>
          <a href="#ablauf">Ablauf</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="nav-cta" href="tel:+49613185697">
          06131 8 56 97
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
              Menk Harald Autoreparatur in der Max-Hufschmidt-Str. 2:
              erfahrene Meisterarbeit, unkomplizierte Reparaturen und ein
              Preis-Leistungs-Verhaeltnis, das Kundinnen und Kunden seit Jahren
              schaetzen.
            </p>
            <div className="hero-actions" aria-label="Schnellaktionen">
              <a className="button button-primary" href="tel:+49613185697">
                Jetzt anrufen
              </a>
              <a className="button button-secondary" href="#leistungen">
                Leistungen ansehen
              </a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Wichtige Hinweise">
            <span>Standort</span>
            <strong>55130 Mainz</strong>
            <p>Max-Hufschmidt-Str. 2 · Telefon 06131 8 56 97</p>
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
            ein erfahrener Kfz-Meister, schnelle und unkomplizierte Reparaturen,
            nachvollziehbare Empfehlungen und ein lokaler Ansprechpartner in
            Mainz.
          </p>
        </section>

        <section className="section services" id="leistungen" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-label">Leistungen</p>
            <h2 id="services-title">Alles Wichtige fuer Alltag, Sicherheit und Werterhalt.</h2>
            <p className="section-subcopy">
              Schwerpunkt laut Branchenverzeichnis: Karosseriebau in Mainz.
              Dazu passend fuehrt die Website Wartung, Diagnose und klassische
              Autoreparatur klar zusammen.
            </p>
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

        <section className="section reviews" id="bewertungen" aria-labelledby="reviews-title">
          <div className="section-heading">
            <p className="section-label">Bewertungen</p>
            <h2 id="reviews-title">Vertrauen, das ueber Jahre gewachsen ist.</h2>
            <p className="section-subcopy">
              Nach deinen Angaben werden bei Das Oertliche insgesamt 8
              Bewertungen aus golocal und 11880 ausgewiesen. Aus rechtlichen
              Gruenden zeigen wir nur kurze Auszuege mit klarer Quellenangabe.
            </p>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <figure className="review-card" key={`${review.author}-${review.date}`}>
                <blockquote>„{review.quote}”</blockquote>
                <figcaption>
                  {review.author} · {review.date} · via {review.source}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="source-note">
            Quelle: kopierte Angaben aus Das Oertliche mit Verweisen auf golocal
            und 11880. Vor dauerhaftem Livegang bitte Bewertungsnutzung und
            Aktualitaet nochmals pruefen.
          </p>
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
            <h2 id="contact-title">Direkt zur Werkstatt in Mainz.</h2>
            <p>
              Am schnellsten klappt die Terminabsprache telefonisch. Die
              Oeffnungszeiten stammen aus den von dir kopierten Angaben von Das
              Oertliche / golocal.
            </p>
          </div>
          <div className="contact-card">
            <dl>
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:+49613185697">06131 8 56 97</a></dd>
              </div>
              <div>
                <dt>Adresse</dt>
                <dd>Max-Hufschmidt-Str. 2<br />55130 Mainz</dd>
              </div>
              <div>
                <dt>Oeffnungszeiten</dt>
                <dd>
                  <ol className="hours-list" aria-label="Oeffnungszeiten">
                    {openingHours.map(([day, hours]) => (
                      <li key={day}>
                        <span>{day}</span>
                        <strong>{hours}</strong>
                      </li>
                    ))}
                  </ol>
                </dd>
              </div>
            </dl>
            <a className="button button-primary full" href="tel:+49613185697">
              Jetzt anrufen
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Menk Harald Autoreparatur · Max-Hufschmidt-Str. 2 · 55130 Mainz</p>
        <nav aria-label="Rechtliche Links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </footer>
    </>
  );
}
