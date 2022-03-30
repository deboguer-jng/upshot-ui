import React, { forwardRef } from 'react'
import { LinkProps as LinkPropsUI } from 'theme-ui'

import { StyledLink } from './Styled'

export interface LinkProps extends LinkPropsUI {
  /**
   * Link url.
   */
   noHover?: boolean
}

/**
 *
 * Provides a basic label or a currency label of various sizes.
 */
const Link = forwardRef(
  (
    {
      noHover = false,
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
      >
      </StyledLink>
    )
  }
)

export default Link
