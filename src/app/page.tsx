import Link from 'next/link';

const HomePage = () => {
  return (
    <section className="relative w-full h-screen bg-fixed bg-center bg-cover custom-img flex items-center justify-between">
      {/* Overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 z-0"></div>

      {/* Left Section with Welcome Text */}
      <div className="container relative z-10 text-white text-left ml-10">
        <h1 className="text-5xl font-bold mb-6 animate-slideIn transition-transform duration-300 hover:scale-105">
          Willkommen bei Ihrem Steuerberater
        </h1>
        <p className="text-lg mb-8">
          Wir bieten umfassende Steuerberatung und Dienstleistungen für Unternehmen und Privatpersonen.
        </p>

        {/* Link Button to Contact Page with Hover Effect */}
        <Link href="/kontakt">
          <button className="bg-cta text-white py-2 px-4 rounded hover:bg-cta-hover transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            Kontaktieren Sie uns
          </button>
        </Link>
      </div>

      {/* Right Section with Kanzlei Card - Positioned further down, wider, and less tall with hover effect */}
      <div className="absolute bottom-8 right-16 bg-white bg-opacity-90 text-gray-900 p-4 rounded-lg shadow-lg w-80 h-48 flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-center">Kanzlei</h2>
          <p className="text-sm text-gray-700 mb-2 text-center">
            Gegründet im Jahr 1995, bieten wir kompetente Steuerberatung für Unternehmen und Privatpersonen. Unser erfahrenes Team erstellt maßgeschneiderte Strategien zur Optimierung Ihrer Steuerlast.
          </p>
        </div>

        {/* Image centered at the bottom */}
        <div className="flex justify-center mb-2">
          <img
            src="/images/fuhrungskraft.jpg"
            alt="Führungskraft"
            className="w-24 h-24 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
