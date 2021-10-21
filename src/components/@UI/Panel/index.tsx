import { BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'

import colors from '../../../themes/UpshotUI/colors'
import { PanelBase } from './Styled'

export interface PanelProps extends BoxProps {
  /**
   * Inner variants use a darker color with a smaller
   * border radius.
   */
  inner?: boolean
  /**
   * Underglow color on :hover
   */
   hoverUnderglow?: keyof typeof colors
}

/**
 * Provides a surface for UI elements.
 */
const Panel = forwardRef(
  (
    {
      inner = false,
      hoverUnderglow = 'transparent',
      ...props
    }: PanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => <PanelBase $inner={inner} $hoverUnderglow={hoverUnderglow} {...{ ref, ...props }} />
)

export default Panel
