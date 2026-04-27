// Pagina de contact, cu informațiile firmei și formularul de trimitere mesaj.
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  // Valorile introduse în formular.
  const [form, setForm] = useState({ nume: "", email: "", tel: "", mesaj: "" });

  // Afișează mesajul de succes după trimitere.
  const [sent, setSent] = useState(false);

  // Actualizează câmpul modificat.
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Tratează trimiterea formularului.
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact">
      {/* Antetul paginii. */}
      <div className="page-hero">
        <div className="container">
          <p className="section-label">Hai să Colaborăm</p>
          <h1>Contact</h1>
        </div>
      </div>

      <section className="section">
        <div className="container contact-layout">
          {/* Datele de contact ale firmei. */}
          <div className="contact-info">
            <p className="section-label">Date de Contact</p>
            <h2>Suntem Aici Să Te Ajutăm</h2>
            <div className="divider" />
            <p className="contact-intro">
              Trimite-ne un mesaj sau contactează-ne direct. Echipa noastră comercială răspunde în maximum 24 de ore.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="ci-label">Adresă</span>
                <span>Str. Industriei nr. 12, Suceava 720000, România</span>
              </div>
              <div className="contact-item">
                <span className="ci-label">Email</span>
                <span>office@benatavrom.ro</span>
              </div>
              <div className="contact-item">
                <span className="ci-label">Telefon</span>
                <span>+40 000 000 000</span>
              </div>
              <div className="contact-item">
                <span className="ci-label">Program</span>
                <span>Luni - Vineri: 08:00 - 17:00</span>
              </div>
            </div>
          </div>

          {/* Formularul sau mesajul de confirmare. */}
          <div className="contact-form-wrap">
            {sent ? (
              // Confirmarea după trimitere.
              <div className="success-msg">
                <span className="success-icon">✓</span>
                <h3>Mesaj trimis!</h3>
                <p>Îți mulțumim. Te contactăm în cel mai scurt timp.</p>
                <button className="btn-outline" onClick={() => setSent(false)}>
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              // Formularul standard de contact.
              <form className="contact-form" onSubmit={submit}>
                {/* Primul rând de câmpuri. */}
                <div className="form-row">
                  <div className="form-group">
                    <label>Nume complet *</label>
                    <input
                      name="nume"
                      value={form.nume}
                      onChange={handle}
                      required
                      placeholder="Ion Popescu"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      required
                      placeholder="ion@companie.ro"
                    />
                  </div>
                </div>

                {/* Câmp opțional pentru telefon. */}
                <div className="form-group">
                  <label>Telefon</label>
                  <input
                    name="tel"
                    value={form.tel}
                    onChange={handle}
                    placeholder="+40 7XX XXX XXX"
                  />
                </div>

                {/* Câmpul pentru mesajul utilizatorului. */}
                <div className="form-group">
                  <label>Mesaj *</label>
                  <textarea
                    name="mesaj"
                    value={form.mesaj}
                    onChange={handle}
                    required
                    rows={5}
                    placeholder="Descrieți pe scurt solicitarea sau produsul de care aveți nevoie..."
                  />
                </div>

                {/* Butonul de trimitere. */}
                <button className="btn-primary" type="submit">
                  Trimite Mesajul →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
