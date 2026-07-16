import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute:
      "Djawed Yussufi Reifenservice und Kfz-Aufbereitung Mainz | Mainzer Autoteile Discount",
  },
  description:
    "Reifenservice, Autoteile, Felgen, Werkstatt, Fahrzeugaufbereitung, Smart Repair und TÜV-Vorbereitung in Mainz.",
};

const phoneDisplay = "06131 5565234";
const phoneHref = "tel:+4961315565234";
const email = "kontakt@mainzer-autoteile-discount.de";
const address = "Weisenauer Weg 4-6, 55129 Mainz";
const routeUrl = "https://maps.apple.com/?address=Mainzer+Autoteile+Discount";

const services = [
  ["Teilehandel", "Kfz-Ersatzteile, Öl, Filter, Karosserieteile, Zubehör und Beratung für nahezu jede Automarke."],
  ["Reifenservice", "Reifenverkauf, Montage, Wechsel, Auswuchten und saisonale Einlagerung mit kurzer Abstimmung."],
  ["Felgenverkauf", "Felgen in passenden Größen, Designs und Ausführungen inklusive Zubehörberatung vor Ort."],
  ["Werkstatt", "Wartung, Reparatur, Fehlerdiagnose und technische Checks für ein verlässliches Fahrzeug."],
  ["Fahrzeugaufbereitung", "Innenpflege, Außenreinigung, Politur und Lackaufbereitung für spürbar mehr Wertigkeit."],
  ["Smart Repair", "Kleine Kratzer, Dellen und optische Schäden präzise, schnell und wirtschaftlich beheben lassen."],
];

