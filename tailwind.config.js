/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        marquee: 'scroll 30s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      }
    },
    colors: {
      header: '#171513',
      'header-dark': '#0f0e0d',
      white: '#fff',
      pink: '#a03ff4',
      'pink-2': '#f2528a',
      intermedium: '#E67464',
      'light-orange-2': '#fc6c05',
      'light-orange': '#f97b04',
      'pink-hover': '#8700ff',
      'light-orange-hover': '#ff5d00',
      black: '#000',
      'bg-primary': '#F3F3F3',
      'bg-primary-dark': '#121212',
      'bg-secondary-dark': '#1e1e1e',
      'text-primary-dark': '#e0e0e0',
      gray: {
        100: '#f7fafc',
        900: '#1a202c',
      }
    }
  },
  plugins: []
}
