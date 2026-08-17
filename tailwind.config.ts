import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0A0E14",
          elevated: "#0F141C",
          panel: "#131A24",
        },
        border: {
          DEFAULT: "#1E2733",
          soft: "#161D27",
        },
        ink: {
          primary: "#E7EDF4",
          secondary: "#8B96A7",
          muted: "#59626F",
        },
        accent: {
          DEFAULT: "#4FD8FF",
          blue: "#3B82F6",
          dim: "rgba(79, 216, 255, 0.08)",
          line: "rgba(79, 216, 255, 0.24)",
        },
        signal: {
          green: "#34D399",
          amber: "#F5B759",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(79,216,255,0.06), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
