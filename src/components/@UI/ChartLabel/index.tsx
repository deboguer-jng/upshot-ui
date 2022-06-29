import React, { forwardRef } from 'react'
import Colors from '../../../themes/UpshotUI/colors'
import Icon from '../../@UI/Icon'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import Text from '../../@UI/Text'
import IconButton from '../../@UI/IconButton'
import Link from '../../@UI/Link'
import {
  StyledTitle,
  StyledChangeDiv,
  InlineLabel,
  RelativeFlex,
  StyledBox,
} from './Styled'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import { formatNumber } from '../../../utils/number'

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
   * Link component.
   */
  linkComponent?: React.FunctionComponent<any>
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
      linkComponent,
      onClose,
      maxWidth,
      ...props
    }: LabelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    return (
      <RelativeFlex
        {...{ ref, ...props }}
        sx={{
          transition: 'default',
          opacity: isDim ? 0.5 : 1,
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
          <Link href={url} color={titleColor} component={linkComponent}>
            <StyledTitle>{title}</StyledTitle>
          </Link>
          <Flex style={{ whiteSpace: 'nowrap' }}>
            <Text
              variant="h1Primary"
              sx={{ fontWeight: 'normal', lineHeight: 1.1, fontSize: [6, 7] }}
            >
              {currency_1}
              {formatNumber(price_1, { kmbUnits: true, decimals: 2 })}
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
                {formatNumber(price_2, { kmbUnits: true, decimals: 2 })}
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
        </StyledBox>
      </RelativeFlex>
    )
  }
)

export default ChartLabel
