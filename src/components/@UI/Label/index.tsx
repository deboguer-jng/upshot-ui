import React, { forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import { StyledThemeUILabel } from './Styled'
import { Box, BoxProps } from 'theme-ui'

export interface LabelProps extends BoxProps {
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
   * Puts any additional info (eg. confidence score) into a basic label at the top-right of the element.
   */
  topRightLabel?: string
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
      topRightLabel,
      color = 'grey-300',
      children,
      ...props
    }: LabelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Box
        {...{ ref, ...props }}
        sx={{
          ...{ flexShrink: 0, whiteSpace: 'nowrap' },
          ...(props?.sx ?? {}),
        }}
      >
        {/* Each combination of style and size is a unique variant of the theme */}
        <StyledThemeUILabel
          variant={variant + size[0].toUpperCase() + size[1]}
          $color={color}
        >
          {variant === 'currency' && currencySymbol}
          {children}
        </StyledThemeUILabel>

        {topRightLabel && (
          <Label
            variant="basic"
            size={size === 'xs' || size === 'sm' || size === 'md' ? 'sm' : 'md'} // If parent label is XS or SM then topRightLabel is sm. If it is larger, it becomes md.
            style={{ display: 'inline-block', verticalAlign: 'top' }} // It crashes when you try to style in Styled.tsx. Recursion is funny.
            color={color}
          >
            {topRightLabel}
          </Label>
        )}
      </Box>
    )
  }
)

export default Label
