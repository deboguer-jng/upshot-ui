const theme = {
  config: {
    initialColorModeName: 'dark',
  },
  breakpoints: ['36em', '64em', '80em'],
  colors: {
    text: '#E4E4E4',
    background: '#000',
    primary: '#0091FF',
    secondary: '#EC5B94',
    red: '#FF562B',
    yellow: 'FFC503',
    green: '#7B61FF',
    'grey-200': '#F5F5F5',
    'grey-300': '#E4E4E4',
    'grey-400': '#C0C0C0',
    'grey-500': '#A7A7A7',
    'grey-600': '#7C7C7C',
    'grey-700': '#545454',
    'grey-800': '#231F20',
    'grey-900': '#151515',
  },
  fonts: {
    body: 'proxima-nova, sans-serif',
    heading: 'degular-display, sans-serif',
    serif: 'glysa, serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  fontSizes: [
    '0.625rem',
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.438rem',
    '2rem',
    '2.188rem',
    '3.25rem',
  ],
  lineHeights: {
    body: '1.125rem',
    heading: '2.625rem',
  },
  alerts: {
    success: {
      bg: 'primary',
    },
    error: {
      bg: 'red',
    },
  },
  buttons: {
    regular: {
      fontFamily: 'body',
      fontWeight: 'heading',
      fontSize: 4,
      lineHeight: '1.5rem',
    },
    accent: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 6,
      lineHeight: '2.625rem',
    },
  },
  gradients: {
    primary: 'linear-gradient(215.79deg, #E44BBE 11.28%, #FF5628 86.25%)',
    secondary: 'linear-gradient(131.94deg, #1891FC 4.44%, #1BB441 97.35%)',
    hype: `radial-gradient(
      147.52% 141.3% at 9.16% 1.3%,
      rgba(255, 86, 40, 0.627) 0%,
      rgba(253, 85, 50, 0.867) 19.2%,
      rgba(228, 75, 190, 0.922) 48.3%,
      #0091FF 100%)`,
  },
  text: {
    h0Primary: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 8,
      lineHeight: '4.25rem',
    },
    h0Secondary: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: 8,
      lineHeight: '4.25rem',
    },
    h1Primary: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 7,
      lineHeight: '3.25rem',
    },
    h1Secondary: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: 7,
      lineHeight: '3.25rem',
    },
    h2Primary: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 6,
      lineHeight: '2.375rem',
    },
    h2Secondary: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: 6,
      lineHeight: '2.375rem',
    },
    h2Tertiary: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 6,
      lineHeight: '2.625rem',
    },
    h3Primary: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 5,
      lineHeight: '1.75rem',
    },
    h3Secondary: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      fontSize: 5,
      lineHeight: '1.75rem',
    },
    xLarge: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 4,
      lineHeight: '1.5rem',
    },
    large: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 3,
      lineHeight: '1.375rem',
    },
    small: {
      fontFamily: 'body',
      fontWeight: 'heading',
      fontSize: 1,
      lineHeight: '1.25rem',
    },
    xSmall: {
      fontFamily: 'body',
      fontWeight: 'heading',
      fontSize: 0,
      lineHeight: '0.875rem',
    },
    caps: {
      textTransform: 'uppercase',
    },
  },
}

export default theme
