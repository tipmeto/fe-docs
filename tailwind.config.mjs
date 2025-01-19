import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#97cfff', 600: '#005588', 900: '#003558', 950: '#002641' };
const gray = { 100: '#f4f6fb', 200: '#e9eef7', 300: '#bcc2cd', 400: '#808ca0', 500: '#4d596b', 700: '#2e3949', 800: '#1d2737', 900: '#141820' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};
