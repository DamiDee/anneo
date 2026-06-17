import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,106,247,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      {/* 404 glitch */}
      <div className="relative mb-8">
        <h1
          className="font-display font-bold select-none"
          style={{
            fontSize: "clamp(8rem, 20vw, 16rem)",
            lineHeight: 1,
            background: "linear-gradient(135deg, #7C6AF7, #3DFFE0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: 0.8,
          }}
          aria-label="404 - Page not found"
        >
          404
        </h1>
      </div>

      <p className="font-display text-h2 font-semibold text-text-primary mb-4">
        Even our best AI couldn&apos;t find this page.
      </p>
      <p className="text-text-secondary text-body mb-10 max-w-sm">
        It seems this URL has gone off-script. Let&apos;s get you somewhere useful.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="px-8 py-4 rounded-full font-medium text-white transition-all duration-300 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #7C6AF7, #3DFFE0)" }}
        >
          Back to Home
        </Link>
        <Link
          href="/#work"
          className="px-8 py-4 glass rounded-full font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
        >
          View My Work
        </Link>
      </div>

      {/* Easter egg */}
      <p className="mt-16 font-mono text-caption text-text-muted">
        error_code: PAGE_NOT_FOUND · status: 404 · confidence: 100%
      </p>
    </div>
  );
}
