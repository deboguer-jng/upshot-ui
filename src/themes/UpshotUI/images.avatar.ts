import sizes, { getSize } from './sizes'

const avatar = {
  default: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    borderStyle: 'solid',
    borderColor: 'transparent',
    fontFamily: 'degular',
    fontWeight: 'bold',
    lineHeight: 1,
    textTransform: 'uppercase',
    userSelect: 'none',
  },
  xs: {
    variant: 'images.avatar.default',
    size: getSize(4),
    borderWidth: '1px',
    fontSize: 1,
  },
  sm: {
    variant: 'images.avatar.default',
    size: getSize(6),
    borderWidth: sizes[1] / 2 + 'px',
    fontSize: 2,
  },
  md: {
    variant: 'images.avatar.default',
    size: getSize(12),
    borderWidth: sizes[1] / 2 + 'px',
    fontSize: 5,
  },
  lg: {
    variant: 'images.avatar.default',
    size: getSize(24),
    borderWidth: sizes[2] / 2 + 'px',
    fontSize: 7,
  },
  xl: {
    variant: 'images.avatar.default',
    size: getSize(48),
    borderWidth: sizes[3] / 2 + 'px',
    fontSize: 8,
  },
}

export default avatar
