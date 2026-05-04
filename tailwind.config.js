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
        ink: "#151923",
        graphite: "#3d4452",
        mist: "#f6f8fb",
        line: "#e8edf5",
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
        },
        violet: {
          50: "#f5f3ff",
          500: "#7c3aed",
          600: "#6d28d9",
        },
        cyan: {
          50: "#ecfeff",
          500: "#06b6d4",
        },
      },
      boxShadow: {
        soft: "0 22px 70px rgba(32, 44, 74, 0.10)",
        lift: "0 18px 45px rgba(37, 99, 235, 0.16)",
        card: "0 14px 45px rgba(23, 31, 53, 0.08)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #2563eb 0%, #06b6d4 48%, #7c3aed 100%)",
        "soft-gradient":
          "linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(6,182,212,0.08) 50%, rgba(124,58,237,0.10) 100%)",
      },
    },
  },
  plugins: [],
};
