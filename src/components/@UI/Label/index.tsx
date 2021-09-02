import React, { forwardRef } from 'react'
import { Label as ThemeUILabel } from '@theme-ui/components'

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The text to be displayed on the label.
   */
  children?: string
  /**
   * Defines the variant of the label.
   */
  variant?: 'basic' | 'currency'
  /**
   * Defines the size of the label.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /**
   * If the label is for a price, this symbol will be its prefix.
   */
  currencySymbol?: string
}

/**
 *
 * Provides a basic label or a currency label of various sizes.
 */
const Label = forwardRef(
  (
    {
      variant = 'basic',
      size = 'sm',
      currencySymbol = 'Ξ',
      children,
      ...props
    }: LabelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div {...{ ref, ...props }}>
        {variant === 'currency' && (
          <ThemeUILabel variant={`${size}CurrencySymbol`}>
            {currencySymbol}
          </ThemeUILabel>
        )}
        {/* Each combination of style and size is a unique variant of the theme */}
        <ThemeUILabel variant={variant + size[0].toUpperCase() + size[1]}>
          {children}
        </ThemeUILabel>
      </div>
    )
  }
)

export default Label
