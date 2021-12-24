const SIZE_UNIT = 4

export const getSize = (n: number) => n * SIZE_UNIT

const sizes = [...new Array(16)].map((_, n) => getSize(n))

export const breakpointsNamed = {
  xxs: '320px', // Custom lower-bound
  xs: '640px',
  sm: '768px',
  md: '1024px',
  lg: '1280px',
  xl: '1536px',
  xxl: '1678px', // Custom upper-bound
}

export const breakpoints = Object.values(breakpointsNamed)

export const radii = {
  square: sizes[0] + 'px',
  xs: sizes[1] + 'px',
  sm: sizes[2] + 'px',
  md: sizes[4] + 'px',
  lg: sizes[6] + 'px',
  pill: '9999px',
  circle: '50%',
}

export default sizes
