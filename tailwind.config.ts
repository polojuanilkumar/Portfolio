import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)", "system-ui", "sans-serif"],
				mono: ["ui-monospace", "monospace"],
				display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
			},
			fontSize: {
				// WCAG-compliant font sizes with proper scaling
				xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.05em" }],
				sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.025em" }],
				base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0" }],
				lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "-0.025em" }],
				xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.025em" }],
				"2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.025em" }],
				"3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.025em" }],
				"4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.025em" }],
				"5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
				"6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
				"7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
				"8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
				"9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.025em" }],
			},
		},
	},
	plugins: [],
};

export default config;
