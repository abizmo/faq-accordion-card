module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '1.62rem',
      },
      color: {
        desaturatedBlue: 'hsl(238, 29%, 16%)',
        softRed: 'hsl(14, 88%, 65%)',
        softViolet: 'hsl(273, 75%, 66%)',
        softBlue: 'hsl(240, 73%, 65%)',
        darkGrayishBlue: 'hsl(237, 12%, 33%)',
        grayishBlue: 'hsl(240, 6%, 50%)',
        lightGrayishBlue: 'hsl(240, 5%, 91%)',
      },
      fontSize: {
        h1: '2.46rem',
      },
      maxWidth: {
        mobile: '327px',
      },
      spacing: {
        '1u': '8px',
        '2u': '16px',
        '3u': '24px',
        '4u': '32px',
        '5u': '40px',
        '6u': '48px',
      },
    },
  },
  plugins: [],
};
