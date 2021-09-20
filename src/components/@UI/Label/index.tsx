import React, { forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import { StyledThemeUILabel } from './Styled'

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
  /**
   * Color of the label
   */
  color?: keyof typeof Colors
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
      color = 'grey-300',
      children,
      ...props
    }: LabelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div {...{ ref, ...props }}>
        {variant === 'currency' && (
          <StyledThemeUILabel variant={`${size}CurrencySymbol`} $color={color}>
            {currencySymbol}
          </StyledThemeUILabel>
        )}
        {/* Each combination of style and size is a unique variant of the theme */}
        <StyledThemeUILabel variant={variant + size[0].toUpperCase() + size[1]} $color={color}>
          {children}
        </StyledThemeUILabel>
      </div>
    )
  }
)

export default Label
