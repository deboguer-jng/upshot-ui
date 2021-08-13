import { transparentize } from '@theme-ui/color'
import transitions from './transitions'
import { inputDefault } from './forms.inputs'
import sizes from './sizes'

/**
 * Base styling for an icon button.
 */
const iconButtonDefault = {
  color: 'grey-600',
  borderRadius: 'circle',
  cursor: 'pointer',
  size: sizes[4],
  padding: sizes[2] + 'px',
  transition: transitions.default,
  '&:not(:disabled):hover': {
    bg: transparentize('grey-800', 0.5),
  },
  '&:disabled': {
    color: 'grey-700',
  },
}

const iconButtons = {
  primary: {
    ...iconButtonDefault,
  },
  input: {
    ...iconButtonDefault,
    size: inputDefault.height,
    padding: sizes[1] + 'px',
  },
}

export default iconButtons
