const Footer = () => {
  return (
    <footer className="bg-primary text-center py-8">
      {/* Links, die auf kleinen Bildschirmen gestapelt sind */}
      <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
        <li>
          <a href="/impressum" className="text-link hover:text-cta transition">
            Impressum
          </a>
        </li>
        <li>
          <a href="/datenschutz" className="text-link hover:text-cta transition">
            Datenschutz
          </a>
        </li>
        <li>
          <a href="/kontakt" className="text-link hover:text-cta transition">
            Kontakt
          </a>
        </li>
      </ul>

      {/* Copyright Text */}
      <p className="text-sm text-gray-600 mt-4 md:mt-6">© 2024 Steuerberater</p>
    </footer>
  );
};

export default Footer;
