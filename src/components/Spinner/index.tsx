import React from 'react'
import { StyledSpinner } from './Styled'
import spinners from '../../themes/UpshotUI/spinners'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size of the loading spinner
   */
  size?: keyof typeof spinners['sizes']
}

/**
 * Provides a loading spinner
 */
export default function Spinner({ size = 'md' }: SpinnerProps) {
  return (
    <StyledSpinner
      $size={spinners.sizes[size]}
    />
  )
}
