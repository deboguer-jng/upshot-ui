export const fonts = {
  body: 'proxima-nova, sans-serif',
  heading: 'degular-display, sans-serif',
  serif: 'glysa, serif',
  monospace: 'Menlo, monospace',
}

export const fontSizes = [
  0.625, 0.75, 0.875, 1, 1.125, 1.438, 2, 2.188, 3.25,
].map((n) => n + 'rem')

export const fontWeights = {
  body: 400,
  heading: 500,
  bold: 700,
}

export const lineHeights = {
  body: '1.125rem',
  heading: '2.625rem',
}

const text = {
  default: {
    fontFamily: 'body',
    fontWeight: 'body',
    fontSize: 3,
    lineHeight: lineHeights.body,
  },
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
}

export default text
