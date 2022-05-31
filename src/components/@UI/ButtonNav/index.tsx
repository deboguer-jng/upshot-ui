import React, { ReactNode, HTMLAttributes, forwardRef } from 'react'
import { StyledButtonNav } from './Styled'

export interface ButtonNavProps {
  icon?: ReactNode

  children?: ReactNode

  toggled?: boolean

  capitalize?: boolean
}

/**
 * Primary UI component for user interaction
 */
const ButtonNav = forwardRef(
  (
    {
      icon,
      toggled,
      children,
      capitalize = false,
      ...props
    }: ButtonNavProps & HTMLAttributes<HTMLDivElement>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <StyledButtonNav
        capitalize={capitalize}
        toggled={toggled}
        {...{ ref, ...props }}
      >
        {icon}
        <span>{children}</span>
      </StyledButtonNav>
    )
  }
)

export default ButtonNav
