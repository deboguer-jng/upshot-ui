import { Theme as DefaultTheme } from 'theme-ui'

declare module 'theme-ui' {
  interface Theme extends DefaultTheme {
    gradients: {
      [key: string]: string
    }
  }
}
