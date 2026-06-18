import type { Metadata } from "next";
import Image from "next/image";
import { Download, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "About Anne Okolo — UI/UX Designer & AI-augmented Product Design",
  description:
    "Anne Okolo is a UI/UX Designer specializing in AI-augmented product design. She turns complex digital products into simple, intuitive experiences.",
};

const designSkills = [
  { name: "Figma", level: 100, label: "Expert" },
  { name: "Framer", level: 90, label: "Advanced" },
  { name: "Principle", level: 80, label: "Advanced" },
  { name: "Adobe Suite", level: 72, label: "Proficient" },
  { name: "Prototyping", level: 100, label: "Expert" },
];

const engineeringSkills = [
  { name: "Claude / LLM Prompting", level: 95, label: "Expert" },
  { name: "Google Stitch Automation", level: 90, label: "Advanced" },
  { name: "MoodAI Styling Workflows", level: 92, label: "Expert" },
  { name: "Generative UI Layouts", level: 88, label: "Advanced" },
  { name: "AI Persona Simulation", level: 85, label: "Advanced" },
];

const tools = [
  "Figma", "Framer", "Notion", "VS Code", "GitHub", "Vercel",
  "Slack", "Jira", "Linear", "Loom", "Miro", "FigJam", "Maze",
  "Amplitude", "Mixpanel", "MoodAI", "Google Stitch", "Claude"
];

const experience = [
  {
    period: "2024 — Present",
    role: "UI/UX Designer (AI-Augmented)",
    company: "Freelance / Consulting",
    description:
      "Leading end-to-end product design for startups across HealthTech, FinTech, and Lifestyle. Integrating AI tools like Google Stitch, MoodAI, and Claude to accelerate ideation, wireframing, and design workflows.",
    tags: ["AI-Augmented Design", "Design Systems", "Product Strategy"],
    accentColor: "#7C6AF7",
  },
  {
    period: "2022 — 2024",
    role: "Senior Product Designer",
    company: "Tech Startup — Lagos",
    description:
      "Owned product design for a Series A startup, establishing their design system, reducing onboarding time by 38%, and collaborating weekly with engineering and product leadership.",
    tags: ["Product Design", "Design Systems", "Figma", "Framer"],
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
              Hi, I’m Anne,<br />
              <span className="gradient-text-violet-mint">UI/UX Designer.</span>
            </h1>
            <p className="text-body-l text-text-secondary leading-relaxed mb-8 max-w-xl">
              I turn complex digital products into simple, intuitive experiences. Specializing in AI-augmented product design, I combine empathy, research, and machine intelligence to make technology feel natural and useful.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-4 py-2.5 glass rounded-full font-caption text-sm text-text-secondary">
                🎨 Open to UI/UX Design Roles
              </span>
              <span className="flex items-center gap-2 px-4 py-2.5 glass rounded-full font-caption text-sm text-text-secondary">
                ✨ AI-Augmented Workflow Consulting
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
                  src="/images/anne.jpeg"
                  alt="Anne Okolo — UI/UX Designer"
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
              Hi, I’m Anne.
            </p>
            <p>
              I started my journey in UI/UX design with a simple belief: technology should make everyday life easier for everyday people.
            </p>
            <p>
              I was drawn to design after noticing how many digital products are harder to use than they should be, not because people lack ability, but because the experiences aren’t built with real users in mind. I want to change that by creating simple, intuitive solutions that anyone can understand and use with confidence.
            </p>
            <p>
              For me, great design is rooted in empathy. It’s about understanding people’s challenges and translating them into clear, thoughtful experiences that solve real problems and reduce friction.
            </p>
            <p>
              Over time, I’ve learned that the best products don’t just look good, they think well. They combine research, strategy, and technology to feel natural, useful, and human. That’s the kind of work I aim to create.
            </p>
            <p>
              When I’m not designing, you’ll probably find me down a YouTube rabbit hole watching videos about design trends, AI tools, product strategy, and why one tiny button can make or break an entire experience. One video always turns into twenty.
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
              <h3 className="font-display text-h3 font-semibold text-accent-mint mb-6">AI Workflows</h3>
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
              { emoji: "🌍", title: "Abuja-based", sub: "Shipping globally" },
              { emoji: "📚", title: "Currently Reading", sub: "Today Matters — John C. Maxwell" },
              { emoji: "✈️", title: "Passionate About", sub: "Traveling, Learning" },
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
              href="mailto:anneookolo@gmail.com"
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
