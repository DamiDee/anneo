import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#080C14",
        surface: "#0F1420",
        "accent-violet": "#7C6AF7",
        "accent-mint": "#3DFFE0",
        "accent-coral": "#FF6B6B",
        "accent-gold": "#F5C97A",
        "text-primary": "#F0F4FF",
        "text-secondary": "#8B9CC8",
        "text-muted": "#4A5570",
        "border-subtle": "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        caption: ["'DM Sans'", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["5.5rem", { fontWeight: "700", letterSpacing: "-0.03em" }],
        "display-l": ["3.5rem", { fontWeight: "600", letterSpacing: "-0.02em" }],
        "h1": ["2.5rem", { fontWeight: "600" }],
        "h2": ["1.875rem", { fontWeight: "600" }],
        "h3": ["1.375rem", { fontWeight: "500" }],
        "body-l": ["1.125rem", { fontWeight: "400", lineHeight: "1.75" }],
        "body": ["1rem", { fontWeight: "400", lineHeight: "1.7" }],
        "caption": ["0.8125rem", { fontWeight: "500", letterSpacing: "0.04em" }],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #7C6AF7, #3DFFE0)",
        "gradient-cta": "linear-gradient(135deg, #FF6B6B, #F5C97A)",
        "gradient-footer": "linear-gradient(90deg, #7C6AF7, #3DFFE0, #FF6B6B)",
      },
      animation: {
        "orbit-1": "orbit 40s linear infinite",
        "orbit-2": "orbit 60s linear infinite reverse",
        "orbit-3": "orbit 80s linear infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "bounce-dot": "bounce-dot 1.5s ease-in-out infinite",
        "draw-line": "draw-line 1.5s ease forwards",
        "count-up": "count-up 1s ease forwards",
        "particle": "particle 15s linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124,106,247,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(124,106,247,0.8), 0 0 60px rgba(124,106,247,0.3)" },
        },
        "bounce-dot": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        particle: {
          "0%": { transform: "translateY(100vh) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100px) translateX(100px)", opacity: "0" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
        gentle: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backdropBlur: {
        glass: "20px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glow-violet": "0 0 40px rgba(124, 106, 247, 0.3)",
        "glow-mint": "0 0 40px rgba(61, 255, 224, 0.3)",
        "glow-coral": "0 0 40px rgba(255, 107, 107, 0.3)",
        card: "0 20px 60px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
