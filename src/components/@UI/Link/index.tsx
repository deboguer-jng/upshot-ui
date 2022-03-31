import React, { forwardRef } from 'react'
import { LinkProps as LinkPropsUI } from 'theme-ui'

import { StyledLink } from './Styled'
import colors from '../../../themes/UpshotUI/colors'

export interface LinkProps extends LinkPropsUI {
  /**
   * Disable text-decoration on hover
   */
   noHover?: boolean
   /**
    * Text color (default: inherit)
    */
    color?: keyof typeof colors
  }

/**
 *
 * Provides a basic label or a currency label of various sizes.
 */
const Link = forwardRef(
  (
    {
      noHover = false,
      color,
      ...props
    }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    return (
      <StyledLink
        {...{ ref, ...props }}
        sx={{
          ...{ flexShrink: 0, whiteSpace: 'nowrap' },
          ...(props?.sx ?? {}),
        }}
        $noHover={noHover}
        $color={color}
      >
      </StyledLink>
    )
  }
)

export default Link
