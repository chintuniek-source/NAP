/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nap: {
          coral: '#FF6584',
          tangerine: '#FF8A5B',
          sunshine: '#FFD166',
          mint: '#06D6A0',
          sky: '#118AB2',
          lavender: '#845EC2',
          lilac: '#B39CD0',
          cream: '#FFFDF9',
          card: '#FFFFFF',
          dark: '#161925',
          navy: '#0F172A',
          charcoal: '#2D3142'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Fredoka', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive']
      },
      boxShadow: {
        'pop': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'pop-lg': '8px 8px 0px 0px rgba(0, 0, 0, 1)',
        'pop-hover': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
        'soft-glow': '0 20px 40px -15px rgba(255, 101, 132, 0.3)',
      },
      animation: {
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 18s linear infinite'
      },
      keyframes: {
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' }
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' }
        }
      }
    },
  },
  plugins: [],
}
