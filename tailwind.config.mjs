/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#EE5823",
				primary_variant_1: "#EE2F23",
				primary_variant_2: "#EE8123",
				generacion_distribuida: "EE233F",
				sistemas_aislados: "#EEA923"
			}
		},
	},
	plugins: [],
}
