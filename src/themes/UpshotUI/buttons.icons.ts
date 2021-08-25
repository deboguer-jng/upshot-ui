import colors from './colors'
import { transparentize } from 'polished'
import transitions from './transitions'
import sizes from './sizes'

const iconButtons = {
  color: 'grey-600',
  borderRadius: 'circle',
  size: sizes[2],
  padding: sizes[2] + 'px',
  transition: transitions.default,
  flexShrink: 0,
  cursor: 'pointer',
  '&:not(:disabled):hover': {
    bg: transparentize(0.5, colors['grey-800']),
  },
  '&:disabled': {
    color: 'grey-700',
    cursor: 'not-allowed',
  },
}

export default iconButtons
