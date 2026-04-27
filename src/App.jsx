// Componenta principală: gestionează navigarea internă și afișează pagina activă.
import { useState } from "react";

// Componente comune afișate pe toate paginile.
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Paginile aplicației.
import Home from "./pages/Home";
import Despre from "./pages/Despre";
import Departamente from "./pages/Departamente";
import Servicii from "./pages/Servicii";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Stiluri globale.
import "./App.css";

export default function App() {
  // Reține pagina curentă.
  const [page, setPage] = useState("acasa");

  // Schimbă pagina și duce utilizatorul sus.
  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Alege ce pagină se afișează.
  const renderPage = () => {
    switch (page) {
      case "acasa":
        return <Home navigate={navigate} />;
      case "despre":
        return <Despre />;
      case "departamente":
        return <Departamente />;
      case "servicii":
        return <Servicii />;
      case "contact":
        return <Contact />;
      default:
        return <NotFound navigate={navigate} />;
    }
  };

  return (
    // Layoutul general al aplicației.
    <div className="site-wrapper">
      {/* Bara de navigare de sus. */}
      <Navbar page={page} navigate={navigate} />

      {/* Conținutul principal al paginii. */}
      <main>{renderPage()}</main>

      {/* Footer-ul comun pentru toate paginile. */}
      <Footer navigate={navigate} />
    </div>
  );
}
