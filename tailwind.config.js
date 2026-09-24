/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        italiana: ['"Italiana"', 'serif'],
        bodoni: ['"Bodoni Moda"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      colors: {
        studio: {
          bg: '#F7F4EE',
          card: '#FFFFFF',
          surface: '#EFEBE3',
          border: 'rgba(28, 25, 23, 0.08)',
          'border-hover': 'rgba(28, 25, 23, 0.22)',
          primary: '#1A1715',
          secondary: '#5E5851',
          muted: '#8E877F',
          taupe: '#7D6652',
          'taupe-dark': '#5C4A3A',
          'taupe-light': '#9B836E',
          gold: '#C8A97E',
          'gold-light': '#E5D3B8',
          'gold-dark': '#9E7D52',
          olive: '#929E45',
        },
      },
      keyframes: {
        floatAurora: {
          '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(4vw, -4vh) scale(1.1) rotate(4deg)' },
          '66%': { transform: 'translate(-4vw, 4vh) scale(0.9) rotate(-4deg)' },
          '100%': { transform: 'translate(2vw, -2vh) scale(1) rotate(0deg)' },
        },
        floatLeak: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(15vw, 8vh) scale(1.2)' },
        },
      },
      animation: {
        'aurora-slow': 'floatAurora 24s ease-in-out infinite alternate',
        'aurora-medium': 'floatAurora 18s ease-in-out infinite alternate-reverse',
        'light-leak': 'floatLeak 16s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
