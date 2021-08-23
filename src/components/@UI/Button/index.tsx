import React, { ReactNode, HTMLAttributes, forwardRef } from 'react'
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

  icon?: ReactNode

  width?: number

  children: ReactNode
}

/**
 * Primary UI component for user interaction
 */
const Button = (
  {
    type = 'primary',
    size = 'md',
    icon,
    width,
    children,
    ...props
  }: ButtonProps & HTMLAttributes<HTMLButtonElement>,
  ref: React.RefObject<HTMLButtonElement>
) => {
  if (type === 'plain') {
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
      $type={type}
      $size={size}
      width={width || undefined}
      minimized={!children}
      {...{ ref, ...props }}
    >
      {icon}
      <span>{children}</span>
    </PrimaryButton>
  )
}

export default forwardRef(Button)
