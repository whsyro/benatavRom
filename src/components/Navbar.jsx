// Bara de navigare principală, cu meniu responsive și evidențierea paginii active.
import { useState } from "react";
import "./Navbar.css";

// Linkurile din meniul principal.
const links = [
  { id: "acasa", label: "Acasă" },
  { id: "despre", label: "Despre Noi" },
  { id: "departamente", label: "Departamente" },
  { id: "servicii", label: "Servicii" },
  { id: "contact", label: "Contact" },
];

// Primește pagina activă și funcția de navigare.
export default function Navbar({ page, navigate }) {
  // Controlează meniul pe mobil.
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo-ul duce la pagina principală. */}
        <div className="navbar-logo" onClick={() => navigate("acasa")}>
          <span className="logo-main">BENATAV</span>
          <span className="logo-sub">ROM</span>
        </div>

        {/* Lista de linkuri și butonul principal. */}
        <nav className={`navbar-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a
              key={l.id}
              className={`nav-link ${page === l.id ? "active" : ""}`}
              onClick={() => {
                // Schimbă pagina și închide meniul pe mobil.
                navigate(l.id);
                setOpen(false);
              }}
            >
              {l.label}
            </a>
          ))}

          {/* Butonul de contact din meniu. */}
          <a
            className="btn-primary nav-cta"
            onClick={() => {
              navigate("contact");
              setOpen(false);
            }}
          >
            Contactează-ne
          </a>
        </nav>

        {/* Butonul hamburger pentru mobil. */}
        <button className="hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
