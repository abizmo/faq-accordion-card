module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '1.75rem',
      },
      color: {
        desaturatedBlue: 'hsl(238, 29%, 16%)',
        softViolet: 'hsl(273, 75%, 66%)',
        softBlue: 'hsl(240, 73%, 65%)',
        lightGrayishBlue: 'hsl(240, 5%, 91%)',
      },
      fontSize: {
        h1: '2.67rem',
        q: '1.08rem',
      },
      spacing: {
        '1u': '8px',
        '2u': '16px',
        '3u': '24px',
        '4u': '32px',
        '5u': '40px',
        '6u': '48px',
        '16u': '128px',
        desh: '565px',
        desw: '900px',
        mobh: '565px',
        mobw: '327px',
      },
      textColor: {
        darkGrayishBlue: 'hsl(237, 12%, 33%)',
        grayishBlue: 'hsl(240, 6%, 50%)',
        softRed: 'hsl(14, 88%, 65%)',
      },
    },
  },
  plugins: [],
};
