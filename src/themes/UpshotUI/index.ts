import alerts from './alerts'
import avatars from './avatars'
import buttons from './buttons'
import iconButtons from './buttons.icons'
import colors from './colors'
import gradients from './gradients'
import transitions from './transitions'
import forms from './forms'
import sizes from './sizes'
import text, { fonts, fontSizes, fontWeights, lineHeights } from './text'
import { Theme, ThemeUIStyleObject } from 'theme-ui'

export interface UpshotUITheme extends Theme {
  avatars: Record<string, ThemeUIStyleObject>
  gradients: ThemeUIStyleObject
  iconButtons: Record<string, ThemeUIStyleObject>
}

export const breakpoints = ['23em', '43em', '80em']

export const radii = {
  square: '0',
  xs: '5px',
  sm: '10px',
  md: '20px',
  lg: '30px',
  pill: '9999px',
  circle: '50%',
}

export const styles = {
  root: {
    body: {
      margin: 0,
      bg: colors.black,
      color: colors.text,
    },
  },
}

const theme: UpshotUITheme = {
  sizes,
  space: sizes,
  radii,
  breakpoints,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  colors,
  avatars,
  forms,
  alerts,
  buttons,
  iconButtons,
  gradients,
  transitions,
  text,
  styles,
}

export default theme
