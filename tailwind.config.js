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
      transparent: 'transparent',
      podium: '#FFC347',
    },
    backgroundColor: (theme) => theme('colors'),
    extend: {
      width: {
        21: '5.25rem',
      },
      height: {
        21: '5.25rem',
        30: '7.5rem',
        39: '9.75rem',
        42: '10.5rem',
        46: '11.5rem',
        54: '13.5rem',
        136: '34rem',
        217: '54.25rem',
        228: '57rem',
        232: '58rem',
        240: '60rem',
        250: '62.5rem',
        260: '65rem',
        280: '70rem',
      },
      minHeight: {
        14: '3.5rem',
      },
      fontSize: {},
      lineHeight: {
        14: '3.5rem',
        20: '5rem',
      },
      spacing: {
        13: '3.25rem',
        17.5: '4.375rem',
        30: '7.5rem',
        32: '8rem',
        35.5: '8.875rem',
        37.5: '9.375rem',
      },
    },
  },
  plugins: [],
}
