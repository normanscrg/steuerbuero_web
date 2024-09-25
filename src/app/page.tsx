'use client';

export default function HomePage() {
  return (
    <section className="main-banner">
      <div className="content">
        <h1>Steuerkanzlei Scheurig</h1>
        <p>Ihre Experten für Steuerberatung und betriebswirtschaftliche Beratung</p>
        <button onClick={() => window.location.href = '/kontakt'}>Kontakt</button>
      </div>
    </section>
  );
}
