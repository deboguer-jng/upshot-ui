import React from 'react'
import { StyledSpinner } from './Styled'
import spinners from '../../themes/UpshotUI/spinners'

export interface SpinnerProps {
  size?: keyof typeof spinners['sizes']
}

export const Spinner = ({ size = 'md' }: SpinnerProps) => {
  return (
    <StyledSpinner
      size={spinners.sizes[size]}
    />
  )
}
