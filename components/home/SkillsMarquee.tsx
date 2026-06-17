"use client";

const skills = [
  { label: "Figma", dot: "#7C6AF7" },
  { label: "Prototyping", dot: "#3DFFE0" },
  { label: "Design Systems", dot: "#FF6B6B" },
  { label: "User Research", dot: "#F5C97A" },
  { label: "Interaction Design", dot: "#7C6AF7" },
  { label: "Wireframing", dot: "#3DFFE0" },
  { label: "Usability Testing", dot: "#FF6B6B" },
  { label: "AI/ML Integration", dot: "#F5C97A" },
  { label: "Prompt Engineering", dot: "#7C6AF7" },
  { label: "LLM Products", dot: "#3DFFE0" },
  { label: "Python", dot: "#FF6B6B" },
  { label: "React", dot: "#7C6AF7" },
  { label: "TypeScript", dot: "#3DFFE0" },
  { label: "RAG Systems", dot: "#F5C97A" },
  { label: "Next.js", dot: "#7C6AF7" },
  { label: "Framer", dot: "#FF6B6B" },
  { label: "GPT-4 APIs", dot: "#3DFFE0" },
  { label: "Midjourney", dot: "#F5C97A" },
];

const row2 = [
  { label: "Design Thinking", dot: "#3DFFE0" },
  { label: "HCI Research", dot: "#7C6AF7" },
  { label: "Service Design", dot: "#FF6B6B" },
  { label: "LangChain", dot: "#F5C97A" },
  { label: "Vector Databases", dot: "#7C6AF7" },
  { label: "FAISS / Pinecone", dot: "#3DFFE0" },
  { label: "Fine-tuning", dot: "#FF6B6B" },
  { label: "Information Architecture", dot: "#F5C97A" },
  { label: "A/B Testing", dot: "#7C6AF7" },
  { label: "Agile / Scrum", dot: "#3DFFE0" },
  { label: "Notion", dot: "#FF6B6B" },
  { label: "GitHub", dot: "#F5C97A" },
  { label: "API Design", dot: "#7C6AF7" },
  { label: "Accessibility (WCAG)", dot: "#3DFFE0" },
  { label: "Adobe Suite", dot: "#FF6B6B" },
  { label: "Principle", dot: "#F5C97A" },
];

function SkillChip({ label, dot }: { label: string; dot: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 glass rounded-full text-sm font-caption font-medium text-text-secondary mx-2 hover:text-text-primary transition-colors duration-200">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dot }} />
      {label}
    </div>
  );
}

export default function SkillsMarquee() {
  const doubledRow1 = [...skills, ...skills];
  const doubledRow2 = [...row2, ...row2];

  return (
    <section className="py-20 relative overflow-hidden" aria-label="Skills and expertise">
      {/* Section label */}
      <p className="text-center font-caption text-caption text-text-muted uppercase tracking-widest mb-10">
        Skills &amp; Expertise
      </p>

      {/* Gradient masks */}
      <div
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080C14, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080C14, transparent)" }}
      />

      {/* Row 1 — left scroll */}
      <div className="flex overflow-hidden mb-4">
        <div className="flex animate-marquee">
          {doubledRow1.map((s, i) => (
            <SkillChip key={`r1-${i}`} label={s.label} dot={s.dot} />
          ))}
        </div>
      </div>

      {/* Row 2 — right scroll */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee-reverse">
          {doubledRow2.map((s, i) => (
            <SkillChip key={`r2-${i}`} label={s.label} dot={s.dot} />
          ))}
        </div>
      </div>
    </section>
  );
}
