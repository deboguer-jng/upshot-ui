import { css, Global } from '@emotion/react'
import React from 'react'
import { ThemeProvider, Theme } from '@emotion/react'

import theme from './UpshotUI'

interface Props {
  theme?: Theme
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
    `}
  />
)

export default function UpshotThemeProvider({ children }: Props) {
  return (
    <ThemeProvider {...{ theme }}>
      {globalStyles}
      {children}
    </ThemeProvider>
  )
}
