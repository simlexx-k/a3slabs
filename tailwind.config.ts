import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        card: {
          DEFAULT: "hsl(var(--color-card))",
          foreground: "hsl(var(--color-card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--color-popover))",
          foreground: "hsl(var(--color-popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          foreground: "hsl(var(--color-accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive))",
          foreground: "hsl(var(--color-destructive-foreground))",
        },
        border: "hsl(var(--color-border))",
        input: "hsl(var(--color-input))",
        ring: "hsl(var(--color-ring))",
        success: "hsl(var(--color-success))",
        warning: "hsl(var(--color-warning))",
        info: "hsl(var(--color-info))",
        purple: "hsl(var(--color-purple))",
        pink: "hsl(var(--color-pink))",
        orange: "hsl(var(--color-orange))",
        teal: "hsl(var(--color-teal))",
        indigo: "hsl(var(--color-indigo))",
        emerald: "hsl(var(--color-emerald))",
        rose: "hsl(var(--color-rose))",
        amber: "hsl(var(--color-amber))",
        lime: "hsl(var(--color-lime))",
        cyan: "hsl(var(--color-cyan))",
        slate: "hsl(var(--color-slate))",
        gray: "hsl(var(--color-gray))",
        zinc: "hsl(var(--color-zinc))",
        neutral: "hsl(var(--color-neutral))",
        stone: "hsl(var(--color-stone))",
        red: "hsl(var(--color-red))",
        green: "hsl(var(--color-green))",
        blue: "hsl(var(--color-blue))",
        yellow: "hsl(var(--color-yellow))",
        chart: {
          "1": "hsl(var(--color-chart-1))",
          "2": "hsl(var(--color-chart-2))",
          "3": "hsl(var(--color-chart-3))",
          "4": "hsl(var(--color-chart-4))",
          "5": "hsl(var(--color-chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient-y": "gradient-y 3s ease infinite",
        "gradient-xy": "gradient-xy 3s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "glow-purple": "glow-purple 2s ease-in-out infinite alternate",
        "glow-emerald": "glow-emerald 2s ease-in-out infinite alternate",
        "glow-orange": "glow-orange 2s ease-in-out infinite alternate",
        "rainbow": "rainbow 3s ease infinite",
        "color-shift": "color-shift 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center bottom",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(37, 99, 235, 0.6)" },
        },
        "glow-purple": {
          "0%": { boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)" },
        },
        "glow-emerald": {
          "0%": { boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(16, 185, 129, 0.6)" },
        },
        "glow-orange": {
          "0%": { boxShadow: "0 0 20px rgba(249, 115, 22, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(249, 115, 22, 0.6)" },
        },
        rainbow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "color-shift": {
          "0%, 100%": { filter: "hue-rotate(0deg)" },
          "25%": { filter: "hue-rotate(90deg)" },
          "50%": { filter: "hue-rotate(180deg)" },
          "75%": { filter: "hue-rotate(270deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(37, 99, 235, 0.6)",
            transform: "scale(1.05)"
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #2563eb, #8b5cf6)",
        "gradient-secondary": "linear-gradient(135deg, #0ea5e9, #06b6d4)",
        "gradient-dark": "linear-gradient(135deg, #0f172a, #1e293b)",
        "gradient-purple": "linear-gradient(135deg, #8b5cf6, #ec4899)",
        "gradient-emerald": "linear-gradient(135deg, #10b981, #14b8a6)",
        "gradient-orange": "linear-gradient(135deg, #f97316, #f59e0b)",
        "gradient-cyan": "linear-gradient(135deg, #0891b2, #2563eb)",
        "gradient-rainbow": "linear-gradient(45deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #ec4899)",
      },
    },
  },
  plugins: [],
};

export default config; 