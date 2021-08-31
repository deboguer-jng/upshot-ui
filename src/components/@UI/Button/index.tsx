import React, { ReactNode, HTMLAttributes, forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import { PrimaryButton, PlainButton } from './Styled'

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

  color?: keyof typeof Colors
}

/**
 * Primary UI component for user interaction
 */
const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      color,
      icon,
      width,
      children,
      ...props
    }: ButtonProps & HTMLAttributes<HTMLButtonElement>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    if (variant === 'plain') {
      return (
        <PlainButton $size={size} {...{ ref, ...props }}>
          <>
            <span>{children}</span>
            {icon}
          </>
        </PlainButton>
      )
    }

    return (
      <PrimaryButton
        $type={variant}
        $size={size}
        $color={color}
        width={width || undefined}
        minimized={!children}
        {...{ ref, ...props }}
      >
        {icon}
        <span>{children}</span>
      </PrimaryButton>
    )
  }
)

export default Button
