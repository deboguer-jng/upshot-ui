import React from 'react'
import { useThemeUI } from 'theme-ui'
import { MainButton } from './Styled'

interface ButtonProps {
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
  size?: 'small' | 'medium' | 'large'

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
  backgroundColor,
  label,
  width,
  ...props
}: ButtonProps) => {
  const context = useThemeUI()

  const getBackgroundColor = () => {
    switch (type) {
      case 'primary':
        if (status === 'default')
          return context.theme.colors?.primary?.toString()
        else return context.theme.colors?.background?.toString()
    }
  }

  const getColor = () => {
    switch (status) {
      case 'default':
        return context.theme.colors?.text?.toString()
      case 'active':
        return context.theme.colors?.primary?.toString()
    }
  }

  const getBorderColor = () => {
    switch (status) {
      case 'active':
        if (type === 'primary') return context.theme.colors?.primary?.toString()
        else return 'transparent'
      default:
        return 'transparent'
    }
  }

  const getHeight = () => {
    switch (size) {
      case 'medium':
        return 30
    }
  }

  const getWidth = () => {
    if (width) return width
    return 85
  }

  return (
    <MainButton
      background={getBackgroundColor()}
      color={getColor()}
      border={getBorderColor()}
      height={getHeight()}
      width={getWidth()}
      color1={context.theme.colors?.primary?.toString()}
      color2={context.theme.colors?.text?.toString()}
      {...props}
    >
      {label}
    </MainButton>
  )
}
