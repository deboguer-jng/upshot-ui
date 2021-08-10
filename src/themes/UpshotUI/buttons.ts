import { Theme } from 'theme-ui'

const buttons: Theme['buttons'] = {
  primary: {
    fontFamily: 'body',
    fontWeight: 'heading',
    fontSize: 4,
    lineHeight: '1.5rem',
  },
  secondary: {
    fontFamily: 'heading',
    fontWeight: 'heading',
    fontSize: 6,
    lineHeight: '2.625rem',
  },
  icon: {
    color: 'grey-600',
    borderRadius: 'circle',
    cursor: 'pointer',
    size: 30,
    transition: 'background-color 0.125s ease',
    '&:not(:disabled):hover': {
      bg: 'grey-300',
    },
    '&:disabled': {
      color: 'grey-400',
      pointerEvents: 'none',
    },
  },
}

export default buttons
