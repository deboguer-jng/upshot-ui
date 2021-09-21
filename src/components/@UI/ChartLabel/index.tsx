import React, { forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import Icon from '../../@UI/Icon'
import Label from '../../@UI/Label'
import Box from '../../Layout/Box'
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
  StyledBox,
  RelativeFlex,
} from './Styled'
import { useBreakpointIndex } from '@theme-ui/match-media'

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
  change?: string
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
  /**
   * All time high price (eg. Ξ4.34)
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>
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
      onClose,
      ...props
    }: LabelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    return (
      <RelativeFlex {...{ ref, ...props }} $variant={variant} $isMobile={+isMobile}>
        {variant === 'multi' && (
          <IconBox $color={titleColor}>
            <StyledIconButton
              type="button"
              onClick={onClose}
            >
              <Icon
                size={12}
                color={titleColor}
                icon='x'
              />
            </StyledIconButton> 
          </IconBox>
        )}
        <StyledBox $variant={variant}>
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
            {change && `(${change})`}
          </StyledChangeDiv>

          <StyledDateTime $variant={variant}>
            {date}
          </StyledDateTime>
          <Box>
            <StyledRed>
              ATL: {atl}
            </StyledRed>
            <StyledBlue>
              ATH: {ath}
            </StyledBlue>
          </Box>
        </StyledBox>
      </RelativeFlex>
    )
  }
)

export default ChartLabel
