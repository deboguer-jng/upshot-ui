import React, { FormHTMLAttributes } from 'react'
import { Label } from '@theme-ui/components'
import forms from '../../themes/UpshotUI/forms'

export interface LabelBasicProps {
  /**
   * The text to be displayed on the label
   */
  text?: string,
  /**
   * Defines the size and style of the label. Defaults to basicSmall.
   */
  variant?: keyof typeof forms.label
}

/**
 * 
 * Provides a basic label.
 */
export default function LabelBasic({
  text,
  variant
}: LabelBasicProps) {
  return (
    <Label variant={variant}>
      { text }
    </Label>
  )
}