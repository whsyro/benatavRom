// Pagina principală, cu secțiunea hero, statistici, capabilități și apel la acțiune.
import "./Home.css";

// Statisticile rapide afișate sub hero.
const stats = [
  { value: "25+", label: "Ani de experiență" },
  { value: "200+", label: "Clienți activi" },
  { value: "50+", label: "Angajați" },
  { value: "ISO 9001", label: "Certificare calitate" },
];

// Cardurile cu principalele puncte forte.
const highlights = [
  {
    icon: "⚙",
    title: "Producție de Precizie",
    desc: "Echipamente industriale fabricate conform standardelor europene, cu toleranțe minime și materiale certificate.",
  },
  {
    icon: "🔧",
    title: "Service și Mentenanță",
    desc: "Intervenții rapide, service preventiv și contracte anuale de mentenanță pentru echipamentele dumneavoastră.",
  },
  {
    icon: "📐",
    title: "Proiectare Tehnică",
    desc: "Departament intern de proiectare 2D/3D, capabil să transforme cerințele clientului în soluții funcționale.",
  },
  {
    icon: "🚚",
    title: "Livrare Națională",
    desc: "Rețea logistică extinsă pentru livrarea produselor în toată România, cu termene garantate.",
  },
];

export default function Home({ navigate }) {
  return (
    <div className="home">
      {/* Secțiunea principală de prezentare. */}
      <section className="hero">
        <div className="container hero-content">
          <p className="section-label">Industrie · Producție · Calitate</p>
          <h1 className="hero-title">
            Soluții Industriale
            <br />
            <span className="accent">Pentru România</span>
          </h1>
          <p className="hero-desc">
            Benatav Rom este un producător industrial român cu peste 25 de ani de experiență,
            specializat în fabricarea și livrarea de echipamente și componente pentru industrie.
          </p>

          {/* Butoanele principale de navigare. */}
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate("servicii")}>
              Serviciile Noastre
            </button>
            <button className="btn-outline" onClick={() => navigate("contact")}>
              Cere Ofertă
            </button>
          </div>
        </div>

        {/* Decorul din fundal. */}
        <div className="hero-bg-line" />
      </section>

      {/* Banda cu cifrele importante. */}
      <section className="stats-bar">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Grila cu punctele forte ale firmei. */}
      <section className="section">
        <div className="container">
          <p className="section-label">Ce Oferim</p>
          <h2 className="section-title">Capabilități Principale</h2>
          <div className="divider" />
          <div className="highlights-grid">
            {highlights.map((h) => (
              <div key={h.title} className="highlight-card">
                <div className="highlight-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner final cu apel la acțiune. */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ai nevoie de o soluție industrială?</h2>
            <p>Contactează echipa noastră și primești o ofertă personalizată în 24 de ore.</p>
          </div>
          <button className="btn-primary" onClick={() => navigate("contact")}>
            Contactează-ne →
          </button>
        </div>
      </section>
    </div>
  );
}
