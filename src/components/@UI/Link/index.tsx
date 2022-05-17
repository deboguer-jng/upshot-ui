import React, { forwardRef } from 'react'
import { LinkProps as LinkPropsUI, Link as DefaultLink } from 'theme-ui'
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
  /**
   * Polymorphic wrapper (used to inherit Next routing)
   */
  component?: React.FunctionComponent<any>
}

/**
 * Provides an anchor with optional router component.
 */
const Link = forwardRef(
  (
    {
      component: LinkComponent,
      children,
      color,
      noHover,
      href,
      ...props
    }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    /**
     * If a component prop is provided, assume it's a Next/link
     * and return a wrapped theme-UI anchor with the href attached.
     */
    if (LinkComponent && href)
      return (
        <LinkComponent {...{ href }} passHref>
          <StyledLink $color={color} $noHover={noHover} {...{ ref, ...props }}>
            {children}
          </StyledLink>
        </LinkComponent>
      )

    /**
     * Fallback to a styled theme-UI anchor if no router commponent is passed
     * or the href is missing.
     */
    return (
      <StyledLink
        $color={color}
        $noHover={noHover}
        {...{ ref, href, ...props }}
      >
        {children}
      </StyledLink>
    )
  }
)

export default Link
