/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				fade: 'fade .5s ease-in-out',
				shake: 'shake 2s cubic-bezier(.36,.07,.19,.97) both ',
			},
			keyframes: {
				fade: {
					'0%': { opacity: 0, transform: 'translateY(-100px)' },
					'100%': { opacity: 1, transform: 'translateY(-0px)' },
				},
				shake: {
					'10%, 90%': {
						transform: 'translate3d(-1px, 0, 0)',
					},
					'20%, 80%': {
						transform: 'translate3d(2px, 0, 0)',
					},
					'30%, 50%, 70%': {
						transform: 'translate3d(-4px, 0, 0)',
					},
					'40%, 60%': {
						transform: 'translate3d(4px, 0, 0)',
					},
				},
			},
		},
		animation: {
			fade: 'fade .5s ease-in-out',
		},
		keyframes: {
			fade: {
				'0%': { opacity: 0, transform: 'translateY(-100px)' },
				'100%': { opacity: 1, transform: 'translateY(-0px)' },
			},
		},
	},
	plugins: [],
};
