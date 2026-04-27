// Pagina cu departamentele companiei și detaliile afișate pe taburi.
import { useState } from "react";
import "./Departamente.css";

// Datele pentru fiecare departament.
const departamente = [
  {
    id: "productie",
    name: "Producție",
    short: "Fabricarea componentelor industriale",
    desc: "Departamentul de producție este inima Benatav Rom. Dispunem de o hală de 2.000 m² echipată cu strunguri CNC, freze, aparate de sudură MIG/MAG și linii de asamblare. Producem componente la comandă sau în serii, cu respectarea strictă a toleranțelor tehnice.",
    members: 22,
    highlights: ["Strunguri CNC de ultimă generație", "Sudură MIG/MAG și TIG", "Producție serie și unicat", "Control calitate intern"],
  },
  {
    id: "proiectare",
    name: "Proiectare Tehnică",
    short: "Design 2D/3D și inginerie",
    desc: "Echipa de proiectare utilizează software profesional (AutoCAD, SolidWorks) pentru realizarea planurilor tehnice, prototipurilor virtuale și documentației de execuție. Colaborăm strâns cu clientul pentru a transforma cerințele în soluții concrete.",
    members: 8,
    highlights: ["Proiectare CAD 2D și 3D", "Analiză FEM/simulare", "Documentație tehnică completă", "Prototipare rapidă"],
  },
  {
    id: "service",
    name: "Service și Mentenanță",
    short: "Intervenții și suport tehnic",
    desc: "Oferim servicii de instalare, punere în funcțiune și mentenanță pentru echipamentele industriale. Echipa de service intervine în termen de 24 de ore pe întreg teritoriul României. Contractele de mentenanță preventivă reduc semnificativ costurile de reparații.",
    members: 10,
    highlights: ["Intervenție în 24 ore", "Contracte anuale de mentenanță", "Piese de schimb în stoc", "Suport tehnic telefonic"],
  },
  {
    id: "logistica",
    name: "Logistică și Livrări",
    short: "Transport și gestiunea stocurilor",
    desc: "Departamentul de logistică coordonează aprovizionarea cu materii prime, gestiunea stocurilor și livrările către clienți. Dispunem de o flotă proprie de autovehicule și colaborăm cu parteneri de transport pentru comenzi de dimensiuni mari.",
    members: 6,
    highlights: ["Flotă proprie de transport", "Depozit de 800 m²", "Livrare națională", "Ambalare industrială"],
  },
  {
    id: "comercial",
    name: "Departament Comercial",
    short: "Vânzări și relații cu clienții",
    desc: "Echipa comercială este primul punct de contact cu clienții Benatav Rom. Elaborăm oferte tehnico-comerciale personalizate, negociem contracte și asigurăm o comunicare transparentă pe tot parcursul colaborării.",
    members: 5,
    highlights: ["Ofertare rapidă (24-48 ore)", "Consultanță tehnică gratuită", "Gestionare conturi clienți", "Contracte flexibile"],
  },
];

export default function Departamente() {
  // Ține minte departamentul selectat.
  const [active, setActive] = useState("productie");

  // Găsește detaliile departamentului activ.
  const dep = departamente.find((d) => d.id === active);

  return (
    <div className="departamente">
      {/* Antetul paginii. */}
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Structura Internă</p>
          <h1>Departamentele Noastre</h1>
        </div>
      </div>

      <section className="section">
        <div className="container dep-layout">
          {/* Lista departamentelor. */}
          <aside className="dep-sidebar">
            {departamente.map((d) => (
              <button
                key={d.id}
                className={`dep-tab ${active === d.id ? "active" : ""}`}
                onClick={() => setActive(d.id)}
              >
                <strong>{d.name}</strong>
                <span>{d.short}</span>
              </button>
            ))}
          </aside>

          {/* Zona cu detaliile departamentului ales. */}
          <div className="dep-content">
            <div className="dep-header">
              <h2>{dep.name}</h2>
              <span className="dep-badge">{dep.members} angajați</span>
            </div>

            <div className="divider" />

            {/* Descrierea principală. */}
            <p className="dep-desc">{dep.desc}</p>

            <h4>Capabilități cheie</h4>

            {/* Lista capabilităților cheie. */}
            <ul className="dep-list">
              {dep.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
