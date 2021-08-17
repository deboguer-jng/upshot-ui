import colors from './colors'
import { transparentize } from '@theme-ui/color'
import transitions from './transitions'
import sizes from './sizes'

const iconButtons = {
  color: 'grey-600',
  borderRadius: 'circle',
  size: sizes[2],
  padding: sizes[2] + 'px',
  transition: transitions.default,
  cursor: 'pointer',
  '&:not(:disabled):hover': {
    bg: transparentize(colors['grey-800'], 0.5),
  },
  '&:disabled': {
    color: 'grey-700',
    cursor: 'not-allowed',
  },
}

export default iconButtons
