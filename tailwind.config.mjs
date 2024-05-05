import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#f8b5ad', 600: '#cb0015', 900: '#610a0b', 950: '#42100d' };
const gray = { 100: '#f8f5f5', 200: '#f2ecec', 300: '#c7c0c0', 400: '#958888', 500: '#615555', 700: '#403535', 800: '#2e2424', 900: '#1c1717' };

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