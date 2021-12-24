import React, { forwardRef } from 'react'
import { ContainerBase } from './Styled'
import { FlexProps } from 'theme-ui'

export interface ContainerProps extends FlexProps {
  /**
   * Number of breakpoints to constrain from max width.
   */
  constrain?: number
}

/**
 * Provides a centered layout container with mobile-first breakpoints.
 */
const Container = forwardRef(
  (
    { constrain, ...props }: ContainerProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => <ContainerBase $constrain={constrain} {...{ ref, ...props }} />
)

export default Container
