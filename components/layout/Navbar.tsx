"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/#ai-projects", label: "AI Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-tight text-text-primary relative group"
            aria-label="Anne Okolo — Home"
          >
            <span className="gradient-text-violet-mint">AO</span>
            <span
              className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-accent-violet to-accent-mint transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-caption text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-violet group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium font-caption text-white transition-all duration-300 hover:scale-105 hover:shadow-glow-coral"
              style={{ background: "linear-gradient(135deg, #FF6B6B, #F5C97A)" }}
              data-cursor-hover
            >
              Let&apos;s Talk <span aria-hidden>→</span>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg glass text-text-primary"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-base/95 backdrop-blur-2xl flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-6" role="list">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{
                transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
                transform: menuOpen ? "translateX(0)" : "translateX(-30px)",
                opacity: menuOpen ? 1 : 0,
                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
              }}
            >
              <Link
                href={link.href}
                className="font-display text-4xl font-semibold text-text-primary hover:gradient-text-violet-mint transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="mt-10"
          style={{
            transitionDelay: menuOpen ? "360ms" : "0ms",
            transform: menuOpen ? "translateX(0)" : "translateX(-30px)",
            opacity: menuOpen ? 1 : 0,
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
          }}
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-medium text-white"
            style={{ background: "linear-gradient(135deg, #FF6B6B, #F5C97A)" }}
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s Talk →
          </Link>
        </div>
      </div>
    </>
  );
}
