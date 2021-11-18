const SIZE_UNIT = 4

export const getSize = (n: number) => n * SIZE_UNIT

const sizes = [...new Array(16)].map((_, n) => getSize(n))

export const breakpoints = ['640px', '768px', '1024px', '1280px', '1536px']

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
