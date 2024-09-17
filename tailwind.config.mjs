/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			'primary': '#333',
			'secondary': '#f3f4f6',
		},
	},
	plugins: [animations],
}
