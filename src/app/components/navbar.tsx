'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li><Link href="/">Startseite</Link></li>
          <li><Link href="/ueber-uns">Über Uns</Link></li>
          <li><Link href="/leistungen">Leistungen</Link></li>
          <li><Link href="/karriere">Karriere</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
}
