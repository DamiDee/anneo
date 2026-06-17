"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress({ accentColor }: { accentColor: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially to capture state on reload
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-transparent">
      <div
        className="h-full transition-all duration-75 ease-out"
        style={{ background: accentColor, width: `${progress}%` }}
      />
    </div>
  );
}
