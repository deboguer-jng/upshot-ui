import React from 'react'
import { PanelBase } from './Styled'
import { BoxProps } from 'theme-ui'

export interface PanelProps extends BoxProps {
  /**
   * Inner variants use a darker color with a smaller
   * border radius.
   */
  inner?: boolean
}

/**
 * Provides a surface for UI elements.
 */
export default function Panel({ inner, ...props }: PanelProps) {
  return <PanelBase {...{ inner, ...props }} />
}
