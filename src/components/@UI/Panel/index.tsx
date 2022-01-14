import { BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'

import colors from '../../../themes/UpshotUI/colors'
import { PanelBase } from './Styled'
import { theme } from '../../..'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'

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
  /**
    * Border color on :hover
    */
  hoverBorder?: keyof typeof colors
}

/**
 * Provides a surface for UI elements.
 */
const Panel = forwardRef(
  (
    {
      inner = false,
      hoverUnderglow = 'transparent',
      hoverBorder = 'transparent',
      ...props
    }: PanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    // generate shadow css string
    const shadow = theme.shadow.underglow(hoverUnderglow) + ', ' + theme.shadow.border(hoverBorder)

    return (
      <PanelBase
        $inner={inner}
        $shadow={shadow}
        $isMobile={isMobile}
        {...{ ref, ...props }}
      />
    )
  }
)

export default Panel
