module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['roboto_condensedregular', 'Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
      'serif': ['Source Serif Pro']
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'background': 'rgb(234, 232, 228)',
        'black': '#000',
        'darkgray': 'rgb(51,51,51)',
        'white': '#FFF',
        'slate': '#334155',
        'blue': {
          light: '#aab7cb',
          DEFAULT: '#00274C',
          dark: '#2b4354',
        },
        'green': {
          DEFAULT: '#298073',
          light: '#6B9C95'
        },
        'purple': {
          DEFAULT: '#722e9a',
          secondary: '#683aff',
          light: '#85729b'
        },
        'yellow': {
          DEFAULT: '#f5bd1f',
          secondary: '#ffe090',
          light: '#fff6df',
          lighter: 'rgb(207, 191, 132)'
        }
      },
       backgroundImage: {
        'arrow-right': "url('/arrow-right.svg')",
      
      }
    },
  },
  variants: {
    // extend: {},
      display: ["group-hover"]
  },
  plugins: []
}