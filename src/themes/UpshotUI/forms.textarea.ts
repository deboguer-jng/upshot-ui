import sizes, { getSize } from './sizes'

const textarea = {
  default: {
    border: 'none',
    outline: 'none',
    bg: 'grey-800',
    color: 'grey-500',
    fontFamily: 'body',
    fontWeight: 'heading',
    fontSize: 4,
    '&::placeholder': {
      fontWeight: 'heading',
    },
  },
  rounded: {
    variant: 'forms.textarea.default',
    borderRadius: 'md',
  },
  roundedDark: {
    variant: 'forms.textarea.rounded',
    bg: '#000',
  },
}

export default textarea
