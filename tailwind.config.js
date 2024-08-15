/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			blue: '#006DFF',
			'blue-dark': '#131C28',
			'gray-dark': '#73787B',
			'gray-light': '#EFF2F4',
			white: '#fff',
			black: '#000',
			red: '#E5252A'
		},
		fontFamily: {
			sans: ['Manrope', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
}
