"use client";
import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

function ProjectCard({
  project,
  wide = false,
  tall = false,
}: {
  project: (typeof projects)[0];
  wide?: boolean;
  tall?: boolean;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -10;
    const rotateY = ((x - cx) / cx) * 10;
    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setHovered(false);
  }, []);

  return (
    <Link
      href={`/work/${project.slug}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor-hover
      className={`relative block group rounded-2xl overflow-hidden bg-surface border border-white/5 transition-all duration-300 ${
        tall ? "min-h-[500px]" : "min-h-[320px]"
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${hovered ? 1.02 : 1})`,
        transition: hovered
          ? "transform 0.1s ease"
          : "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: hovered
          ? `0 30px 80px rgba(0,0,0,0.6), 0 0 40px ${project.accentColor}22`
          : "0 4px 20px rgba(0,0,0,0.3)",
        borderColor: hovered ? `${project.accentColor}30` : undefined,
      }}
    >
      {/* Thumbnail */}
      <div className="absolute inset-0">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${project.accentColor}CC 0%, ${project.accentColor}44 40%, transparent 70%)`,
          }}
        />
        {/* Dark overlay always */}
        <div className="absolute inset-0 bg-base/50" />
      </div>

      {/* Accent border glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          boxShadow: `inset 0 0 0 1px ${project.accentColor}44`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="font-caption text-caption px-2.5 py-1 rounded-full glass text-text-muted">
            {project.industry}
          </span>
          <span className="font-caption text-caption px-2.5 py-1 rounded-full glass text-text-muted">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-h3 font-semibold text-text-primary mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary font-caption">{project.type}</p>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 glass rounded-2xl flex flex-col justify-center items-center text-center p-8 transition-all duration-300 ${
            hovered ? "pointer-events-auto" : "pointer-events-none"
          }`}
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <p className="text-text-secondary text-sm mb-6 leading-relaxed max-w-xs">
            {project.tagline}
          </p>
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-text-primary transition-all duration-200 hover:scale-105"
            style={{ background: project.accentColor }}
          >
            View Case Study →
          </div>
        </div>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-caption font-semibold text-base glass-strong"
          style={{ background: `${project.accentColor}22`, borderColor: `${project.accentColor}44` }}>
          ★ Featured Project
        </div>
      )}
    </Link>
  );
}

export default function WorksSection() {
  const [p0, p1, p2, p3, p4] = projects;

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto" aria-label="Selected works">
      {/* Heading block */}
      <div className="mb-16">
        <p className="font-caption text-caption text-accent-violet uppercase tracking-widest mb-4">
          Selected Works
        </p>
        <h2 className="font-display text-h1 sm:text-display-l font-semibold text-text-primary mb-4 max-w-2xl">
          Projects that{" "}
          <span className="gradient-text-violet-mint">moved the needle.</span>
        </h2>
        <p className="text-body-l text-text-secondary max-w-xl">
          A curated collection of UI/UX and AI-powered products built for real impact.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Row 1 */}
        <div className="md:col-span-2">
          <ProjectCard project={p0} wide />
        </div>
        <div className="md:col-span-1">
          <ProjectCard project={p1} />
        </div>

        {/* Row 2 */}
        <div className="md:col-span-1">
          <ProjectCard project={p2} />
        </div>
        <div className="md:col-span-2">
          <ProjectCard project={p3} wide />
        </div>

        {/* Row 3 */}
        <div className="md:col-span-3">
          <ProjectCard project={p4} wide />
        </div>
      </div>
    </section>
  );
}
