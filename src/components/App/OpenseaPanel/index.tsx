import React, { forwardRef } from 'react'

import Panel from '../../@UI/Panel'
import { PanelProps } from '../../@UI/Panel'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import { ButtonProps, Link } from 'theme-ui'
import colors from '../../../themes/UpshotUI/colors'
import { StyledPanel, StyledButton, StyledText, StyledBox, StyledIcon } from './Styled'



export interface BuyButtonProps extends ButtonProps {
  /**
   * Button URL
   */
   url?: string
}

const BuyButton = forwardRef(
  (
    { url, ...props }: BuyButtonProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <Link href={url} target='_blank'>
      <StyledButton variant="secondary" size="md" capitalize={true} {...{ ref, ...props }}>
        <StyledIcon
          icon="openSeaBlock"
          color="white"
          size={16}
        />
        <StyledText color="white">
          Buy on Opensea
        </StyledText>
        
      </StyledButton>
    </Link>
  )
)


export interface OpenseaPanelProps extends PanelProps {
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
  appraisalPriceETH: number
  /**
   * Opensea URL
   */
  openseaUrl: string
}

/**
 * Provides wide and popup Opensea panels.
 */
const OpenseaPanel = forwardRef(
  (
    {
      variant = 'wide',
      listPriceETH,
      listPriceUSD,
      appraisalPriceETH,
      openseaUrl,
      ...props
    }: OpenseaPanelProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {

    let isUnderPriced
    if (listPriceETH <= appraisalPriceETH) {
      isUnderPriced = true
    } else {
      isUnderPriced = false
    }

    const textColor = isUnderPriced ? 'green' : 'red' as keyof typeof colors
    const title = isUnderPriced ? 'Underpriced' : 'Overpriced'
    const belowOrAbove = isUnderPriced ? 'below' : 'above'
    const percentage = (listPriceETH / appraisalPriceETH) * 100

    return (
      <StyledPanel $variant={variant} {...props}>
        {variant === 'wide' && (<BuyButton url={openseaUrl} />)}
        
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <Box>
            <StyledIcon
              icon="upshot"
              color={textColor}
              size={16}
            />
            <StyledText color={textColor} variant="large">
              {title}
            </StyledText>
          </Box>
          

          <StyledBox>
            <Text color="grey-500">
              { variant === 'wide' && (
                'Listed'
              )}
              { variant === 'popup' && (
                'This NFT is listed'
              )}
            </Text>
            &nbsp; { variant === 'popup' && (
              <br />
            )}
            <Text color={textColor}>
              {percentage}% {belowOrAbove} appraisal price
            </Text>
            &nbsp; { variant === 'popup' && (
              <br />
            )}
            <Text color="grey-500">
              at
            </Text>
            &nbsp;
            <Text color="grey-400">
              Ξ{listPriceETH} {listPriceUSD > 0 && ('($' + listPriceUSD + ')')}
            </Text>
          </StyledBox>
          {variant === 'popup' && (<BuyButton url={openseaUrl} sx={{ width: '100%' }} />)}
        </Flex>
      </StyledPanel>
    )
  }
)

export default OpenseaPanel
