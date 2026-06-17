"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Research, empathy mapping, user interviews, analytics deep-dives",
    color: "#7C6AF7",
  },
  {
    number: "02",
    title: "Define",
    description: "Problem framing, HMW questions, success metrics, journey mapping",
    color: "#3DFFE0",
  },
  {
    number: "03",
    title: "Design",
    description: "Wireframes → prototypes → hi-fi → design systems → dev handoff",
    color: "#FF6B6B",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Dev collaboration, QA, AI model integration, and post-launch iteration",
    color: "#F5C97A",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 max-w-7xl mx-auto" aria-label="Working process">
      {/* Heading */}
      <div className="mb-16 text-center">
        <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-4">
          How I Work
        </p>
        <h2 className="font-display text-h1 sm:text-display-l font-semibold text-text-primary">
          Process,{" "}
          <span className="gradient-text-coral-gold">with intention.</span>
        </h2>
      </div>

      {/* Steps — horizontal desktop, vertical mobile */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px">
          <svg
            className="w-full h-4 overflow-visible"
            viewBox="0 0 900 4"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="2"
              x2="900"
              y2="2"
              stroke="rgba(124,106,247,0.3)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              style={{
                strokeDashoffset: visible ? 0 : 200,
                transition: "stroke-dashoffset 2s cubic-bezier(0.16,1,0.3,1) 0.3s",
              }}
            />
          </svg>
        </div>

        {steps.map((step, i) => (
          <div
            key={step.number}
            className="flex flex-col items-center text-center md:items-center"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 120 + 200}ms, transform 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 120 + 200}ms`,
            }}
          >
            {/* Node */}
            <div
              className="relative w-16 h-16 rounded-full glass flex items-center justify-center mb-6 z-10"
              style={{
                boxShadow: visible ? `0 0 30px ${step.color}44` : "none",
                borderColor: `${step.color}44`,
                transition: `box-shadow 0.5s ease ${i * 120 + 400}ms`,
              }}
            >
              <span
                className="font-mono text-sm font-semibold"
                style={{ color: step.color }}
              >
                {step.number}
              </span>
            </div>

            <h3 className="font-display text-h3 font-semibold text-text-primary mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-[180px]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
