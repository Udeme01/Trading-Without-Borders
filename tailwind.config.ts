import type { Config } from "tailwindcss";

// Design tokens — see README.md "Design System" for rationale.
// Deliberately monochrome: no brand color yet. Contrast, type, and
// space carry the "quiet loud" personality instead of an accent color.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A", // near-black, not pure #000 (softer on large type)
          80: "#1A1A1A",
          60: "#3D3D3D",
          40: "#6B6B6B",
          20: "#A3A3A3",
        },
        paper: {
          DEFAULT: "#FAFAF8", // warm off-white, editorial page stock
          dim: "#F0EFEA",
        },
        line: "#DEDDD6", // hairline rules
        // accent: {
        //   DEFAULT: "#1B4D9B",
        //   dark: "#123566",
        //   soft: "#E6EEFB", // hero background wash, light fills
        // },
      },
      fontFamily: {
        // Display/editorial serif — headlines, pull quotes, section titles
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        // UI/body sans — everything read at length or in interface chrome
        sans: ["var(--font-geist-sans)", "Helvetica", "Arial", "sans-serif"],
        // Data/ticker mono — stats, dates, country/industry tags, nav labels
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      maxWidth: {
        content: "1200px",
        prose: "68ch",
      },
      borderRadius: {
        none: "0px", // sharp corners throughout — editorial, not app-y
      },
    },
  },
  plugins: [],
};

export default config;
