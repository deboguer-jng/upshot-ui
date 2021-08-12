import React from 'react'
import { IconButton as ThemeUIButton, IconButtonProps } from 'theme-ui'

/**
 * Provides a rounded icon button.
 */
export default function InputButton({
  variant = 'buttons.icon.primary',
  ...props
}: IconButtonProps) {
  return <ThemeUIButton {...{ variant, ...props }} />
}
