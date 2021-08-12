import React, { FormHTMLAttributes } from 'react'
import { Label as ThemeUILabel } from '@theme-ui/components'
import forms from '../../themes/UpshotUI/forms'


export interface LabelProps {
  /**
   * The text to be displayed on the label.
   */
  text?: string,
  /**
   * Defines the size and style of the label.
   */
  variant?: keyof typeof forms.label
}

/**
 * 
 * Provides a basic label or a currency label of various sizes.
 */
export default function Label({
  text,
  variant
}: LabelProps) {
  return (
    <>
      { 
        (variant as string).includes('currency') &&
          <ThemeUILabel variant={`${variant}DollarSign`}>$</ThemeUILabel>
      }
      <ThemeUILabel variant={variant}>
        { text }
      </ThemeUILabel>
    </>
  )
}
