import { Theme } from 'theme-ui'
import { transparentize } from '@theme-ui/color'
import transitions from './transitions'

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
    transition: transitions.default,
    '&:not(:disabled):hover': {
      bg: transparentize('grey-800', 0.5),
    },
    '&:disabled': {
      color: 'grey-700',
      pointerEvents: 'none',
    },
  },
}

export default buttons
