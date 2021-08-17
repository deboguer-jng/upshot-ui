import React from 'react'
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
    /**
   * If the label is for currency, this is the symbol it will use as a prefix.
   * Defaults to ether.
   */
  currencySymbol?: string
}

/**
 * 
 * Provides a basic label or a currency label of various sizes.
 */
export default function Label({
  text,
  variant,
  currencySymbol = 'Ξ'
}: LabelProps) {
  return (
    <>
      { 
        (variant as string).includes('currency') &&
          <ThemeUILabel variant={`${variant}CurrencySymbol`}>{currencySymbol}</ThemeUILabel>
      }
      <ThemeUILabel variant={variant}>
        { text }
      </ThemeUILabel>
    </>
  )
}
