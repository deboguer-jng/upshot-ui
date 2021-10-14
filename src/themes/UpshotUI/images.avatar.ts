import { getSize } from './sizes'

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
  },
  xs: {
    variant: 'images.avatar.default',
    size: getSize(4) + 'px',
    minWidth: getSize(4) + 'px',
    borderWidth: '1px',
    fontSize: 1,
  },
  sm: {
    variant: 'images.avatar.default',
    size: getSize(6) + 'px',
    minWidth: getSize(6) + 'px',
    borderWidth: '2px',
    fontSize: 3,
  },
  md: {
    variant: 'images.avatar.default',
    size: getSize(12) + 'px',
    minWidth: getSize(12) + 'px',
    borderWidth: '2px',
    fontSize: 5,
  },
  lg: {
    variant: 'images.avatar.default',
    size: getSize(18) + 'px',
    minWidth: getSize(18) + 'px',
    borderWidth: '3px',
    fontSize: 6,
  },
  xl: {
    variant: 'images.avatar.default',
    size: getSize(24) + 'px',
    minWidth: getSize(24) + 'px',
    borderWidth: '4px',
    fontSize: 7,
  },
}

export default avatar
