import React, { ReactNode, HTMLAttributes, forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import { PrimaryButton, PlainButton } from './Styled'
import { useState } from '@storybook/addons'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'plain'
  /**
   * How large should the button be?
   */
  size?: 'md' | 'lg'

  icon?: ReactNode

  width?: number

  children?: ReactNode

  toggled?: boolean

  capitalize?: boolean
}

/**
 * Primary UI component for user interaction
 */
const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      width,
      toggled,
      children,
      capitalize = false,
      ...props
    }: ButtonProps & HTMLAttributes<HTMLButtonElement>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    if (variant === 'plain') {
      return (
        <PlainButton capitalize={capitalize} $size={size} {...{ ref, ...props }}>
          <>
            <span>{children}</span>
            {icon}
          </>
        </PlainButton>
      )
    }

    return (
      <PrimaryButton
        capitalize={capitalize}
        $type={variant}
        $size={size}
        width={width || undefined}
        minimized={!children}
        toggled={toggled}
        {...{ ref, ...props }}
      >
        {icon}
        <span>{children}</span>
      </PrimaryButton>
    )
  }
)

export default Button
