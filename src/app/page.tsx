import Link from 'next/link';

const HomePage = () => {
  return (
    <section className="relative w-full h-screen bg-fixed bg-center bg-cover custom-img flex items-center justify-center">
      {/* Overlay für besseren Kontrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 z-0"></div>

      <div className="container relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-6 animate-slideIn transition-transform duration-300 hover:scale-105">
          Willkommen bei Ihrem Steuerberater
        </h1>
        <p className="text-lg mb-8">
          Wir bieten umfassende Steuerberatung und Dienstleistungen für Unternehmen und Privatpersonen.
        </p>

        {/* Verlinkter Button zur Kontakt-Seite mit Hover-Effekt */}
        <Link href="/kontakt">
          <button className="bg-cta text-white py-2 px-4 rounded hover:bg-cta-hover transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            Kontaktieren Sie uns
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
