import sizes, { getSize } from './sizes'

/**
 * Base styling for a text input.
 */
export const inputDefault = {
  height: getSize(10) + 'px',
  border: 'none',
  outline: 'none',
  bg: 'grey-800',
  color: 'grey-500',
  padding: sizes[3] + 'px',
  fontFamily: 'degular',
  fontWeight: 'heading',
  fontSize: 4,
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
