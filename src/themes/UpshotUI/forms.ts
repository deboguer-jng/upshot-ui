import { Theme } from 'theme-ui'

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
}

export default forms
