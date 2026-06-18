"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const words = ["Hi", "I’m", "Anne,", "I", "turn", "complex", "digital", "products", "into", "simple,", "intuitive", "experiences."];
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timings = [200, 500, 1200, 1400, 1600];
    const delays = Array.from({ length: words.length }, (_, i) => i * 50);

    // Eyebrow
    setTimeout(() => {
      if (eyebrowRef.current) {
        eyebrowRef.current.style.opacity = "1";
        eyebrowRef.current.style.transform = "translateY(0)";
      }
    }, timings[0]);

    // Words
    words.forEach((_, i) => {
      setTimeout(() => {
        const el = wordRefs.current[i];
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.filter = "blur(0px)";
        }
      }, timings[1] + delays[i]);
    });

    // Body
    setTimeout(() => {
      if (bodyRef.current) {
        bodyRef.current.style.opacity = "1";
        bodyRef.current.style.transform = "translateY(0)";
      }
    }, timings[2]);

    // CTAs
    setTimeout(() => {
      if (ctaRef.current) {
        ctaRef.current.style.opacity = "1";
        ctaRef.current.style.transform = "scale(1)";
      }
    }, timings[3]);

    // Scroll cue
    setTimeout(() => {
      if (scrollCueRef.current) {
        scrollCueRef.current.style.opacity = "1";
      }
    }, timings[4]);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-12 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background: dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Radial glow behind heading */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,106,247,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Orbit 1 - violet */}
        <div
          className="absolute w-[700px] h-[350px] border rounded-full"
          style={{
            borderColor: "rgba(124,106,247,0.08)",
            animation: "orbit-cw 40s linear infinite",
          }}
        />
        {/* Orbit 2 - mint */}
        <div
          className="absolute w-[900px] h-[450px] border rounded-full"
          style={{
            borderColor: "rgba(61,255,224,0.06)",
            animation: "orbit-ccw 60s linear infinite",
            transform: "rotate(30deg)",
          }}
        />
        {/* Orbit 3 - coral */}
        <div
          className="absolute w-[1100px] h-[550px] border rounded-full"
          style={{
            borderColor: "rgba(255,107,107,0.05)",
            animation: "orbit-cw 80s linear infinite",
            transform: "rotate(-15deg)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Eyebrow pill */}
        <div
          ref={eyebrowRef}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-caption font-medium text-text-secondary mb-8"
          style={{ opacity: 0, transform: "translateY(12px)", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <span className="text-accent-violet">⬡</span>
          <span>UI/UX Designer</span>
          <span className="text-text-muted">|</span>
          <span>AI-augmented Product Design</span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-display-l font-bold leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { wordRefs.current[i] = el; }}
              className="inline-block mr-[0.25em]"
              style={{
                opacity: 0,
                transform: "translateY(24px)",
                filter: "blur(8px)",
                transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {word === "experiences." ? (
                <span className="gradient-text-violet-mint">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <p
          ref={bodyRef}
          className="text-body-l text-text-secondary max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ opacity: 0, transform: "translateY(16px)", transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)" }}
        >
          I believe great design happens when users don’t have to think too hard to get things done.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ opacity: 0, transform: "scale(0.92)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <a
            href="#work"
            id="hero-view-work-btn"
            className="group relative px-8 py-4 rounded-full font-medium text-text-primary gradient-border overflow-hidden transition-all duration-300 hover:shadow-glow-violet hover:scale-105"
            style={{ background: "rgba(124,106,247,0.1)" }}
            data-cursor-hover
          >
            <span className="relative z-10">View My Work ↓</span>
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              style={{ background: "linear-gradient(135deg, rgba(124,106,247,0.2), rgba(61,255,224,0.2))" }}
            />
          </a>

          <a
            href="/about"
            id="hero-about-btn"
            className="px-8 py-4 rounded-full font-medium text-text-secondary glass hover:text-text-primary transition-all duration-300 hover:scale-105"
            data-cursor-hover
          >
            Read About Me
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0, transition: "opacity 0.5s ease" }}
        aria-hidden="true"
      >
        <p className="font-caption text-caption text-text-muted uppercase tracking-widest">Scroll</p>
        <div className="w-6 h-10 glass rounded-full flex items-start justify-center pt-2">
          <div
            className="w-1 h-2 bg-accent-violet rounded-full"
            style={{ animation: "bounce-dot 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
