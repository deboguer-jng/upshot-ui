import React from 'react'
import { Box as ThemeUIBox, BoxProps } from 'theme-ui'

/**
 * Provides a Box component.
 */
export default function Box({ ...props }: BoxProps) {
  return <ThemeUIBox {...props} />
}
