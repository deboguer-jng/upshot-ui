import sizes, { getSize } from './sizes'

const avatarDefault = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  borderStyle: 'solid',
  borderColor: 'transparent',
  fontFamily: 'degular',
  fontWeight: 'bold',
  lineHeight: 1,
}

const avatar = {
  xs: {
    ...avatarDefault,
    size: getSize(4) + 'px',
    borderWidth: '1px',
    fontSize: 1,
  },
  sm: {
    ...avatarDefault,
    size: getSize(8) + 'px',
    borderWidth: sizes[1] / 2 + 'px',
    fontSize: 3,
  },
  md: {
    ...avatarDefault,
    size: getSize(16) + 'px',
    borderWidth: sizes[1] / 2 + 'px',
    fontSize: 5,
  },
  lg: {
    ...avatarDefault,
    size: getSize(24) + 'px',
    borderWidth: sizes[2] / 2 + 'px',
    fontSize: 7,
  },
  xl: {
    ...avatarDefault,
    size: getSize(48) + 'px',
    borderWidth: sizes[3] / 2 + 'px',
    fontSize: 8,
  },
}

export default avatar
