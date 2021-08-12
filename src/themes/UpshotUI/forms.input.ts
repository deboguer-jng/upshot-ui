import sizes from './sizes'

/**
 * Base styling for a text input.
 */
export const inputDefault = {
  height: '45px',
  border: 'none',
  bg: 'grey-800',
  color: 'grey-500',
  padding: `0 ${sizes[3]}px`,
  outline: 'none',
  fontFamily: 'degular',
  fontWeight: 'heading',
  fontSize: 4,
  lineHeight: 1,
  '&::placeholder': {
    fontWeight: 'heading',
  },
}

/**
 * Adds a rounded border radius to an input.
 */
export const inputRounded = {
  borderRadius: 'pill',
}

const formInputs = {
  rounded: {
    ...inputDefault,
    ...inputRounded,
  },
  roundedDark: {
    ...inputDefault,
    ...inputRounded,
    bg: 'black',
  },
}

export default formInputs
