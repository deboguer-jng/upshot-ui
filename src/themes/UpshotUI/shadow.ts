import colors from './colors'

const shadow = {
  default: '0 0 16px rgba(0, 0, 0, 0.3)',
  underglow: (color: keyof typeof colors) => `0px 4px 4px ${colors[color]}`,
  border: (color: keyof typeof colors) => `0px 0px 0px 1px ${colors[color]}`,
}

export default shadow
