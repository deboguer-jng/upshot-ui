import colors from './colors'

const shadows = {
  default: '0 0 16px rgba(0, 0, 0, 0.3)',
  underglow: (color: keyof typeof colors) => `0px 4px 4px ${colors[color]}`,
}

export default shadows
