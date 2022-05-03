import { BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'
import { ProgressBarBase } from './Styled'
import colors from '../../../themes/UpshotUI/colors'

export interface ProgressBarProps extends BoxProps {
  /**
   * Fill percentage.
   */
  percent: number
  /**
   * Background color.
   */
  bgColor?: keyof typeof colors
}

/**
 * Provides a progress bar for the gmi scoring.
 */
const ProgressBar = forwardRef(
  (
    { percent = 0, ...props }: ProgressBarProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return <ProgressBarBase $percent={percent} {...{ ref, ...props }} />
  }
)

export default ProgressBar
