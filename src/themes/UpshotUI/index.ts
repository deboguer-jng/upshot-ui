import animations, { durations } from './animations'
import alerts from './alerts'
import accordion from './accordion'
import images from './images'
import buttons from './buttons'
import colors from './colors'
import gradients from './gradients'
import transitions from './transitions'
import chart from './chart'
import forms from './forms'
import spinners from './spinners'
import shadow from './shadow'
import styles from './styles'
import scroll from './scroll'
import sizes, { breakpoints, radii } from './sizes'
import transactionHistoryItem from './transactionHistoryItem'
import miniNftCard from './miniNftCard'
import zIndex from './zIndex'
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
  accordion,
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
  miniNftCard,
  zIndex,
  radii,
  rawColors: colors,
  scroll,
  shadow,
  sizes,
  space: sizes,
  spinners,
  styles,
  text,
  transitions,
  transactionHistoryItem,
}

export type UpshotUIThemeType = typeof theme

export const useTheme =
  useThemeUI as unknown as () => ExactContextValue<UpshotUIThemeType>

export default theme
