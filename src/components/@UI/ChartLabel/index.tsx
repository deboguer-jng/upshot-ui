import React, { forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import Icon from '../../@UI/Icon'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import Text from '../../@UI/Text'
import IconButton from '../../@UI/IconButton'
import {
  StyledTitle,
  StyledChangeDiv,
  StyledRed,
  StyledBlue,
  InlineLabel,
  RelativeFlex,
  StyledLink,
  StyledBox,
} from './Styled'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'

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
   * Timestamp
   */
  timestamp?: string
  /**
   * Historical price change (eg. +20.47%)
   */
  change?: string
  /**
   * All time low price (eg. 4.34)
   */
  atl?: string
  /**
   * All time high price (eg. 4.34)
   */
  ath?: string
  /**
   * Label dimming if hovering over a different data series.
   */
  isDim?: boolean
  /**
   * On close handler.
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>
  /**
   * OnClose event (X button)
   */
  maxWidth?: number
  /**
   * Max Label width
   */
}

/**
 *
 * Provides a basic label or a currency label of various sizes.
 */
const ChartLabel = forwardRef(
  (
    {
      titleColor = 'white',
      currency_1 = 'Ξ',
      price_2 = null,
      currency_2 = '$',
      isDim = false,
      title,
      url,
      price_1,
      timestamp,
      change,
      atl,
      ath,
      onClose,
      maxWidth,
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
      const item = lookup
        .slice()
        .reverse()
        .find((item) => num >= item.value)
      if (item) {
        return (num / item.value).toFixed(2) + item.symbol
      } else {
        if (num >= 0.01) {
          return Number(num.toFixed(digits)).toString()
        } else {
          return '<0.01'
        }
      } 
    }

    return (
      <RelativeFlex
        {...{ ref, ...props }}
        sx={{
          transition: 'default',
          opacity: Number(!isDim),
        }}
        $isMobile={isMobile}
        $maxWidth={maxWidth}
      >
        <IconButton
          type="button"
          onClick={onClose}
          color={titleColor}
          sx={{
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: titleColor,
            width: '12px',
            height: '12px',
            marginRight: '4px',
          }}
        >
          <Icon size={8} color={titleColor} icon="x" />
        </IconButton>
        <StyledBox $maxWidth={maxWidth}>
          <StyledLink href={url}>
            <StyledTitle $color={titleColor}>{title}</StyledTitle>
          </StyledLink>
          <Flex style={{ whiteSpace: 'nowrap' }}>
            <Text
              variant="h1Primary"
              sx={{ fontWeight: 'normal', lineHeight: 1.1, fontSize: [6, 7] }}
            >
              {currency_1}
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
                sx={{ '& label': { padding: 0 } }}
              >
                {nFormatter(price_2)}
              </InlineLabel>
            )}
            {change && `(${change})`}
          </StyledChangeDiv>
          <Box sx={{ minHeight: '1.5rem' }}>
            {!!timestamp && (
              <Text
                color="blue"
                variant="small"
                sx={{
                  display: 'block',
                  marginTop: '-2px',
                }}
              >
                {timestamp}
              </Text>
            )}
          </Box>
          {/* {ath !== '-' && atl !== '-' && (
            <Box sx={{ display: ['grid', 'block'] }}>
              <StyledRed sx={{ paddingTop: ['3px', '0px'] }}>
                ATL: {atl}
              </StyledRed>
              <StyledBlue
                sx={{
                  marginTop: ['-6px', '0px'],
                  paddingLeft: ['0px', '5px'],
                }}
              >
                ATH: {ath}
              </StyledBlue>
            </Box>
          )} */}
        </StyledBox>
      </RelativeFlex>
    )
  }
)

export default ChartLabel
