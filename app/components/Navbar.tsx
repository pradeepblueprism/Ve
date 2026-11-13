"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about",          label: "About" },
  { href: "#experience",     label: "Experience" },
  { href: "#skills",         label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#achievements",   label: "Achievements" },
  { href: "#contact",        label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
        >
          <div
            className="w-9 h-9 rounded flex items-center justify-center font-display font-bold text-sm tracking-wider text-[#0A0F1E]"
            style={{ background: "linear-gradient(135deg, #C9A96E, #E2C898)" }}
          >
            PM
          </div>
          <span className="font-display text-sm tracking-[0.12em] uppercase text-[#C8C4BC] group-hover:text-[#C9A96E] transition-colors hidden sm:block">
            Pradeep Minumula
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-xs tracking-[0.1em] uppercase text-[#C8C4BC] hover:text-[#C9A96E] rounded transition-all duration-300 hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="hidden md:flex">
          <a
            href="https://www.linkedin.com/in/pradeep-minumula-rpa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-5 py-2 text-xs tracking-[0.12em] uppercase rounded"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#C8C4BC] hover:text-[#C9A96E] transition-colors"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t mt-1" style={{ borderColor: "rgba(201,169,110,0.15)" }}>
          <div className="max-w-7xl mx-auto px-8 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-xs tracking-[0.1em] uppercase text-[#C8C4BC] hover:text-[#C9A96E] rounded hover:bg-white/5 transition-all"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/pradeep-minumula-rpa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2 px-4 py-3 text-xs tracking-[0.12em] uppercase text-center rounded"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
