import React, { forwardRef } from 'react'
import { NavbarWrapper, NavbarItem } from './Styled'
import Icon from '../Icon'

export interface NavbarInterface {}

const Navbar = forwardRef(
  ({ ...props }: NavbarInterface, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <>
        <NavbarWrapper>
          <NavbarItem>
            <Icon icon="upshot" />
          </NavbarItem>
        </NavbarWrapper>
      </>
    )
  }
)

export default Navbar
