import { css, Global } from '@emotion/react'
import React from 'react'
import { ThemeProvider } from 'theme-ui'

import theme from './theme'
interface Props {
  children: React.ReactNode
}

/**
 * Global CSS for the application.
 */
export const globalStyles = (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
      }
    `}
  />
)

export default function UpshotThemeProvider({ children }: Props) {
  return <ThemeProvider {...{ theme }}>{children}</ThemeProvider>
}
