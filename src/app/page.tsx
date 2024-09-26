import Image from 'next/image';

const HomePage = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover custom-img">
      {/* Hintergrundbild */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-6 animate-slideIn">Willkommen bei Ihrem Steuerberater</h1>
        <p className="text-lg mb-4">
          Wir bieten umfassende Steuerberatung und Dienstleistungen für Unternehmen und Privatpersonen.
        </p>
        <button className="bg-cta text-white py-2 px-4 rounded hover:bg-cta-hover transition">
          Kontaktieren Sie uns
        </button>
      </div>
    </section>
  );
};

export default HomePage;
