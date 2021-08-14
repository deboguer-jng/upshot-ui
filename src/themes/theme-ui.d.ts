import '@emotion/react'
import UpshotUITheme from './UpshotUI'

type UpshotUIThemeType = typeof UpshotUITheme

/**
 * Provides theme types for styled components.
 * @see https://emotion.sh/docs/typescript#define-a-theme
 */
declare module '@emotion/react' {
  export interface Theme extends UpshotUIThemeType {}
}
