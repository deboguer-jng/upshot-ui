import React, { forwardRef } from 'react'
import { Label as ThemeUILabel } from '@theme-ui/components'

export interface LabelProps {
  /**
   * The text to be displayed on the label.
   */
  children?: string,
  /**
   * Defines the style of the label.
   * Defaults to basic.
   */
  style?: 'basic' | 'currency'
  /**
   * Defines the size of the label.
   * Defaults to small.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /**
   * If the label is for a price, this symbol will be its prefix.
   * Defaults to ether.
   */
  currencySymbol?: string
}

/**
 * 
 * Provides a basic label or a currency label of various sizes.
 */
const Label = (
  {
    children,
    style = 'basic',
    size = 'sm',
    currencySymbol = 'Ξ'
  }: LabelProps,
  ref: React.RefObject<HTMLDivElement>) => {
    return (
      <>
        { 
          style === 'currency' &&
            <ThemeUILabel variant={`${size}CurrencySymbol`}>{currencySymbol}</ThemeUILabel>
        }
        {/* Each combination of style and size is a unique variant of the theme */}
        <ThemeUILabel variant={style + size[0].toUpperCase() + size[1]}>
          { children }
        </ThemeUILabel>
      </>
    )
}

export default forwardRef(Label)
