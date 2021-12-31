module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '768px',
      tabletLarge: '1024px',
      desktop: '1280px',
    },
    colors: {
      primary: '#0E3C9E',
      secondary: '#0D46B7',
      tertiary: '#1d287a',
      white: '#ffffff',
    },
    backgroundColor: (theme) => theme('colors'),
    minHeight: {
      14: '3.5rem',
    },
    extend: {
      width: {
        p50: '50%',
      },
      fontSize: {},
      lineHeight: {
        14: '3.5rem',
        20: '5rem',
      },
    },
  },
  plugins: [],
}
