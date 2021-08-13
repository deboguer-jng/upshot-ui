import React from 'react'
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

  status: 'disabled' | 'active' | 'default'

  icon: string

  width?: number
  /**
   * Button contents
   */
  label: string
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  size = 'medium',
  status = 'default',
  icon,
  label,
  width,
  ...props
}: ButtonProps) => {
  if (type === 'plain') {
    return (
      <PlainButton
        $type={type}
        $status={status}
        $size={size}
        disabled={status === 'disabled'}
        {...props}
      >
        <>
          <span>{label}</span>
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
      disabled={status === 'disabled'}
      minimized={!label}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </PrimaryButton>
  )
}
