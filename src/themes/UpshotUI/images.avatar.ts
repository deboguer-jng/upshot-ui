import sizes, { getSize } from './sizes'

const avatar = {
  default: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    borderStyle: 'solid',
    borderColor: 'transparent',
    fontFamily: 'degular',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  xs: {
    variant: 'images.avatar.default',
    size: getSize(4) + 'px',
    borderWidth: '1px',
    fontSize: 1,
  },
  sm: {
    variant: 'images.avatar.default',
    size: getSize(8) + 'px',
    borderWidth: sizes[1] / 2 + 'px',
    fontSize: 3,
  },
  md: {
    variant: 'images.avatar.default',
    size: getSize(16) + 'px',
    borderWidth: sizes[1] / 2 + 'px',
    fontSize: 5,
  },
  lg: {
    variant: 'images.avatar.default',
    size: getSize(24) + 'px',
    borderWidth: sizes[2] / 2 + 'px',
    fontSize: 7,
  },
  xl: {
    variant: 'images.avatar.default',
    size: getSize(48) + 'px',
    borderWidth: sizes[3] / 2 + 'px',
    fontSize: 8,
  },
}

export default avatar
