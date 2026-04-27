// Pagina 404 afișată când se încearcă accesarea unei secțiuni inexistente.
import "./NotFound.css";

export default function NotFound({ navigate }) {
  return (
    <div className="notfound">
      {/* Codul erorii afișat mare. */}
      <span className="notfound-code">404</span>

      {/* Mesajul principal al paginii. */}
      <h1>Pagina nu a fost găsită</h1>
      <p>Ne pare rău, pagina pe care o cauți nu există sau a fost mutată.</p>

      {/* Butonul duce înapoi la pagina principală. */}
      <button className="btn-primary" onClick={() => navigate("acasa")}>
        ← Înapoi Acasă
      </button>
    </div>
  );
}
