"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Anne doesn't just design screens — she shapes experiences. Her ability to bridge design intuition with AI automated design workflows is rare and genuinely transformative.",
    name: "Emeka Obi",
    role: "CTO",
    company: "FundusAI",
    initials: "EO",
    color: "#7C6AF7",
  },
  {
    quote:
      "Lova AI's emotional design principles helped us build a relationship app that feels incredibly warm, safe, and deeply personal. Anne's UX insights were stellar.",
    name: "Marcus Sterling",
    role: "Product Lead",
    company: "Lova AI",
    initials: "MS",
    color: "#FF6B6B",
  },
  {
    quote:
      "Anne brought a unique balance of aesthetic refinement and user control to Bodify. Her wireframes and user flows paved the way for our product's success.",
    name: "Elena Rostova",
    role: "Co-Founder",
    company: "Bodify",
    initials: "ER",
    color: "#3DFFE0",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section className="py-24 px-6 relative" aria-label="Testimonials">
      <div className="max-w-4xl mx-auto">
        <p className="text-center font-caption text-caption text-text-muted uppercase tracking-widest mb-16">
          What People Say
        </p>

        {/* Card */}
        <div
          key={active}
          className="glass rounded-3xl p-10 md:p-14 relative"
          style={{
            animation: "fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          {/* Quote mark */}
          <div
            className="absolute top-8 left-10 font-display text-8xl leading-none font-bold opacity-20 select-none"
            style={{
              background: `linear-gradient(135deg, ${t.color}, transparent)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <blockquote className="text-body-l text-text-primary italic leading-relaxed mb-10 mt-6 relative z-10">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm text-base flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                boxShadow: `0 0 20px ${t.color}44`,
              }}
            >
              {t.initials}
            </div>
            <div>
              <p className="font-semibold text-text-primary font-caption">{t.name}</p>
              <p className="text-sm text-text-secondary font-caption">
                {t.role} · {t.company}
              </p>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? "2rem" : "0.5rem",
                background: i === active ? t.color : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
