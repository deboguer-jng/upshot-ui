import React, { forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import Box from '../../Layout/Box'
import Flex from '../../Layout/Flex'
import Icon from '../../@UI/Icon'
import Label from '../../@UI/Label'
import { Text } from 'theme-ui'
import { IconBox, StyledIconButton, StyledTitle, StyledH2, StyledChangeDiv } from './Styled'
import { padding } from 'polished'

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 
   */
  variant: 'alone' | 'multi'
  /**
   * 
   */
  title: string
  /**
   * 
   */
  price: string
  /**
   * 
   */
  change: string
  /**
   * 
   */
  titleColor?: keyof typeof Colors
}

/**
 *
 * Provides a basic label or a currency label of various sizes.
 */
const ChartLabel = forwardRef(
  (
    {
      variant,
      title,
      price,
      change,
      titleColor = ( variant === 'multi' ? 'primary' : 'white' ),
      ...props
    }: LabelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Flex {...{ ref, ...props }}>
        {variant === 'multi' && (
          <IconBox $color={titleColor}>
            <StyledIconButton
              type="button"
              onClick={() => console.log('close click')}
            >
              <Icon
                size={12}
                color={titleColor}
                icon='x'
              />
            </StyledIconButton> 
          </IconBox>
        )}
        <Box>
          <StyledTitle $color={titleColor}>
            { variant == 'multi' ? title+' ' : '' }
            price:
          </StyledTitle>
          <StyledH2 $variant={variant}>
            <Label variant='currency' currencySymbol='$' size="md">
              {price}
            </Label>
          </StyledH2>
          <StyledChangeDiv $variant={variant}>
            {change}
          </StyledChangeDiv>

        </Box>
      </Flex>
    )
  }
)

export default ChartLabel
