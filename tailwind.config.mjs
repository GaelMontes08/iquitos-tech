/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				main: "rgb(29 78 216)",
				gray: "#C6C6C6",
				border: "#F1F8FF"
			}
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
