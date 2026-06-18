"use client";
import { useEffect, useRef, useState } from "react";

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute w-1 h-1 rounded-full bg-accent-violet/40 pointer-events-none"
      style={style}
    />
  );
}

export default function CTABanner() {
  const [particles, setParticles] = useState<{ id: number; style: React.CSSProperties }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${10 + Math.random() * 15}s`,
        animationDelay: `${Math.random() * 10}s`,
        animation: `float-particle ${10 + Math.random() * 15}s linear ${Math.random() * 10}s infinite`,
        opacity: Math.random() * 0.6,
        background: ["#7C6AF7", "#3DFFE0", "#FF6B6B", "#F5C97A"][Math.floor(Math.random() * 4)],
      } as React.CSSProperties,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 px-6 relative overflow-hidden"
      aria-label="Call to action"
    >
      {/* Particle field */}
      {particles.map((p) => (
        <Particle key={p.id} style={p.style} />
      ))}

      {/* Radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,106,247,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-h1 sm:text-display-l font-semibold text-text-primary mb-6 leading-tight">
          Let&apos;s build something together
          <br />
          <span className="gradient-text-coral-gold">and make your product impossible to ignore.</span>
        </h2>
        <p className="text-body-l text-text-secondary mb-12 max-w-lg mx-auto">
          Available for full-time roles, freelance projects, and AI consulting.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="mailto:anneookolo@gmail.com"
            id="cta-contact-btn"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-glow-coral"
            style={{ background: "linear-gradient(135deg, #FF6B6B, #F5C97A)" }}
            data-cursor-hover
          >
            Start a Conversation
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>

          <a
            href="/resume.pdf"
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-caption text-sm flex items-center gap-1.5"
          >
            View my résumé ↗
          </a>
        </div>
      </div>
    </section>
  );
}
