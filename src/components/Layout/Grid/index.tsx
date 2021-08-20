import React from 'react'
import { Grid as ThemeUIGrid, GridProps } from 'theme-ui'

/**
 * Provides a Grid component.
 */
export default function Grid({ ...props }: GridProps) {
  return <ThemeUIGrid {...props} />
}
