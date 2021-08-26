import animations, { durations } from './animations'
import alerts from './alerts'
import images from './images'
import buttons from './buttons'
import colors from './colors'
import gradients from './gradients'
import transitions from './transitions'
import chart from './chart'
import forms from './forms'
import spinners from './spinners'
import shadows from './shadows'
import styles from './styles'
import scroll from './scroll'
import sizes, { breakpoints, radii } from './sizes'
import text, { fonts, fontSizes, fontWeights, lineHeights } from './text'
import { useThemeUI, ThemeUIContextValue } from 'theme-ui'

/**
 * Provides typed UpshotUI theme context.
 * @see https://theme-ui.com/guides/typescript/
 */
interface ExactContextValue<T> extends Omit<ThemeUIContextValue, 'theme'> {
  theme: T
}

const theme = {
  alerts,
  animations,
  breakpoints,
  buttons,
  chart,
  colors,
  durations,
  fonts,
  fontSizes,
  fontWeights,
  forms,
  gradients,
  images,
  lineHeights,
  radii,
  rawColors: colors,
  scroll,
  shadows,
  sizes,
  space: sizes,
  spinners,
  styles,
  text,
  transitions,
}

export type UpshotUIThemeType = typeof theme

export const useTheme =
  useThemeUI as unknown as () => ExactContextValue<UpshotUIThemeType>

export default theme
