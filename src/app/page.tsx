import Link from 'next/link';

const HomePage = () => {
  return (
    <section className="relative w-full h-screen bg-fixed bg-center bg-cover custom-img">
      {/* Overlay for contrast */}

      {/* Left Section with Welcome Text - Vertically centered and responsive */}
      <div className="absolute top-[40%] left-0 md:left-[10%] lg:left-[15%] transform -translate-y-1/2 relative z-10 text-white text-left px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-slideIn transition-transform duration-300 hover:scale-105">
          Willkommen bei Ihrem Steuerberater
        </h1>
        <p className="text-base md:text-lg mb-8">
          Wir bieten umfassende Steuerberatung und Dienstleistungen für Unternehmen und Privatpersonen.
        </p>

        {/* Link Button to Contact Page with Hover Effect */}
        <Link href="/kontakt">
          <button className="bg-cta text-white py-2 px-4 rounded hover:bg-cta-hover transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            Kontaktieren Sie uns
          </button>
        </Link>
      </div>

      {/* Kanzlei Card - Positioned responsively */}
      <div className="absolute top-[70%] left-[50%] md:left-[70%] lg:left-[80%] transform scale-100 md:scale-125 lg:scale-150 -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 text-gray-900 p-4 rounded-lg shadow-lg w-72 md:w-80 h-48 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.05] md:hover:scale-[1.3] lg:hover:scale-[1.55] hover:shadow-xl">
        <div>
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-center">Kanzlei</h2>
          <p className="text-xs md:text-sm text-gray-700 mb-2 text-center">
            Gegründet im Jahr 1995, bieten wir kompetente Steuerberatung für Unternehmen und Privatpersonen. Unser erfahrenes Team erstellt maßgeschneiderte Strategien zur Optimierung Ihrer Steuerlast.
          </p>
        </div>

        {/* Image centered at the bottom */}
        <div className="flex justify-center mb-2">
          <img
            src="/images/fuhrungskraft.jpg"
            alt="Führungskraft"
            className="w-20 md:w-24 h-20 md:h-24 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
