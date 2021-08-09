import React from 'react'
import { StyledSpinner } from './Styled'
import { useTheme } from '@emotion/react'

export interface SpinnerProps {
  theme?: 'dark' | 'light'
  size?: 'small' | 'medium' | 'large'
}

export const Spinner = ({ theme = 'dark', size = 'medium' }: SpinnerProps) => {
  const th = useTheme()
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
        theme === 'dark' ? 'white' : th.colors?.background?.toString()
      }
      size={getSize()}
    />
  )
}
