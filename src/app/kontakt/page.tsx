export default function KontaktPage() {
    return (
      <section className="content">
        <h1>Kontaktieren Sie uns</h1>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
  
          <label htmlFor="email">E-Mail:</label>
          <input type="email" id="email" name="email" required />
  
          <label htmlFor="message">Nachricht:</label>
          <textarea id="message" name="message" required></textarea>
  
          <button type="submit">Absenden</button>
        </form>
  
        <h2>Unsere Kontaktinformationen</h2>
        <p><strong>Adresse:</strong> Musterstraße 123, 12345 Musterstadt</p>
        <p><strong>Telefon:</strong> 0123 456789</p>
        <p><strong>E-Mail:</strong> kontakt@steuerkanzlei-scheurig.de</p>
        <h3>Öffnungszeiten</h3>
        <p>Montag bis Freitag: 08:00 - 17:00 Uhr</p>
      </section>
    );
  }
  