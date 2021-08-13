import { transparentize } from '@theme-ui/color'
import transitions from './transitions'
import sizes from './sizes'
import colors from './colors'

const buttons = {
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
    size: sizes[4],
    padding: sizes[2] + 'px',
    transition: transitions.default,
    '&:not(:disabled):hover': {
      bg: transparentize(colors['grey-800'], 0.5),
    },
    '&:disabled': {
      color: 'grey-700',
    },
  },
}

export default buttons
