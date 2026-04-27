// Footer-ul site-ului, cu brand, linkuri utile și informații de contact.
import "./Footer.css";

// Primește funcția de navigare pentru linkurile din footer.
export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Coloana cu brandul și descrierea. */}
        <div className="footer-brand">
          <div className="footer-logo" onClick={() => navigate("acasa")}>
            <span className="logo-main">BENATAV</span>
            <span className="logo-sub">ROM</span>
          </div>
          <p>Soluții industriale de calitate pentru o industrie modernă și sustenabilă.</p>
        </div>

        {/* Coloana cu linkuri de navigare. */}
        <div className="footer-col">
          <h4>Navigare</h4>
          <ul>
            {/* Linkurile sunt generate dintr-o listă scurtă. */}
            {[
              ["acasa", "Acasă"],
              ["despre", "Despre Noi"],
              ["departamente", "Departamente"],
              ["servicii", "Servicii"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <li key={id}>
                <a onClick={() => navigate(id)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Coloana cu datele de contact. */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>Str. Industriei nr. 12</li>
            <li>Suceava, România</li>
            <li>office@benatavrom.ro</li>
            <li>+40 000 000 000</li>
          </ul>
        </div>
      </div>

      {/* Bara de jos cu anul curent. */}
      <div className="footer-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Benatav Rom S.R.L. Toate drepturile rezervate.</span>
        </div>
      </div>
    </footer>
  );
}
