module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['roboto_condensedregular', 'Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
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
        'black': '#000',
        'white': '#FFF',
        'blue': {
          light: '#aab7cb',
          DEFAULT: '#083955',
          dark: '#2b4354',
        },
        'green': {
          DEFAULT: '#298073'
        }
      }
    },
  },
  variants: {
    // extend: {},
      display: ["group-hover"]
  },
  plugins: []
}