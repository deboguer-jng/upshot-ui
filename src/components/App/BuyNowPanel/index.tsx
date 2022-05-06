import React, { forwardRef } from 'react'
import { ButtonProps } from 'theme-ui'

import Link from '../../@UI/Link'
import { PanelProps } from '../../@UI/Panel'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import colors from '../../../themes/UpshotUI/colors'
import {
  StyledPanel,
  StyledButton,
  StyledText,
  StyledBox,
  StyledIcon,
} from './Styled'
import { formatNumber } from '../../../utils/number'

export interface BuyButtonProps extends ButtonProps {
  /**
   * Button URL
   */
  marketplaceName?: string
  /**
   * Button URL
   */
  url?: string
  /**
   * Button width
   */
  width?: string
  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
}

const BuyButton = forwardRef(
  (
    {
      url,
      width = null,
      marketplaceName,
      linkComponent,
      ...props
    }: BuyButtonProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => (
    <Link href={url} target="_blank" component={linkComponent} {...{ ref }}>
      <StyledButton
        variant="secondary"
        size="md"
        capitalize={true}
        $width={width}
      >
        {marketplaceName === 'OpenSea' && (
          <StyledIcon icon="openSeaBlock" color="white" size={16} />
        )}
        <StyledText color="white">Buy on {marketplaceName}</StyledText>
      </StyledButton>
    </Link>
  )
)

export interface BuyNowPanelProps extends PanelProps {
  /**
   * Variant: wide or popup. Default: wide. The popup variant has 20% transparency and blurry backdrop.
   */
  variant?: 'wide' | 'popup'
  /**
   * List price in ETH
   */
  listPriceETH: number
  /**
   * List price in USD
   */
  listPriceUSD?: number
  /**
   * Appraisal price in ETH
   */
  listAppraisalPercentage?: number
  /**
   * Marketplace name
   */
  marketplaceName: string
  /**
   * Marketplace URL
   */
  marketplaceUrl: string
  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
}

/**
 * Provides wide and popup Opensea panels.
 */
const BuyNowPanel = forwardRef(
  (
    {
      variant = 'wide',
      listPriceETH,
      listPriceUSD,
      listAppraisalPercentage,
      marketplaceName,
      marketplaceUrl,
      linkComponent,
      ...props
    }: BuyNowPanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    let isUnderPriced
    if (listAppraisalPercentage && listAppraisalPercentage > 0) {
      isUnderPriced = true
    } else {
      isUnderPriced = false
    }

    const textColor = isUnderPriced
      ? ('green' as keyof typeof colors)
      : !listAppraisalPercentage
      ? ('white' as keyof typeof colors)
      : ('red' as keyof typeof colors)
    const title = isUnderPriced ? 'Underpriced' : !listAppraisalPercentage ? 'For Sale' : 'Overpriced'
    const belowOrAbove = isUnderPriced ? 'below' : 'above'
    let buttonPosition
    if (variant === 'wide' && isMobile === false) {
      buttonPosition = 'right'
    } else {
      buttonPosition = 'bottom'
    }

    return (
      <StyledPanel $variant={variant} {...props}>
        {buttonPosition === 'right' && (
          <BuyButton
            url={marketplaceUrl}
            {...{ marketplaceName, linkComponent }}
          />
        )}

        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <Box>
            <StyledIcon icon="upshot" color={textColor} size={16} />
            <StyledText color={textColor} variant="large">
              {title}
            </StyledText>
          </Box>

          <StyledBox>
            <Text color="grey-500">
              {variant === 'wide' && 'This NFT is listed'}
              {variant === 'popup' && 'This NFT is listed'}
            </Text>
            &nbsp;
            <Text color="grey-500">at</Text>
            &nbsp;
            <Text color="grey-400">
              Ξ{listPriceETH}{' '}
              {listPriceUSD > 0 && '($' + formatNumber(listPriceUSD) + ')'}
            </Text>
            {listAppraisalPercentage && (
              <>
                <Text color="grey-400">
                  :
                </Text>
                &nbsp;
                <Text color={textColor}>
                  {Math.abs(listAppraisalPercentage).toFixed(2)}% {belowOrAbove}{' '}
                  appraisal price
                </Text>
              </>
            )}
            &nbsp; {variant === 'popup' && <br />}
          </StyledBox>
          {buttonPosition === 'bottom' && (
            <BuyButton
              url={marketplaceUrl}
              marketplaceName={marketplaceName}
              width="100%"
            />
          )}
        </Flex>
      </StyledPanel>
    )
  }
)

export default BuyNowPanel
