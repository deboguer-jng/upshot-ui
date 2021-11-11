import React, { forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import Icon from '../../@UI/Icon'
import Label from '../../@UI/Label'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import Text from '../../@UI/Text'
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
  RelativeFlex,
  StyledLink,
} from './Styled'
import { useBreakpointIndex } from '@theme-ui/match-media'

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Item name (shown only when variant === 'multi').
   * " price:" string automatically added to the end of the string.
   */
  title: string
  /**
   * Color of the title line
   */
  url: string
  /**
   * Title link
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
  atl?: string
  /**
   * All time high price (eg. 4.34)
   */
  ath?: string
  /**
   * All time high price (eg. Ξ4.34)
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>
  index?: number
}

/**
 *
 * Provides a basic label or a currency label of various sizes.
 */
const ChartLabel = forwardRef(
  (
    {
      title,
      url,
      titleColor = 'white',
      price_1,
      currency_1 = 'Ξ',
      price_2 = null,
      currency_2 = '$',
      change,
      timestamp,
      atl,
      ath,
      onClose,
      index,
      ...props
    }: LabelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    function nFormatter(num: number, digits = 2) {
      const lookup = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'k' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'B' },
      ]
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
      const item = lookup
        .slice()
        .reverse()
        .find((item) => num >= item.value)
      return item
        ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
        : '0'
    }

    return (
      <RelativeFlex {...{ ref, ...props }} $isMobile={isMobile} $index={index}>
        <IconBox $color={titleColor} $isMobile={isMobile}>
          <StyledIconButton
            type="button"
            onClick={onClose}
            $color={titleColor}
            $isMobile={isMobile}
          >
            <Icon size={12} color={titleColor} icon="x" />
          </StyledIconButton>
        </IconBox>
        <Box>
          <StyledLink href={url}>
            <StyledTitle $color={titleColor}>{title}</StyledTitle>
          </StyledLink>
          <Flex>
            <Text
              variant="small"
              color="grey-600"
              style={{
                lineHeight: 1,
                marginRight: 1,
              }}
            >
              {currency_1}
            </Text>

            <Text
              variant="h1Primary"
              style={{ fontWeight: 'normal', lineHeight: 1 }}
            >
              {nFormatter(price_1)}
            </Text>
          </Flex>
          <StyledChangeDiv>
            {price_2 !== null && (
              <InlineLabel
                color="primary"
                variant="currency"
                currencySymbol={currency_2}
                size={isMobile ? 'xs' : 'sm'}
              >
                {nFormatter(price_2)}
              </InlineLabel>
            )}
            {change && `(${change})`}
          </StyledChangeDiv>

          <Box>
            <StyledRed>ATL: {atl}</StyledRed>
            <StyledBlue>ATH: {ath}</StyledBlue>
          </Box>
        </Box>
      </RelativeFlex>
    )
  }
)

export default ChartLabel
