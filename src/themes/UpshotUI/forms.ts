import { Theme } from 'theme-ui'
import sizes from './sizes'

const labelBase = {
  fontFamily: 'body',
  color: 'grey-300',
  border: 'solid',
  borderColor: 'grey-300',
  borderWidth: 2,
  borderRadius: 'xs',
  display: 'inline-block',
  width: 'auto',
  padding: sizes[1] + 'px',
}

const forms: Theme['forms'] = {
  input: {
    height: '45px',
    bg: 'grey-800',
    border: 'none',
    borderRadius: 'pill',
    color: 'grey-500',
    padding: '0 1rem',
    outline: 'none',
    fontFamily: 'degular',
    fontWeight: 'heading',
    fontSize: 4,
    lineHeight: 1,
    '&::placeholder': {
      fontWeight: 'heading',
    },
  },
  switch: {
    bg: 'grey-500', // Off: background
    '& div': {
      bg: 'grey-900', // Off: circle
    },
    '&:disabled div': {
      bg: 'grey-700', // Disabled: circle
    },
    'input:checked ~ &': {
      bg: 'primary', // On: background
    },
    'input:checked ~ & div': {
      bg: 'grey-900', // On: circle
    },
  },
  basicSmall: {
    ...labelBase,
    fontSize: 0
  },
  basicMedium: {
    ...labelBase,
    fontSize: 2
  },
}

export default forms
