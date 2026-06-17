"use client";
import { CheckCircle } from "lucide-react";

const uxCapabilities = [
  "User Research & Empathy Mapping",
  "Wireframing & Prototyping",
  "Design Systems Architecture",
  "Usability Testing & Iteration",
  "Interaction Design & Microanimations",
  "Figma, Framer, Principle",
];

const aiCapabilities = [
  "LLM Integration (GPT-4, Claude, Gemini)",
  "RAG Systems with FAISS / Pinecone",
  "Prompt Engineering & Fine-tuning",
  "Python, LangChain, OpenAI API",
  "AI Product Strategy & UX",
  "Latency optimization (<800ms p95)",
];

export default function DualExpertiseSection() {
  return (
    <section
      id="ai-projects"
      className="py-24 px-6 relative overflow-hidden"
      aria-label="Dual expertise: UX and AI"
    >
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 opacity-20 animate-mesh pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #7C6AF7 0%, #080C14 40%, #3DFFE0 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-4">
            What I Bring
          </p>
          <h2 className="font-display text-h1 sm:text-display-l font-semibold text-text-primary">
            Two disciplines.{" "}
            <span className="gradient-text-violet-mint">One vision.</span>
          </h2>
        </div>

        {/* Two-column split */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
          {/* Left — UX */}
          <div className="glass rounded-3xl p-10">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(124,106,247,0.15)", boxShadow: "0 0 30px rgba(124,106,247,0.2)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7C6AF7" strokeWidth="2">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            <h3 className="font-display text-h2 font-semibold text-text-primary mb-3">
              Design-First Thinking
            </h3>
            <p className="text-text-secondary text-body leading-relaxed mb-8">
              Every screen I design begins with a human truth. I uncover what users actually need through research, 
              then build systems that scale — from pixel-perfect components to full design systems serving 40+ teams.
            </p>
            <ul className="flex flex-col gap-3">
              {uxCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <CheckCircle size={16} className="text-accent-violet mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center divider */}
          <div className="hidden md:flex flex-col items-center justify-center gap-4 self-stretch py-10">
            <div className="w-px flex-1 relative overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent, #7C6AF7 30%, #3DFFE0 70%, transparent)",
                }}
              />
            </div>
            <div
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-text-secondary font-display font-bold text-lg flex-shrink-0"
              style={{ animation: "orbit-cw 8s linear infinite" }}
            >
              ×
            </div>
            <div
              className="w-px flex-1 relative overflow-hidden"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent, #3DFFE0 30%, #7C6AF7 70%, transparent)",
                }}
              />
            </div>
          </div>

          {/* Right — AI */}
          <div className="glass rounded-3xl p-10">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: "rgba(61,255,224,0.1)", boxShadow: "0 0 30px rgba(61,255,224,0.15)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3DFFE0" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="3" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="21" />
                <line x1="3" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="21" y2="12" />
                <line x1="5.6" y1="5.6" x2="7.8" y2="7.8" />
                <line x1="16.2" y1="16.2" x2="18.4" y2="18.4" />
                <line x1="5.6" y1="18.4" x2="7.8" y2="16.2" />
                <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
              </svg>
            </div>
            <h3 className="font-display text-h2 font-semibold text-text-primary mb-3">
              Machine Intelligence
            </h3>
            <p className="text-text-secondary text-body leading-relaxed mb-8">
              I don&apos;t just design AI products — I build them. From architecting RAG pipelines to optimizing 
              LLM response quality, I bridge the gap between model capabilities and user-facing experience.
            </p>
            <ul className="flex flex-col gap-3">
              {aiCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <CheckCircle size={16} className="text-accent-mint mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
