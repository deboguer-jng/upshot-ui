import React from 'react'
import css from '@emotion/css'
import { ThemeProvider } from 'theme-ui'
import { Global } from '@emotion/react'
import theme from './UpshotUI'

interface Props {
  children: React.ReactNode
}

/**
 * Global CSS for the application.
 */
export const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
  }
`

export default function UpshotThemeProvider({ children }: Props) {
  return (
    <ThemeProvider {...{ theme }}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  )
}
