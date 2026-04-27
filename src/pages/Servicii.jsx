// Pagina care listează serviciile oferite de companie sub formă de carduri.
import "./Servicii.css";

// Lista serviciilor afișate în pagină.
const servicii = [
  {
    nr: "01",
    title: "Fabricare la Comandă",
    desc: "Producem componente și subansamble industriale conform specificațiilor tehnice ale clientului. Capacitate de producție flexibilă - de la piese unicat la serii de 1.000+ bucăți.",
    tags: ["CNC", "Sudură", "Strunjire", "Frezare"],
  },
  {
    nr: "02",
    title: "Proiectare Tehnică",
    desc: "Servicii complete de engineering: proiectare 2D/3D, calcul de rezistență, documentație tehnică și asistență pe toată durata proiectului.",
    tags: ["AutoCAD", "SolidWorks", "FEM", "Documentație"],
  },
  {
    nr: "03",
    title: "Instalare și Punere în Funcțiune",
    desc: "Echipele noastre tehnice se deplasează la locația clientului pentru instalarea, testarea și punerea în funcțiune a echipamentelor livrate.",
    tags: ["On-site", "Testare", "Formare personal", "Documentare"],
  },
  {
    nr: "04",
    title: "Mentenanță Preventivă",
    desc: "Contracte anuale de mentenanță preventivă cu inspecții periodice, înlocuire consumabile și rapoarte detaliate de stare a echipamentelor.",
    tags: ["Contract anual", "Inspecții", "Rapoarte", "Piese schimb"],
  },
  {
    nr: "05",
    title: "Reparații și Service Urgent",
    desc: "Intervenții de urgență în maximum 24 de ore pe întreg teritoriul României. Dispunem de stoc de piese de schimb pentru cele mai comune defecțiuni.",
    tags: ["24 ore", "Național", "Stoc piese", "Diagnostic"],
  },
  {
    nr: "06",
    title: "Consultanță Industrială",
    desc: "Consiliere tehnică gratuită pentru alegerea soluției optime. Analizăm procesul dumneavoastră și recomandăm echipamentele și configurația potrivite.",
    tags: ["Audit tehnic", "Recomandare", "Optimizare", "ROI"],
  },
];

export default function Servicii() {
  return (
    <div className="servicii">
      {/* Antetul paginii. */}
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Ce Facem</p>
          <h1>Serviciile Noastre</h1>
        </div>
      </div>

      {/* Grila cu toate serviciile. */}
      <section className="section">
        <div className="container">
          <div className="servicii-grid">
            {servicii.map((s) => (
              <div key={s.nr} className="serviciu-card">
                {/* Numărul serviciului. */}
                <span className="serviciu-nr">{s.nr}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>

                {/* Etichetele tehnice ale serviciului. */}
                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
