import React, { forwardRef } from 'react'
import { PanelBase } from './Styled'
import { BoxProps } from 'theme-ui'

export interface PanelProps extends BoxProps {
  /**
   * Inner variants use a darker color with a smaller
   * border radius.
   */
  inner?: boolean
}

/**
 * Provides a surface for UI elements.
 */
const Panel = forwardRef(
  (
    { inner = false, ...props }: PanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => <PanelBase $inner={inner} {...{ ref, ...props }} />
)

export default Panel
