import { BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'

import colors from '../../../themes/UpshotUI/colors'
import { PanelBase } from './Styled'
import { theme } from '../../..'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import { radii } from '../../../themes/UpshotUI/sizes'

export interface PanelProps extends BoxProps {
  /**
   * Renders a darker background panel.
   */
  dark?: boolean
  /**
   * Underglow color on :hover
   */
  hoverUnderglow?: keyof typeof colors
  /**
   * Border color on :hover
   */
  hoverBorder?: keyof typeof colors
  /**
   * Background color
   */
  backgroundColor?: keyof typeof colors
  /**
   * Adds a 1px grey border.
   */
  outlined?: boolean
  /**
   * Border radius.
   */
  radii?: keyof typeof radii
}

/**
 * Provides a surface for UI elements.
 */
const Panel = forwardRef(
  (
    {
      dark = false,
      hoverUnderglow = 'transparent',
      hoverBorder = 'transparent',
      radii = 'lg',
      backgroundColor,
      outlined,
      ...props
    }: PanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    // generate shadow css string
    const shadow =
      theme.shadow.underglow(hoverUnderglow) +
      ', ' +
      theme.shadow.border(hoverBorder)

    return (
      <PanelBase
        $dark={dark}
        $shadow={shadow}
        $isMobile={isMobile}
        $backgroundColor={backgroundColor}
        $outlined={outlined}
        $radii={radii}
        {...{ ref, ...props }}
      />
    )
  }
)

export default Panel
