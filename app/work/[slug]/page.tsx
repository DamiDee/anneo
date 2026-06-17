import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import ScrollProgress from "@/components/layout/ScrollProgress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Anne Okolo`,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { next } = getAdjacentProjects(slug);

  return (
    <>
      {/* Scroll progress bar */}
      <ScrollProgress accentColor={project.accentColor} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden" aria-label="Case study hero">
        {/* Glow behind image */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${project.accentColor} 0%, transparent 70%)`,
          }}
        />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 font-caption text-sm text-text-muted mb-10">
            <Link href="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#work" className="hover:text-text-primary transition-colors">Work</Link>
            <span>/</span>
            <span className="text-text-primary">{project.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="glass rounded-full px-3 py-1.5 font-caption text-caption text-text-secondary">
                  {project.industry}
                </span>
                <span className="glass rounded-full px-3 py-1.5 font-caption text-caption text-text-secondary">
                  {project.year}
                </span>
                {project.isAI && (
                  <span
                    className="rounded-full px-3 py-1.5 font-caption text-caption font-semibold"
                    style={{ background: `${project.accentColor}22`, color: project.accentColor }}
                  >
                    AI-Powered
                  </span>
                )}
              </div>

              <h1 className="font-display text-h1 sm:text-display-l font-bold text-text-primary mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-body-l text-text-secondary mb-10 leading-relaxed">
                {project.tagline}
              </p>

              {/* Metadata pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Role", value: project.role.split(" + ")[0] },
                  { label: "Timeline", value: project.timeline },
                  { label: "Platform", value: project.platform },
                ].map((m) => (
                  <div key={m.label} className="glass rounded-xl px-4 py-3">
                    <p className="font-caption text-caption text-text-muted mb-0.5">{m.label}</p>
                    <p className="font-medium text-text-primary text-sm">{m.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Hero image */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                style={{ background: project.accentColor }}
              />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-video">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-6" aria-label="Project overview">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-6">Overview</p>
            <div className="text-body-l text-text-secondary leading-relaxed whitespace-pre-line">{project.overview}</div>
          </div>
          <div>
            <div className="glass rounded-2xl p-6 space-y-4">
              {[
                { key: "Role", val: project.role },
                { key: "Team", val: project.team },
                { key: "Timeline", val: project.timeline },
                { key: "Platform", val: project.platform },
                { key: "Status", val: project.status },
              ].map((item) => (
                <div key={item.key} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <p className="font-caption text-caption text-text-muted mb-0.5">{item.key}</p>
                  <p className="text-sm text-text-primary">{item.val}</p>
                </div>
              ))}
              <div className="pt-2">
                <p className="font-caption text-caption text-text-muted mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span key={t} className="glass rounded-full px-3 py-1 font-mono text-caption text-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {project.responsibilities && (
                <div className="pt-4 border-t border-white/5">
                  <p className="font-caption text-caption text-text-muted mb-2">Responsibilities</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.responsibilities.map((r) => (
                      <span key={r} className="text-xs px-2.5 py-1 rounded-full glass text-text-secondary">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Challenge */}
      <section className="py-20 px-6 relative" aria-label="Problem statement">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ background: `linear-gradient(135deg, ${project.accentColor}, transparent)` }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-8">
            {project.challengeDetails ? "The Challenge" : "The Problem"}
          </p>
          <blockquote
            className="font-display text-h2 sm:text-display-l font-semibold text-text-primary leading-tight mb-12 max-w-4xl"
            style={{ borderLeft: `4px solid ${project.accentColor}`, paddingLeft: "2rem" }}
          >
            &ldquo;{project.challengeDetails?.description || project.problem}&rdquo;
          </blockquote>

          {/* Pain point cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {project.challengeDetails ? (
              project.challengeDetails.points.map((pt, index) => {
                const colors = ["#FF6B6B", "#F5C97A", "#3DFFE0", "#7C6AF7"];
                return (
                  <div key={index} className="glass rounded-2xl p-6">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: colors[index % colors.length] }} />
                      <h3 className="font-semibold text-text-primary">Friction Point 0{index + 1}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{pt}</p>
                  </div>
                );
              })
            ) : (
              [
                { severity: "#FF6B6B", title: "User Frustration", desc: "Core friction points that caused drop-off and abandonment." },
                { severity: "#F5C97A", title: "Trust Gap", desc: "Users couldn't verify information accuracy or provider quality." },
                { severity: "#3DFFE0", title: "Complexity Overload", desc: "Too many steps to accomplish core tasks caused paralysis." },
              ].map((pain) => (
                <div key={pain.title} className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: pain.severity }} />
                    <h3 className="font-semibold text-text-primary">{pain.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{pain.desc}</p>
                </div>
              ))
            )}
          </div>

          {project.challengeDetails?.objectives && (
            <div className="mt-12 glass rounded-3xl p-8 md:p-10 border border-white/5">
              <h3 className="font-display text-h3 font-semibold text-text-primary mb-6">Objectives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {project.challengeDetails.objectives.map((obj, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-accent-violet mt-0.5 flex-shrink-0">⬡</span>
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Goal */}
      {project.goal && (
        <section className="py-20 px-6" aria-label="Project goal">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-6">My Goal</p>
            <div className="glass rounded-3xl p-10 md:p-12 border border-white/5 relative overflow-hidden">
              <div
                className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: project.accentColor }}
              />
              <h3 className="font-display text-h2 font-semibold text-text-primary mb-6">Project Goal</h3>
              <div className="text-body-l text-text-secondary leading-relaxed max-w-3xl whitespace-pre-line">
                {project.goal}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Research & Insights */}
      {project.insights && (
        <section className="py-20 px-6" aria-label="Research and insights">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">Research &amp; Key Insights</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.insights.map((insight, index) => (
                <div key={index} className="glass rounded-2xl p-8 border border-white/5 relative flex flex-col justify-between">
                  <div>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm mb-6"
                      style={{ background: `${project.accentColor}15`, color: project.accentColor, border: `1px solid ${project.accentColor}33` }}
                    >
                      0{index + 1}
                    </div>
                    <h3 className="font-display text-h3 font-semibold text-text-primary mb-4">
                      {insight.title.replace(/^\d+\.\s*/, '')}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">{insight.observation}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs font-caption text-accent-mint uppercase tracking-wider mb-1">Design Decision</p>
                    <p className="text-sm text-text-primary leading-relaxed">{insight.decision}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Process */}
      {project.process && (
        <section className="py-20 px-6" aria-label="Design process">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">Design Process</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.process.map((step, index) => (
                <div key={index} className="relative pl-8 md:pl-0 md:pt-8 border-l md:border-l-0 md:border-t border-white/10">
                  <div 
                    className="absolute left-[-9px] top-1 md:left-0 md:top-[-9px] w-4 h-4 rounded-full border-2 border-base"
                    style={{ background: project.accentColor, boxShadow: `0 0 12px ${project.accentColor}` }}
                  />
                  <h3 className="font-display text-h3 font-semibold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* UX Improvements */}
      {project.improvements && (
        <section className="py-20 px-6" aria-label="UX improvements">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">UX Improvements</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Before Card */}
              <div className="glass rounded-3xl p-8 md:p-10 border border-white/5 bg-red-950/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs font-mono font-semibold uppercase tracking-wider text-red-400 bg-red-950/40 border border-red-900/30 px-3 py-1 rounded-full">
                  Before
                </div>
                <h3 className="font-display text-h2 font-semibold text-red-400 mb-6">Friction Points</h3>
                <ul className="space-y-4">
                  {project.improvements.before.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-red-500 mt-1 flex-shrink-0">✕</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After Card */}
              <div className="glass rounded-3xl p-8 md:p-10 border border-accent-mint/10 bg-emerald-950/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-xs font-mono font-semibold uppercase tracking-wider text-accent-mint bg-emerald-950/40 border border-emerald-900/30 px-3 py-1 rounded-full">
                  After
                </div>
                <h3 className="font-display text-h2 font-semibold text-accent-mint mb-6">Solutions</h3>
                <ul className="space-y-4">
                  {project.improvements.after.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-text-primary">
                      <span className="text-accent-mint mt-1 flex-shrink-0">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final Solution */}
      {project.finalSolution && (
        <section className="py-20 px-6" aria-label="Final solution">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-6">Final Solution</p>
            <div className="glass rounded-3xl p-10 md:p-12 border border-white/5 relative overflow-hidden">
              <div
                className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: project.accentColor }}
              />
              <h3 className="font-display text-h2 font-semibold text-text-primary mb-6">The Outcome</h3>
              <div className="text-body-l text-text-secondary leading-relaxed max-w-4xl whitespace-pre-line">
                {project.finalSolution}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="py-20 px-6" aria-label="Project results and impact">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">Results &amp; Impact</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {project.results.map((r) => (
                <div key={r.label} className="glass rounded-2xl p-6 text-center">
                  <p
                    className="font-display text-4xl font-bold mb-2"
                    style={{ color: project.accentColor }}
                  >
                    {r.value}
                  </p>
                  <p className="font-caption text-sm text-text-secondary">{r.label}</p>
                </div>
              ))}
            </div>

            {/* Reflection */}
            <div className="glass rounded-3xl p-10 max-w-3xl">
              <h3 className="font-display text-h3 font-semibold text-text-primary mb-4">What I Learned</h3>
              <div className="text-body text-text-secondary leading-relaxed whitespace-pre-line">
                {project.reflection || `This project reinforced that the best design decisions come from constraints. 
                The tighter the brief, the more creative the solution. Users don't need more features — 
                they need fewer, done with more care. Every metric above traces back to a single principle: 
                respect the user's time, trust, and context.`}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reflection (fallback if no results list but reflection exists) */}
      {(!project.results || project.results.length === 0) && project.reflection && (
        <section className="py-20 px-6" aria-label="Project reflection">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-3xl p-10 md:p-12 max-w-3xl border border-white/5">
              <h3 className="font-display text-h3 font-semibold text-text-primary mb-4">Reflection</h3>
              <div className="text-body text-text-secondary leading-relaxed whitespace-pre-line">
                {project.reflection}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Personas (StyleManger specific) */}
      {project.personas && (
        <section className="py-20 px-6" aria-label="User personas">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">User Personas</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.personas.map((persona, index) => (
                <div key={index} className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between">
                  <div
                    className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-10 pointer-events-none"
                    style={{ background: project.accentColor }}
                  />
                  <div>
                    <h3 className="font-display text-h3 font-semibold text-text-primary mb-6">{persona.name}</h3>
                    <ul className="space-y-3">
                      {persona.traits.map((trait, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                          <span className="text-accent-mint mt-1">✦</span>
                          <span>{trait}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* User Flows (StyleManger specific) */}
      {project.userFlows && (
        <section className="py-20 px-6" aria-label="Key user flows">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">Key User Flows</p>
            <div className="space-y-6">
              {project.userFlows.map((flow, flowIdx) => (
                <div key={flowIdx} className="glass rounded-3xl p-8 border border-white/5">
                  <h3 className="font-display text-h3 font-semibold text-text-primary mb-6">{flow.title}</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    {flow.steps.map((step, stepIdx) => (
                      <div key={stepIdx} className="flex items-center gap-3">
                        <div 
                          className="px-4 py-2.5 rounded-xl text-sm font-caption font-medium border text-text-primary"
                          style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.05)" }}
                        >
                          {step}
                        </div>
                        {stepIdx < flow.steps.length - 1 && (
                          <span className="text-text-muted font-mono">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Wireframe Overview (StyleManger specific) */}
      {project.showWireframes && (
        <section className="py-20 px-6" aria-label="Wireframe overview">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">Wireframe Overview</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              
              {/* Home (AI Outfit Feed) */}
              <div className="glass rounded-3xl p-6 border border-white/5 bg-black/40 flex flex-col items-center relative overflow-hidden min-h-[420px] justify-between">
                <div className="w-full flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                  <span className="text-[10px] font-mono text-text-muted">72°F Sunny</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                {/* Outfit Suggestion card */}
                <div className="w-full flex-1 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] flex flex-col items-center justify-center p-4 relative mb-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-3 text-text-muted text-xs">✨</div>
                  <div className="w-20 h-2 bg-white/10 rounded mb-2" />
                  <div className="w-16 h-1.5 bg-white/5 rounded" />
                </div>
                {/* CTA buttons */}
                <div className="w-full space-y-2">
                  <div className="w-full h-9 rounded-xl bg-white/10 flex items-center justify-center text-[11px] font-medium text-text-primary">Wear Today</div>
                  <div className="w-full h-9 rounded-xl border border-white/5 flex items-center justify-center text-[10px] text-text-secondary">Try on Avatar</div>
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl border-x border-b border-white/5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
                <div className="mt-4 text-xs font-caption text-text-muted font-semibold">Home (AI Outfit Feed)</div>
              </div>

              {/* Closet (Wardrobe Grid) */}
              <div className="glass rounded-3xl p-6 border border-white/5 bg-black/40 flex flex-col items-center relative overflow-hidden min-h-[420px] justify-between">
                <div className="w-full flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                  <span className="text-[10px] font-mono text-text-muted">My Closet</span>
                  <span className="text-[10px] text-accent-mint">+ Add</span>
                </div>
                {/* Tabs */}
                <div className="w-full flex gap-1.5 mb-3">
                  <div className="flex-1 h-5 rounded bg-white/10 flex items-center justify-center text-[8px] font-medium">All</div>
                  <div className="flex-1 h-5 rounded border border-white/5 flex items-center justify-center text-[8px] text-text-muted">Tops</div>
                  <div className="flex-1 h-5 rounded border border-white/5 flex items-center justify-center text-[8px] text-text-muted">Bottoms</div>
                </div>
                {/* Grid */}
                <div className="w-full flex-1 grid grid-cols-2 gap-2 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-xl border border-dashed border-white/10 bg-white/[0.01] flex items-center justify-center">
                      <div className="w-6 h-6 rounded bg-white/5" />
                    </div>
                  ))}
                </div>
                <div className="w-full h-9 rounded-xl bg-white/5 flex items-center justify-center text-[10px] text-text-secondary">Scan Wardrobe</div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl border-x border-b border-white/5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
                <div className="mt-4 text-xs font-caption text-text-muted font-semibold">Closet (Wardrobe Grid)</div>
              </div>

              {/* Try-On (Avatar Screen) */}
              <div className="glass rounded-3xl p-6 border border-white/5 bg-black/40 flex flex-col items-center relative overflow-hidden min-h-[420px] justify-between">
                <div className="w-full flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                  <span className="text-[10px] font-mono text-text-muted">Avatar Studio</span>
                  <div className="w-3 h-3 rounded bg-white/10" />
                </div>
                {/* Avatar Silhouette */}
                <div className="w-full flex-1 flex items-center justify-center relative mb-4">
                  <div className="w-14 h-32 rounded-full border border-dashed border-white/20 flex flex-col items-center justify-start pt-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 mb-2" />
                    <div className="w-8 h-16 bg-white/5 rounded-full" />
                  </div>
                  {/* Floating tags */}
                  <div className="absolute top-8 left-2 px-1.5 py-0.5 rounded bg-accent-violet/10 border border-accent-violet/30 text-[7px] text-accent-violet">Tee</div>
                  <div className="absolute bottom-8 right-2 px-1.5 py-0.5 rounded bg-accent-mint/10 border border-accent-mint/30 text-[7px] text-accent-mint">Jeans</div>
                </div>
                <div className="w-full h-9 rounded-xl bg-white/10 flex items-center justify-center text-[11px] font-medium text-text-primary">Save Outfit</div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl border-x border-b border-white/5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
                <div className="mt-4 text-xs font-caption text-text-muted font-semibold">Try-On (Avatar Screen)</div>
              </div>

              {/* Social Feed */}
              <div className="glass rounded-3xl p-6 border border-white/5 bg-black/40 flex flex-col items-center relative overflow-hidden min-h-[420px] justify-between">
                <div className="w-full flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                  <span className="text-[10px] font-mono text-text-muted">Feed</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-white/10" />
                </div>
                {/* Post */}
                <div className="w-full flex-1 flex flex-col mb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-4 h-4 rounded-full bg-white/10" />
                    <div className="w-12 h-1.5 bg-white/10 rounded" />
                  </div>
                  <div className="flex-1 rounded-xl border border-dashed border-white/10 bg-white/[0.01] flex items-center justify-center mb-2">
                    <div className="w-8 h-8 rounded bg-white/5" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-6 h-3 bg-white/10 rounded" />
                    <div className="w-8 h-3 bg-white/5 rounded" />
                  </div>
                </div>
                <div className="w-full h-9 rounded-xl border border-white/5 flex items-center justify-center text-[10px] text-text-secondary">Share Outfit</div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl border-x border-b border-white/5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
                <div className="mt-4 text-xs font-caption text-text-muted font-semibold">Social Feed</div>
              </div>

              {/* Challenge Page */}
              <div className="glass rounded-3xl p-6 border border-white/5 bg-black/40 flex flex-col items-center relative overflow-hidden min-h-[420px] justify-between">
                <div className="w-full flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                  <span className="text-[10px] font-mono text-text-muted">Styling Challenge</span>
                  <span className="text-[8px] text-red-400 font-mono">Live</span>
                </div>
                {/* Banner */}
                <div className="w-full h-10 rounded-xl bg-gradient-to-r from-accent-violet/20 to-accent-mint/20 border border-white/5 flex flex-col items-center justify-center mb-3">
                  <div className="w-20 h-2 bg-white/20 rounded mb-1" />
                  <div className="w-12 h-1 bg-white/10 rounded" />
                </div>
                {/* Submissions */}
                <div className="w-full flex-1 grid grid-cols-2 gap-2 mb-4">
                  <div className="rounded-lg border border-dashed border-white/10 bg-white/[0.01] flex flex-col justify-end p-1.5">
                    <div className="w-full h-3 bg-white/10 rounded" />
                  </div>
                  <div className="rounded-lg border border-dashed border-white/10 bg-white/[0.01] flex flex-col justify-end p-1.5">
                    <div className="w-full h-3 bg-white/10 rounded" />
                  </div>
                </div>
                <div className="w-full h-9 rounded-xl bg-white/10 flex items-center justify-center text-[11px] font-medium text-text-primary">Vote Now</div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-b-xl border-x border-b border-white/5 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
                <div className="mt-4 text-xs font-caption text-text-muted font-semibold">Challenge Page</div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* UX Principles (StyleManger specific) */}
      {project.uxPrinciples && (
        <section className="py-20 px-6" aria-label="UX principles">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">UX Principles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {project.uxPrinciples.map((principle, index) => (
                <div key={index} className="glass rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-2xl mb-4 block" style={{ color: project.accentColor }}>★</span>
                    <h3 className="font-caption font-semibold text-text-primary mb-2">{principle.title}</h3>
                    <p className="text-xs text-text-secondary leading-relaxed">{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* UI Direction (StyleManger specific) */}
      {project.uiDirection && (
        <section className="py-20 px-6" aria-label="UI direction">
          <div className="max-w-7xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-12">UI Direction</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.uiDirection.map((ui, index) => (
                <div key={index} className="glass rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-h3 font-semibold text-text-primary mb-4">{ui.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{ui.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Future Improvements (StyleManger specific) */}
      {project.futureImprovements && (
        <section className="py-20 px-6" aria-label="Future improvements">
          <div className="max-w-4xl mx-auto">
            <p className="font-caption text-caption text-text-muted uppercase tracking-widest mb-10">Future Improvements</p>
            <div className="space-y-4">
              {project.futureImprovements.map((improvement, index) => (
                <div key={index} className="glass rounded-2xl p-5 border border-white/5 flex items-center gap-4">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-semibold flex-shrink-0"
                    style={{ background: `${project.accentColor}15`, color: project.accentColor }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-sm text-text-secondary">{improvement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing Statement (StyleManger specific) */}
      {project.closingStatement && (
        <section className="py-24 px-6 text-center" aria-label="Closing statement">
          <div className="max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-10 md:p-14 border border-white/5 relative overflow-hidden bg-gradient-to-b from-white/[0.01] to-white/[0.03]">
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ background: project.accentColor }}
              />
              <p className="font-display text-2xl md:text-3xl font-semibold text-text-primary leading-relaxed whitespace-pre-line relative z-10">
                {project.closingStatement}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* AI Section (conditional) */}
      {project.isAI && project.showArchitecture && (
        <section className="py-20 px-6" aria-label="AI technical architecture">
          <div className="max-w-7xl mx-auto">
            <div className="glass rounded-3xl p-10 border" style={{ borderColor: "rgba(61,255,224,0.15)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(61,255,224,0.1)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3DFFE0" strokeWidth="2">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>
                  </svg>
                </div>
                <h2 className="font-display text-h2 font-semibold text-text-primary">AI Under the Hood</h2>
              </div>
              <p className="text-body text-text-secondary mb-8 leading-relaxed">
                The AI layer was engineered for both accuracy and speed. Below is the core system architecture 
                that powers the intelligent features of this product.
              </p>
              <div className="rounded-2xl overflow-hidden mb-8 border border-white/5">
                <Image
                  src="/images/ai-architecture.png"
                  alt="AI system architecture diagram"
                  width={1200}
                  height={675}
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { key: "Model", val: "GPT-4-turbo" },
                  { key: "Retrieval", val: "RAG + FAISS" },
                  { key: "Latency", val: "<800ms p95" },
                  { key: "Embedding", val: "text-embedding-3" },
                ].map((item) => (
                  <div key={item.key} className="glass rounded-xl p-4">
                    <p className="font-mono text-caption text-accent-mint mb-1">{item.key}</p>
                    <p className="font-semibold text-text-primary text-sm">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next project */}
      {next && (
        <section className="py-20 px-6" aria-label="Next project">
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/work/${next.slug}`}
              className="group relative block glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="absolute inset-0 opacity-30">
                <Image src={next.thumbnail} alt={next.title} fill className="object-cover" />
              </div>
              <div className="relative z-10 p-12 flex items-center justify-between">
                <div>
                  <p className="font-caption text-caption text-text-muted mb-2">Next Project</p>
                  <h3 className="font-display text-h2 font-semibold text-text-primary">{next.title}</h3>
                  <p className="text-text-secondary mt-1">{next.tagline}</p>
                </div>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2 flex-shrink-0"
                  style={{ background: next.accentColor }}
                >
                  <ArrowRight size={20} className="text-white" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}

