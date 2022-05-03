import { BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'
import { ProgressBarBase } from './Styled'

export interface ProgressBarProps extends BoxProps {}

/**
 * Provides a surface for UI elements.
 */
const ProgressBar = forwardRef(
  (props: ProgressBarProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return <ProgressBarBase {...{ ref, ...props }} />
  }
)

export default ProgressBar
