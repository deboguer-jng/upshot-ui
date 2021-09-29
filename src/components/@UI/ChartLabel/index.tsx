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
  price_1: number
  /**
   * Currency symbol (default: Ξ)
   */
  currency_1?: string
  /**
   * Smaller price tag shown in another currency defined below
   */
  price_2?: number
  /**
   * Currency symbol (default: $)
   */
  currency_2?: string
  /**
   * Historical price change (eg. +20.47%)
   */
  change?: string
  /**
   * Timestamp (shown only when varian == 'alone')
   */
  timestamp?: number
  /**
   * All time low price (eg. 4.34)
   */
  atl?: number
  /**
   * All time high price (eg. 4.34)
   */
  ath?: number
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
      titleColor = variant === 'multi' ? 'primary' : 'white',
      price_1,
      currency_1 = 'Ξ',
      price_2 = null,
      currency_2 = '$',
      change,
      timestamp,
      atl,
      ath,
      onClose,
      ...props
    }: LabelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    return (
      <RelativeFlex
        {...{ ref, ...props }}
        $variant={variant}
        $isMobile={+isMobile}
      >
        {variant === 'multi' && (
          <IconBox $color={titleColor} $isMobile={+isMobile}>
            <StyledIconButton
              type="button"
              onClick={onClose}
              $isMobile={+isMobile}
            >
              <Icon size={12} color={titleColor} icon="x" />
            </StyledIconButton>
          </IconBox>
        )}
        <StyledBox $variant={variant}>
          <StyledTitle $color={titleColor}>
            {variant == 'multi' ? title + ' ' : ''}
          </StyledTitle>
          <StyledH1 $variant={variant}>
            <Label
              variant="currency"
              currencySymbol={currency_1}
              size={isMobile ? 'md' : 'lg'}
            >
              {price_1.toString()}
            </Label>
          </StyledH1>
          <StyledChangeDiv $variant={variant}>
            {price_2 !== null && (
              <InlineLabel
                color="primary"
                variant="currency"
                currencySymbol={currency_2}
                size={isMobile ? 'xs' : 'sm'}
              >
                {price_2.toString()}
              </InlineLabel>
            )}
            {change && `(${change})`}
          </StyledChangeDiv>

          {!!timestamp && (
            <StyledDateTime $variant={variant}>
              {new Date(timestamp).toLocaleString()}
            </StyledDateTime>
          )}

          <Box>
            <StyledRed>ATL: Ξ{atl}</StyledRed>
            <StyledBlue>ATH: Ξ{ath}</StyledBlue>
          </Box>
        </StyledBox>
      </RelativeFlex>
    )
  }
)

export default ChartLabel
