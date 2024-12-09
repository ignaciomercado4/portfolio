/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'primary': '#17172e',
		  'secondary': '#7f7ff0'
		}
	  }
	},
	plugins: []
  };