import { useState } from "react";
import { Link } from "react-router";
import MarqueeText from "./MarqueeText";

const links = [
  { href: "#beranda", label: "Beranda" },
  { href: "#fitur", label: "Fitur" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <MarqueeText>Info: Iuran jatuh tempo tanggal 10 tiap bulan!</MarqueeText>
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">RT Care</div>

        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <span className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
              Login
            </span>
          </Link>

          <Link
            to="/register"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Daftar
          </Link>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-blue-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-6 space-y-4 shadow-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className="flex flex-col gap-2 pt-2">
            <Link
              to="/login"
              className="block border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-center hover:bg-blue-50 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Daftar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
