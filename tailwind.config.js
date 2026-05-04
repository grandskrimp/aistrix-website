/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      colors: {
        // Brand neutrals
        navy: "#0B1020",
        deep: "#111827",
        graphite: "#1E293B",
        ink: "#0F172A",
        body: "#475569",
        muted: "#64748B",
        line: "#E2E8F0",
        mist: "#F6F8FC",
        alt: "#EEF3FA",
        // Accents
        blue: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
        },
        violet: {
          50: "#F5F3FF",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
        cyan: {
          50: "#ECFEFF",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
      },
      boxShadow: {
        soft: "0 22px 70px rgba(15, 23, 42, 0.08)",
        card: "0 12px 40px rgba(15, 23, 42, 0.06)",
        lift: "0 24px 70px rgba(37, 99, 235, 0.18)",
        glow: "0 30px 80px rgba(37, 99, 235, 0.35)",
        "dark-card": "0 30px 80px rgba(2, 6, 23, 0.45)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #2563EB 0%, #06B6D4 50%, #7C3AED 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(6,182,212,0.10), rgba(124,58,237,0.12))",
        "soft-gradient":
          "linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(6,182,212,0.08) 50%, rgba(124,58,237,0.10) 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #0B1020 0%, #111827 55%, #1E293B 100%)",
        "dark-radial":
          "radial-gradient(circle at 18% 12%, rgba(37,99,235,0.45), transparent 42%), radial-gradient(circle at 82% 18%, rgba(124,58,237,0.40), transparent 42%), radial-gradient(circle at 50% 100%, rgba(6,182,212,0.32), transparent 50%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatySlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        "floaty-slow": "floatySlow 9s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
