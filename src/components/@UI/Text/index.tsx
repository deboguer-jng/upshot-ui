import React from 'react'
import { Text as ThemeUIText, TextProps } from 'theme-ui'

/**
 * Provides a Text variant.
 */
export default function Text({ ...props }: TextProps) {
  return <ThemeUIText {...props} />
}
