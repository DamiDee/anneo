import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "About Anne Okolo — UI/UX & AI Engineer",
  description:
    "Anne Okolo is a UI/UX Engineer and AI specialist based in Lagos, Nigeria. She bridges beautiful interfaces and intelligent systems.",
};

const designSkills = [
  { name: "Figma", level: 100, label: "Expert" },
  { name: "Framer", level: 90, label: "Advanced" },
  { name: "Principle", level: 80, label: "Advanced" },
  { name: "Adobe Suite", level: 72, label: "Proficient" },
  { name: "Prototyping", level: 100, label: "Expert" },
];

const engineeringSkills = [
  { name: "React / Next.js", level: 82, label: "Advanced" },
  { name: "TypeScript", level: 80, label: "Advanced" },
  { name: "Python", level: 88, label: "Advanced" },
  { name: "OpenAI API", level: 96, label: "Expert" },
  { name: "LangChain / RAG", level: 86, label: "Advanced" },
];

const tools = [
  "Figma", "Framer", "Notion", "VS Code", "GitHub", "Postman", "Vercel",
  "Slack", "Jira", "Linear", "Loom", "Miro", "FigJam", "Maze",
  "Amplitude", "Mixpanel", "Pinecone", "LangChain", "Weights & Biases",
];

const experience = [
  {
    period: "2024 — Present",
    role: "Lead UX Designer + AI Engineer",
    company: "Freelance / Consulting",
    description:
      "Leading end-to-end design and AI engineering for startups across HealthTech, FinTech, and Productivity. From concept to shipped product — research, design systems, and LLM integrations.",
    tags: ["AI Engineering", "Design Systems", "B2B", "Consulting"],
    accentColor: "#7C6AF7",
  },
  {
    period: "2022 — 2024",
    role: "Senior Product Designer",
    company: "Tech Startup — Lagos",
    description:
      "Owned product design for a Series A startup, establishing their design system, reducing onboarding time by 38%, and collaborating weekly with engineering and product leadership.",
    tags: ["Product Design", "Design Systems", "Figma", "Agile"],
    accentColor: "#3DFFE0",
  },
  {
    period: "2020 — 2022",
    role: "UX Designer",
    company: "Digital Agency",
    description:
      "Delivered UX for 12+ client projects across e-commerce, fintech, and healthcare. Led user research programs and created accessible, component-based design systems.",
    tags: ["UX Research", "Accessibility", "Mobile", "Web"],
    accentColor: "#FF6B6B",
  },
  {
    period: "2019 — 2020",
    role: "Junior Designer",
    company: "Creative Studio",
    description:
      "Cut my teeth on visual design, branding, and my first mobile app project. Discovered that the most powerful design decisions come from listening, not assuming.",
    tags: ["Visual Design", "Branding", "Mobile"],
    accentColor: "#F5C97A",
  },
];

