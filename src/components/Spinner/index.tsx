import React from 'react'
import { StyledSpinner } from './Styled'
import { useThemeUI } from 'theme-ui'

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large'
}

export const Spinner = ({ size = 'medium' }: SpinnerProps) => {
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
      size={getSize()}
    />
  )
}
