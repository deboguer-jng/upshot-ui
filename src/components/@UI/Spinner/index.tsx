import React from 'react'
import { StyledSpinner, StyledGradient } from './Styled'

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /* Defines the size for the circle's radius. */
  size?: SpinnerSize
}

/** Provides a loading spinner */
export default function Spinner({ size = 'md', ...props }: SpinnerProps) {
  return (
    <StyledSpinner $size={size} {...props}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <clipPath id="spinnerClip">
          <path d="M100.001 50C100.001 77.6142 77.6149 100 50.0007 100C22.3865 100 0.000732422 77.6142 0.000732422 50C0.000732422 22.3858 22.3865 0 50.0007 0C77.6149 0 100.001 22.3858 100.001 50ZM17.5007 50C17.5007 67.9492 32.0515 82.5 50.0007 82.5C67.95 82.5 82.5007 67.9492 82.5007 50C82.5007 32.0507 67.95 17.5 50.0007 17.5C32.0515 17.5 17.5007 32.0507 17.5007 50Z" />
        </clipPath>

        <foreignObject
          x="0"
          y="0"
          width="100"
          height="100"
          clipPath="url(#spinnerClip)"
        >
          <StyledGradient />
        </foreignObject>
      </svg>
    </StyledSpinner>
  )
}
