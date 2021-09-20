import React, { forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import Box from '../../Layout/Box'
import Flex from '../../Layout/Flex'
import Icon from '../../@UI/Icon'
import Label from '../../@UI/Label'
import {
  IconBox,
  StyledIconButton,
  StyledTitle,
  StyledH1,
  StyledDateTime,
  StyledChangeDiv,
  StyledRed,
  StyledBlue,
  InlineLabel,
 } from './Styled'

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional parameter switch between 'alone' or 'multi' layout. Default: 'alone'.
   */
  variant?: 'alone' | 'multi'
  /**
   * Item name (shown only when variant === 'multi').
   * " price:" string automatically added to the end of the string.
   */
  title: string
  /**
   * Color of the title line
   */
  titleColor?: keyof typeof Colors
  /**
   * Bigger price tag shown in a currency defined below (eg. 4,000)
   */
  price_1: string
  /**
   * Currency symbol (default: Ξ)
   */
  currency_1?: string
  /**
   * Smaller price tag shown in another currency defined below
   */
  price_2: string
  /**
   * Currency symbol (default: $)
   */
  currency_2?: string
  /**
   * Historical price change (eg. +20.47%)
   */
  change: string
  /**
   * Date (shown only when varian == 'alone')
   */
  date?: string
  /**
   * All time low price (eg. Ξ4.34)
   */
  atl: string
  /**
   * All time high price (eg. Ξ4.34)
   */
  ath: string
}

/**
 *
 * Provides a basic label or a currency label of various sizes.
 */
const ChartLabel = forwardRef(
  (
    {
      variant = 'alone',
      title,
      titleColor = ( variant === 'multi' ? 'primary' : 'white' ),
      price_1,
      currency_1 = 'Ξ',
      price_2,
      currency_2 = '$',
      change,
      date,
      atl,
      ath,
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
          <StyledH1 $variant={variant}>
            <Label variant='currency' currencySymbol={currency_1} size="lg">
              {price_1}
            </Label>
          </StyledH1>
          <StyledChangeDiv $variant={variant}>
            <InlineLabel color='primary' variant='currency' currencySymbol={currency_2} size="sm">
              {price_2}
            </InlineLabel>
            ({change})
          </StyledChangeDiv>

          {variant === 'alone' && (
            <StyledDateTime>
              {date}
            </StyledDateTime>
          )}
          <>
            <StyledRed>
              ATL: {atl}
            </StyledRed>
            <StyledBlue>
              ATH: {ath}
            </StyledBlue>
          </>
        </Box>
      </Flex>
    )
  }
)

export default ChartLabel
