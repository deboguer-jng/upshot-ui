import alerts from './alerts'
import images from './images'
import buttons from './buttons'
import colors from './colors'
import gradients from './gradients'
import transitions from './transitions'
import forms from './forms'
import styles from './styles'
import sizes, { breakpoints, radii } from './sizes'
import text, { fonts, fontSizes, fontWeights, lineHeights } from './text'
import { Theme, useThemeUI, ThemeUIContextValue } from 'theme-ui'

interface ExactContextValue<T> extends Omit<ThemeUIContextValue, 'theme'> {
  theme: T
}

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
  alerts,
  breakpoints,
  buttons,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  forms,
  gradients,
  images,
  lineHeights,
  radii,
  sizes,
  space: sizes,
  styles,
  text,
  transitions,
})

export const useTheme = useThemeUI as unknown as () => ExactContextValue<
  typeof theme
>

export default theme
