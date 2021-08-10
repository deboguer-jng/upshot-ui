import React from 'react'
import {
  IconButton as ThemeUIIconButton,
  IconButtonProps as ThemeUIIconButtonProps,
} from 'theme-ui'

export interface IconButtonProps extends ThemeUIIconButtonProps {}

/**
 * Provides a rounded icon button.
 */
export default function IconButton({ ...props }: IconButtonProps) {
  return <ThemeUIIconButton {...props} />
}
