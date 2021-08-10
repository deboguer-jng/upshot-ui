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
}

export default forms
