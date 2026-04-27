// Pagina de prezentare a companiei, cu istoric, informații cheie și valori.
import "./Despre.css";

// Valorile afișate în a doua secțiune.
const valori = [
  { title: "Calitate", desc: "Fiecare produs trece prin control de calitate riguros înainte de livrare." },
  { title: "Fiabilitate", desc: "Respectăm termenele și promisiunile față de fiecare client." },
  { title: "Inovație", desc: "Investim constant în tehnologie și procese moderne de producție." },
  { title: "Parteneriat", desc: "Construim relații pe termen lung bazate pe încredere și transparență." },
];

export default function Despre() {
  return (
    <div className="despre">
      {/* Antetul paginii. */}
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Cine Suntem</p>
          <h1>Despre Benatav Rom</h1>
        </div>
      </div>

      {/* Istoric și date generale despre companie. */}
      <section className="section">
        <div className="container despre-grid">
          <div className="despre-text">
            <p className="section-label">Istoria Noastră</p>
            <h2>Peste 25 de Ani de Industrie Românească</h2>
            <div className="divider" />
            <p>
              Fondată în 1998, Benatav Rom S.R.L. a crescut de la un atelier modest din Suceava la un producător industrial recunoscut la nivel național. Misiunea noastră a rămas neschimbată: să oferim clienților soluții industriale de calitate superioară, la prețuri competitive.
            </p>
            <p style={{ marginTop: "1rem" }}>
              De-a lungul anilor, am investit constant în utilaje de ultimă generație și în formarea specialiștilor noștri, consolidând poziția Benatav Rom ca un partener de încredere în industria românească.
            </p>
          </div>

          {/* Cardul cu informații sintetice. */}
          <div className="despre-side">
            <div className="info-card">
              <div className="info-row"><span>Fondată</span><strong>1998</strong></div>
              <div className="info-row"><span>Sediu</span><strong>Suceava, România</strong></div>
              <div className="info-row"><span>Angajați</span><strong>50+ specialiști</strong></div>
              <div className="info-row"><span>Certificări</span><strong>ISO 9001:2015</strong></div>
              <div className="info-row"><span>Acoperire</span><strong>Națională</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Valorile de bază ale companiei. */}
      <section className="section valori-section">
        <div className="container">
          <p className="section-label">Valorile Noastre</p>
          <h2>Pe Ce Ne Bazăm</h2>
          <div className="divider" />
          <div className="valori-grid">
            {valori.map((v) => (
              <div key={v.title} className="valoare-card">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
