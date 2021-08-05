import React from 'react'
import { PanelBase } from './Styled'

interface PanelProps {
  /**
   * Render the darker Panel variant.
   */
  isDark?: boolean
}

/**
 * Icon component for SVG assets.
 */
export default function Icon({
  isDark,
  ...props
}: PanelProps & React.HTMLAttributes<HTMLDivElement>) {
  return <PanelBase {...props} />
}