function SkillBar({ name, level, label, color }: { name: string; level: number; label: string; color: string }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-text-primary font-caption font-medium">{name}</span>
        <span className="font-mono text-caption text-text-muted">{label}</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${level}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 px-6" aria-label="About hero">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
          {/* Left — 3/5 */}
          <div className="md:col-span-3">
            <p className="font-caption text-caption text-accent-violet uppercase tracking-widest mb-5">
              Anne Okolo
            </p>
            <h1 className="font-display text-h1 sm:text-display-l font-semibold text-text-primary mb-6 leading-tight">
              I design for humans,<br />
              <span className="gradient-text-violet-mint">I build for machines.</span>
            </h1>
            <p className="text-body-l text-text-secondary leading-relaxed mb-8 max-w-xl">
              Anne is a UI/UX Engineer and AI specialist based in Lagos, Nigeria. She bridges 
              the gap between beautiful interfaces and intelligent systems — creating products 
              that feel as smart as they look.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-4 py-2.5 glass rounded-full font-caption text-sm text-text-secondary">
                🎨 Open to UX roles
              </span>
              <span className="flex items-center gap-2 px-4 py-2.5 glass rounded-full font-caption text-sm text-text-secondary">
                🤖 Available for AI consulting
              </span>
            </div>
          </div>

          {/* Right — 2/5 */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              {/* Glow halo */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(124,106,247,0.3) 0%, transparent 70%)", transform: "scale(1.2)" }}
              />
              {/* Photo */}
              <div className="relative w-72 h-80 rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src="/images/anne-photo.png"
                  alt="Anne Okolo — UI/UX & AI Engineer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Grain overlay */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay",
                  }}
                />
              </div>
              {/* Floating chip */}
              <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2.5 flex items-center gap-2 border border-accent-mint/20">
                <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                <span className="font-caption text-caption text-text-primary font-medium">Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6" aria-label="Anne's story">
        <div className="max-w-3xl mx-auto">
          <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-10">
            The Story
          </p>
          <div className="space-y-8 text-body text-text-secondary leading-relaxed">
            <p>
              My obsession with design started with a broken experience — a hospital app so confusing, my aunt couldn&apos;t 
              book an appointment without help. I was 18, studying Computer Science, and I couldn&apos;t stop thinking: 
              what if the interface had been built for <em className="text-text-primary not-italic">her</em>, not just for the engineers who built it?
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-accent-violet pl-6 py-2 my-10">
              <p className="font-display text-h2 font-semibold text-text-primary leading-snug">
                &ldquo;Design without intelligence is decoration.
                Intelligence without design is invisible.&rdquo;
              </p>
            </blockquote>

            <p>
              The intersection found me when I started building AI tools and realized the critical gap: 
              models could be brilliant, but if the experience felt robotic, users abandoned them. 
              I became obsessed with the handshake between model capabilities and human cognition — 
              the exact point where technology stops feeling like technology.
            </p>
            <p>
              Today, I work across the full stack of product creation: from the first research session to 
              the last production deploy. I&apos;m building AI-native products that feel inevitable — 
              and I&apos;m just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-6" aria-label="Skills and tools">
        <div className="max-w-7xl mx-auto">
          <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">
            Skills &amp; Tools
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-display text-h3 font-semibold text-accent-violet mb-6">Design</h3>
              {designSkills.map((s) => (
                <SkillBar key={s.name} {...s} color="#7C6AF7" />
              ))}
            </div>
            <div>
              <h3 className="font-display text-h3 font-semibold text-accent-mint mb-6">Engineering</h3>
              {engineeringSkills.map((s) => (
                <SkillBar key={s.name} {...s} color="#3DFFE0" />
              ))}
            </div>
          </div>

          {/* Tools cloud */}
          <div>
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-6">
              Tools I Reach For
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="glass rounded-full px-4 py-2 font-caption text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="py-20 px-6" aria-label="Work experience">
        <div className="max-w-4xl mx-auto">
          <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">
            Experience
          </p>
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, #7C6AF7, #3DFFE0, #FF6B6B, transparent)" }}
            />

            <div className="flex flex-col gap-12">
              {experience.map((exp, i) => (
                <div key={i} className="pl-16 relative">
                  {/* Timeline node */}
                  <div
                    className="absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-surface"
                    style={{ background: exp.accentColor, boxShadow: `0 0 12px ${exp.accentColor}88` }}
                  />

                  <p className="font-mono text-caption text-text-muted mb-1">{exp.period}</p>
                  <h3 className="font-display text-h3 font-semibold text-text-primary mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="font-caption text-sm text-text-secondary mb-3">{exp.company}</p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full font-caption text-caption glass"
                        style={{ color: exp.accentColor, borderColor: `${exp.accentColor}30` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond work */}
      <section className="py-20 px-6" aria-label="Personal interests">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-h2 font-semibold text-text-primary mb-10">
            Outside the screen.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { emoji: "🌍", title: "Based in Lagos, Nigeria", sub: "Shipping globally" },
              { emoji: "📚", title: "Currently Reading", sub: "The Design of Everyday Things — Donald Norman" },
              { emoji: "✈️", title: "Passionate About", sub: "Afrofuturism · Building for Africa · Salsa dancing" },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-7">
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h3 className="font-caption font-semibold text-text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center" aria-label="Contact call to action">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-h1 sm:text-display-l font-semibold text-text-primary mb-8 leading-tight">
            Ready to create<br />
            <span className="gradient-text-violet-mint">something great?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2.5 px-8 py-4 glass rounded-full font-medium text-text-primary hover:text-accent-violet transition-all duration-200 hover:scale-105"
            >
              <Download size={18} />
              Download Résumé
            </a>
            <a
              href="mailto:hello@anneokolo.com"
              className="flex items-center gap-2.5 px-8 py-4 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-glow-coral"
              style={{ background: "linear-gradient(135deg, #FF6B6B, #F5C97A)" }}
            >
              <Send size={18} />
              Send a Message
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
