import React from 'react'
import { StyledSpinner } from './Styled'
import { useThemeUI } from 'theme-ui'

export interface SpinnerProps {
  theme?: 'dark' | 'light'
  size?: 'small' | 'medium' | 'large'
}

export const Spinner = ({ theme = 'dark', size = 'medium' }: SpinnerProps) => {
  const context = useThemeUI()
  const getSize = () => {
    switch (size) {
      case 'small':
        return 30
      case 'medium':
        return 50
      case 'large':
        return 70
    }
  }

  return (
    <StyledSpinner
      borderColor={
        theme === 'dark'
          ? context.theme.colors?.text?.toString()
          : context.theme.colors?.background?.toString()
      }
      size={getSize()}
    />
  )
}
