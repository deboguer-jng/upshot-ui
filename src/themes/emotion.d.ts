import '@emotion/react'
import UpshotUITheme from './UpshotUI'

type UpshotUIThemeType = typeof UpshotUITheme

declare module '@emotion/react' {
  export interface Theme extends UpshotUIThemeType {}
}
