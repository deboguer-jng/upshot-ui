import React from 'react'
import { IconButton as ThemeUIButton, IconButtonProps } from 'theme-ui'

/**
 * Provides a rounded icon button.
 */
export default function InputButton({
  variant = 'iconButtons.primary',
  ...props
}: IconButtonProps) {
  return <ThemeUIButton {...{ variant, ...props }} />
}