const hours = [
  ["Montag", "09:00 - 18:00 Uhr"],
  ["Dienstag", "09:00 - 18:00 Uhr"],
  ["Mittwoch", "09:00 - 18:00 Uhr"],
  ["Donnerstag", "09:00 - 18:00 Uhr"],
  ["Freitag", "09:00 - 18:00 Uhr"],
  ["Samstag", "09:00 - 17:00 Uhr"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Djawed Yussufi Reifenservice und Kfz-Aufbereitung",
  alternateName: "Mainzer Autoteile Discount",
  telephone: "+4961315565234",
  email,
  image: "/images/mainzer/hero-tire-service.jpg",
  logo: "/images/mainzer/logo.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Weisenauer Weg 4-6",
    postalCode: "55129",
    addressLocality: "Mainz",
    addressCountry: "DE",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "218",
  },
  sameAs: ["https://www.instagram.com/mainzer.autoteile.discount/"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="site-header" aria-label="Hauptnavigation">
        <Link className="brand" href="/" aria-label="Startseite">
          <Image src="/images/mainzer/logo.jpg" alt="Mainzer Autoteile Discount" width={146} height={60} priority />
          <span className="brand-copy">
            <strong>Djawed Yussufi</strong>
            <small>Reifenservice und Kfz-Aufbereitung</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Seitennavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#aufbereitung">Aufbereitung</a>
          <a href="#bewertungen">Vertrauen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="nav-cta" href={phoneHref}>Jetzt anrufen</a>
      </header>

      <main>
        <section className="hero">
          <Image
            src="/images/mainzer/hero-tire-service.jpg"
            alt="Professioneller Reifenservice in einer Kfz-Werkstatt"
            fill
            sizes="100vw"
            priority
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="kicker">Reifenservice · Autoteile · Kfz-Aufbereitung in Mainz</p>
            <h1>Djawed Yussufi Reifenservice und Kfz-Aufbereitung</h1>
            <p className="hero-copy">
              Mainzer Autoteile Discount verbindet günstige Teile, starken Reifenservice,
              Felgen, Werkstatt und Fahrzeugpflege zu einem klaren Anlaufpunkt am Weisenauer Weg.
            </p>
            <div className="hero-actions" aria-label="Schnellkontakt">
              <a className="button button-primary" href={phoneHref}>Jetzt anrufen</a>
              <a className="button button-secondary" href="#leistungen">Leistungen ansehen</a>
            </div>
          </div>
          <aside className="status-panel" aria-label="Kontaktübersicht">
            <span>Google-Bewertung</span>
            <strong>4,8 / 5</strong>
            <p>Basierend auf 218 Bewertungen · {address}</p>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Vorteile">
          <p>4,8 Sterne auf Basis von 218 Google-Bewertungen</p>
          <p>Autoteile, Reifenservice und Aufbereitung an einem Standort</p>
          <p>Mo. bis Fr. 09:00-18:00 Uhr, Sa. 09:00-17:00 Uhr</p>
          <p>Weisenauer Weg 4-6 in 55129 Mainz</p>
        </section>

        <section className="section intro" id="vertrauen">
          <div>
            <p className="section-label">Mainz, Weisenauer Weg 4-6</p>
            <h2>Ein moderner Auftritt für einen lokalen Betrieb, der mehr kann als nur ein einzelnes Gewerk.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Ersatzteil gesucht, Reifen montieren, Felgen auswählen, Fahrzeug aufbereiten
              oder Werkstatttermin abstimmen: alles ist direkt erreichbar und klar sortiert.
            </p>
            <p>
              Die Website ist datensparsam umgesetzt: keine Analyse-Skripte,
              keine externen Webfonts und keine eingebettete Karte.
            </p>
          </div>
        </section>

        <section className="section services" id="leistungen">
          <div className="section-heading">
            <p className="section-label">Leistungen</p>
            <h2>Alles Wesentliche fürs Auto, sauber gebündelt.</h2>
          </div>
          <div className="service-grid">
            {services.map(([title, text], index) => (
              <article className="service-card" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band" id="aufbereitung">
          <div className="feature-copy">
            <p className="section-label">Fahrzeugaufbereitung</p>
            <h2>Mehr Glanz, mehr Werterhalt, mehr Freude am eigenen Fahrzeug.</h2>
            <p>
              Innenraumpflege, Außenreinigung, Politur und Lackaufbereitung werden
              als hochwertige Servicewelt präsentiert und direkt anfragbar gemacht.
            </p>
            <div className="step-list">
              <article><span>01</span><div><h3>Anliegen klären</h3><p>Kurz schildern, welche Teile, Reifen oder Pflegeleistung benötigt werden.</p></div></article>
              <article><span>02</span><div><h3>Passende Lösung finden</h3><p>Serviceumfang, Verfügbarkeit und nächster Schritt werden verständlich abgestimmt.</p></div></article>
              <article><span>03</span><div><h3>Sauber erledigen</h3><p>Montage, Werkstattarbeit oder Aufbereitung erfolgen mit Fokus auf Ergebnis.</p></div></article>
            </div>
          </div>
          <div className="feature-media">
            <Image src="/images/mainzer/paint-detailing.jpg" alt="Professionelle Lackaufbereitung an einem Fahrzeug" fill sizes="(max-width: 980px) 100vw, 48vw" />
          </div>
        </section>

        <section className="section reviews" id="bewertungen">
          <div className="section-heading">
            <p className="section-label">Vertrauen</p>
            <h2>Starke lokale Reputation sichtbar gemacht.</h2>
          </div>
          <div className="review-grid">
            <figure className="review-card"><blockquote>“4,8 von 5 Sternen”</blockquote><figcaption><strong>Google-Bewertung</strong><span>Basierend auf 218 Bewertungen</span></figcaption></figure>
            <figure className="review-card"><blockquote>“Alles rund ums Auto”</blockquote><figcaption><strong>Leistungen</strong><span>Teile, Reifen, Felgen, Werkstatt und Aufbereitung</span></figcaption></figure>
            <figure className="review-card"><blockquote>“Direkt in Mainz”</blockquote><figcaption><strong>Standort</strong><span>Weisenauer Weg 4-6</span></figcaption></figure>
          </div>
        </section>

        <section className="section faq" id="fragen">
          <div className="section-heading">
            <p className="section-label">Häufige Fragen</p>
            <h2>Schnelle Orientierung vor dem ersten Kontakt.</h2>
          </div>
          <div className="faq-list">
            <details><summary>Kann ich direkt für Reifenservice oder Aufbereitung anfragen?</summary><p>Ja. Am schnellsten geht es telefonisch unter 06131 5565234 oder über WhatsApp.</p></details>
            <details><summary>Werden auch Autoteile für unterschiedliche Marken angeboten?</summary><p>Ja. Der Schwerpunkt liegt auf Ersatzteilen, Reifen, Felgen, Öl, Karosserie- und Zubehörteilen für viele Marken.</p></details>
            <details><summary>Gibt es Tracking auf dieser Website?</summary><p>Nein. Die Website nutzt keine Analyse-Skripte und keine eingebetteten Karten.</p></details>
          </div>
        </section>

        <section className="contact-band" id="kontakt">
          <div className="contact-copy">
            <p className="section-label">Kontakt</p>
            <h2>Direkt zum Team am Weisenauer Weg.</h2>
            <p>Für Teileanfragen, Reifenservice, Werkstatttermine oder Aufbereitung: kurz melden und Fahrzeugdaten bereithalten.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={phoneHref}>{phoneDisplay}</a>
              <a className="button button-light" href={`mailto:${email}`}>E-Mail</a>
              <a className="button button-light" href={routeUrl}>Anfahrt öffnen</a>
            </div>
          </div>
          <aside className="contact-card" aria-label="Adresse und Öffnungszeiten">
            <dl>
              <div><dt>Unternehmen</dt><dd>Djawed Yussufi Reifenservice und Kfz-Aufbereitung</dd></div>
              <div><dt>Adresse</dt><dd>{address}</dd></div>
              <div><dt>Telefon</dt><dd><a href={phoneHref}>{phoneDisplay}</a></dd></div>
              <div><dt>E-Mail</dt><dd><a href={`mailto:${email}`}>{email}</a></dd></div>
              <div><dt>Instagram</dt><dd><a href="https://www.instagram.com/mainzer.autoteile.discount/" target="_blank" rel="noreferrer">@mainzer.autoteile.discount</a></dd></div>
              <div>
                <dt>Öffnungszeiten</dt>
                <dd>
                  <ul className="hours-list">
                    {hours.map(([day, time]) => <li key={day}><span>{day}</span><strong>{time}</strong></li>)}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Djawed Yussufi Reifenservice und Kfz-Aufbereitung</p>
        <nav aria-label="Rechtliche Links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>
      </footer>

      <div className="mobile-cta" aria-label="Schnellaktionen">
        <a href={phoneHref}>Anrufen</a>
        <a href={routeUrl}>Route</a>
      </div>
    </>
  );
}
