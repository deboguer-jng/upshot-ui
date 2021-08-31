const SIZE_UNIT = 4

export const getSize = (n: number) => n * SIZE_UNIT

const sizes = [...new Array(16)].map((_, n) => getSize(n))

export const breakpoints = ['23em', '43em', '80em']

export const radii = {
  square: sizes[0] + 'px',
  xs: sizes[1] + 'px',
  sm: sizes[2] + 'px',
  md: sizes[4] + 'px',
  lg: sizes[6] + 'px',
  pill: '9999px',
  circle: '50vh',
  oval: '50%',
}

export default sizes
