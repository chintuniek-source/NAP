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
          russet: '#320b35',
          butter: '#FFEDA8',
          espresso: '#320b35',
          ivory: '#F7F2E7',
          peacock: '#004958',
          mist: '#CDD6B7',
          // semantic mapping aliases
          coral: '#320b35',
          tangerine: '#320b35',
          sunshine: '#FFEDA8',
          mint: '#CDD6B7',
          sky: '#004958',
          lavender: '#004958',
          lilac: '#CDD6B7',
          cream: '#F7F2E7',
          card: '#FFFFFF',
          dark: '#320b35',
          navy: '#004958',
          charcoal: '#320b35'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Fredoka', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', 'cursive']
      },
      boxShadow: {
        'pop': '4px 4px 0px 0px #320b35',
        'pop-lg': '8px 8px 0px 0px #320b35',
        'pop-hover': '2px 2px 0px 0px #320b35',
        'soft-glow': '0 20px 40px -15px rgba(126, 57, 64, 0.3)',
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
