import sizes, { getSize } from './sizes'

const formInputs = {
  default: {
    height: getSize(10) + 'px',
    border: 'none',
    outline: 'none',
    bg: 'grey-800',
    color: 'grey-500',
    padding: sizes[3] + 'px',
    fontFamily: 'body',
    fontWeight: 'heading',
    fontSize: 4,
    '&::placeholder': {
      fontWeight: 'heading',
    },
  },
  rounded: {
    variant: 'forms.inputs.default',
    borderRadius: 'pill',
  },
  roundedDark: {
    variant: 'forms.inputs.rounded',
    bg: '#000',
  },
}

export default formInputs
