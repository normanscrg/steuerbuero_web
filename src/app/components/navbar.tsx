const Navbar = () => {
  return (
    <header className="fixed top-0 w-full bg-primary z-50 shadow-lg">
      <nav className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-accent">Tanja Scheurig Steuerberater</div>
        <ul className="flex space-x-6">
          {/* Links mit Hover-Hintergrund in Scheurig-Farbe */}
          <li>
            <a href="/" className="text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition">
              Home
            </a>
          </li>
          <li>
            <a href="/leistungen" className="text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition">
              Leistungen
            </a>
          </li>
          <li>
            <a href="/karriere" className="text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition">
              Karriere
            </a>
          </li>
          <li>
            <a href="/kontakt" className="text-link hover:bg-[#e6d3b5] hover:text-white px-3 py-2 rounded transition">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
