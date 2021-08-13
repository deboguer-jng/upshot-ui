import React, { ReactNode, Children } from 'react'
import { PrimaryButton, PlainButton } from './Styled'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: 'primary' | 'secondary' | 'tertiary' | 'plain'
  /**
   * How large should the button be?
   */
  size?: 'medium' | 'large'

  status: 'active' | 'default'

  icon: ReactNode

  width?: number
  /**
   * Button contents
   */
  label: string
  children: ReactNode
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  size = 'medium',
  status = 'default',
  icon,
  width,
  children,
  ...props
}: ButtonProps) => {
  if (type === 'plain') {
    return (
      <PlainButton $size={size} {...props}>
        <>
          <span>{children}</span>
          {icon && icon}
        </>
      </PlainButton>
    )
  }

  return (
    <PrimaryButton
      $type={type}
      $size={size}
      $status={status}
      width={width || undefined}
      minimized={!children}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </PrimaryButton>
  )
}
