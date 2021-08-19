import React, { ReactNode, HTMLAttributes } from 'react'
import { PrimaryButton, PlainButton } from './Styled'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: 'primary' | 'secondary' | 'tertiary' | 'plain'
  /**
   * How large should the button be?
   */
  size?: 'md' | 'lg'

  icon: ReactNode

  width?: number

  children: ReactNode
}

/**
 * Primary UI component for user interaction
 */
export default function Button({
  type = 'primary',
  size = 'md',
  icon,
  width,
  children,
  ...props
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) {
  if (type === 'plain') {
    return (
      <PlainButton $size={size} {...props}>
        <>
          <span>{children}</span>
          {icon}
        </>
      </PlainButton>
    )
  }

  return (
    <PrimaryButton
      $type={type}
      $size={size}
      width={width || undefined}
      minimized={!children}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </PrimaryButton>
  )
}
