import React from 'react'
import { useTheme } from '@emotion/react'
import { PrimaryButton, PlainButton, DisclosureButton } from './Styled'
import Icon from '../Icon'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'plain'
    | 'disclosure'
    | 'accent'
    | 'large'
  /**
   * What background color to use
   */
  backgroundColor?: string
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
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type = 'primary',
  size = 'medium',
  status = 'default',
  icon,
  backgroundColor,
  label,
  width,
  ...props
}: ButtonProps) => {
  const theme = useTheme()
  console.log({ size })

  if (type === 'disclosure') {
    return (
      <DisclosureButton
        background={
          status === 'disabled'
            ? theme.colors['grey-700'].toString()
            : theme.colors['grey-800'].toString()
        }
        color={
          status === 'disabled'
            ? theme.colors.black.toString()
            : theme.colors['grey-300'].toString()
        }
        width={width || undefined}
        active={status === 'active'}
        disabled={status === 'disabled'}
        height={size === 'medium' ? 30 : 46}
        size={size === 'medium'}
        {...props}
      >
        <span>{label}</span>
        <Icon icon="arrowDropdown" />
      </DisclosureButton>
    )
  }

  if (type === 'plain') {
    return (
      <PlainButton
        color={
          status === 'disabled'
            ? theme.colors['grey-500'].toString()
            : theme.colors.primary.toString()
        }
        clickedColor={
          status === 'disabled'
            ? theme.colors['grey-500'].toString()
            : theme.colors.darkPrimary.toString()
        }
        height={30}
        disabled={status === 'disabled'}
        {...props}
      >
        <span>{label}</span>
        {icon && icon}
      </PlainButton>
    )
  }

  let color1
  let color2
  let color3

  if (type === 'primary') {
    color1 = theme.colors.primary.toString()
    color2 = theme.colors.black.toString()
    color3 = theme.colors['grey-700'].toString()
  } else if (type === 'secondary') {
    color1 = theme.colors['grey-800'].toString()
    color2 = theme.colors['grey-300'].toString()
    color3 = theme.colors['grey-700'].toString()
  } else if (type === 'tertiary') {
    color1 = theme.colors['grey-800'].toString()
    color2 = theme.colors['grey-200'].toString()
    color3 = theme.colors['grey-700'].toString()

    return (
      <PrimaryButton
        background={
          status === 'default'
            ? color1
            : status === 'disabled'
            ? color3
            : color2
        }
        color={
          status === 'default'
            ? color2
            : status === 'disabled'
            ? theme.colors.black.toString()
            : color1
        }
        height={size === 'medium' ? 30 : 46}
        size={size === 'medium'}
        width={width || undefined}
        hoverBackgroundColor={status === 'default' ? color1 : color2}
        hoverColor={status === 'default' ? color2 : color1}
        activeBackgroundColor={status === 'active' ? color1 : color2}
        activeColor={status === 'active' ? color2 : color1}
        disabled={status === 'disabled'}
        minimized={!!label}
        {...props}
      >
        {icon && icon}
        <span>{label}</span>
      </PrimaryButton>
    )
  }

  return (
    <PrimaryButton
      background={
        status === 'default' ? color1 : status === 'disabled' ? color3 : color2
      }
      color={
        status === 'default'
          ? color2
          : status === 'disabled'
          ? theme.colors.black.toString()
          : color1
      }
      border={status === 'disabled' ? color3 : color1}
      height={size === 'medium' ? 30 : 46}
      size={size === 'medium'}
      width={width || undefined}
      hoverBackgroundColor={status === 'default' ? color2 : color1}
      hoverColor={status === 'default' ? color1 : color2}
      activeBackgroundColor={status === 'active' ? color2 : color1}
      activeColor={status === 'active' ? color1 : color2}
      disabled={status === 'disabled'}
      minimized={!!label}
      {...props}
    >
      {icon && icon}
      <span>{label}</span>
    </PrimaryButton>
  )
}
