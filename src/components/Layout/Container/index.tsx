import React, { forwardRef } from 'react'
import { ContainerBase } from './Styled'
import { FlexProps } from 'theme-ui'
import { breakpointsNamed } from '../../../themes/UpshotUI/sizes'
export interface ContainerProps extends FlexProps {
  /**
   * Maximum breakpoint width.
   */
  maxBreakpoint?: keyof typeof breakpointsNamed
}

/**
 * Provides a centered layout container with mobile-first breakpoints.
 */
const Container = forwardRef(
  (
    { maxBreakpoint, ...props }: ContainerProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => <ContainerBase $maxBkp={maxBreakpoint} {...{ ref, ...props }} />
)

export default Container
