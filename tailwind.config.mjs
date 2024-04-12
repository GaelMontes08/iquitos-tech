/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
	darkMode: "class",
	theme: {
		extend: {
			display: ['group-focus'],
			opacity: ['group-focus'],
			inset: ['grouo-focus'],
			colors: {
				main: "rgb(26 71 196)",
				gray: "#C6C6C6",
				border: "#F1F8FF"
			}
		},
	},
	plugins: [require('@tailwindcss/forms'), nextui()],
}
