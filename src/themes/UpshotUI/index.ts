import alerts from './alerts'
import images from './images'
import buttons from './buttons'
import colors from './colors'
import gradients from './gradients'
import transitions from './transitions'
import forms from './forms'
import sizes from './sizes'
import text, { fonts, fontSizes, fontWeights, lineHeights } from './text'
import { Theme, useThemeUI, ThemeUIContextValue } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

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

const theme = makeTheme({
  sizes,
  space: sizes,
  radii,
  breakpoints,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  colors,
  images,
  forms,
  alerts,
  buttons,
  gradients,
  transitions,
  text,
  styles,
})

interface ExactContextValue extends Omit<ThemeUIContextValue, 'theme'> {
  theme: typeof theme
}

export const useTheme = useThemeUI as unknown as () => ExactContextValue

export default theme
