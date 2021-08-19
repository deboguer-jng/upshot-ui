import React from 'react'
import { Flex as ThemeUIFlex, FlexProps } from 'theme-ui'

/**
 * Provides a Flex box component.
 */
export default function Flex({ ...props }: FlexProps) {
  return <ThemeUIFlex {...props} />
}
