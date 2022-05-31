import { Flex, Box } from 'theme-ui'
import React, { forwardRef, useState } from 'react'
import {
  NFTCardBase,
  NFTCardImage,
  NFTCardDetails,
  StyledLink,
  DealBadge,
} from './Styled'
import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import BuyNowPanel from '../BuyNowPanel'
import Label from '../../@UI/Label'
import { imageOptimizer } from '../../../utils/imageOptimizer'
import { useTheme } from '../../../themes/UpshotUI'
import { PanelProps } from '../../@UI/Panel'
import { formatNumber } from '../../../utils/number'
import Spinner from '../../@UI/Spinner'

export interface NFTCardProps extends PanelProps {
  /**
   * NFT Avatar
   */
  avatarImage?: string
  /**
   * Image source
   */
  imageSrc?: string
  /**
   * Collection name
   */
  collection: string
  /**
   * Token ID
   */
  tokenId?: string
  /**
   * Asset name
   */
  name?: string
  /**
   * Appraisal Price in ETH
   */
  appraisalPriceETH?: string | null
  /**
   * Appraisal Price in USD
   */
  appraisalPriceUSD?: number | null
  /**
   * Is pixelated rendering
   */
  isPixelated?: boolean

  /**
   * List price in ETH
   */
  listPriceEth?: string

  /**
   * List price in USD
   */
  listPriceUSD?: number
  /**
   * Percent difference between appraisal and list price
   */
  listAppraisalPercentage?: number
  /**
   * Collection url.
   */
  collectionUrl?: string
  /**
   * NFT url
   */
  nftUrl?: string
}

/**
 * Renders an item inside a collection card container.
 */
const NFTCard = forwardRef(
  (
    {
      avatarImage,
      imageSrc,
      collection,
      tokenId,
      name,
      collectionUrl,
      nftUrl,
      listAppraisalPercentage,
      listPriceEth = null,
      listPriceUSD = null,
      appraisalPriceETH = null,
      appraisalPriceUSD = null,
      isPixelated = false,
      ...props
    }: NFTCardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [showPopup, setShowPopup] = useState(false)
    const [imgLoaded, setImgLoaded] = useState(false)
    const { theme } = useTheme()
    const optimizedSrc = imageOptimizer(imageSrc, { width: 512 }) ?? imageSrc
    const finalImage = isPixelated ? imageSrc : optimizedSrc
    const hoverUnderglow = appraisalPriceETH ? 'blue' : 'grey-600'

    let isUnderPriced
    if (listAppraisalPercentage && listAppraisalPercentage > 0) {
      isUnderPriced = true
    } else {
      isUnderPriced = false
    }

    const title = isUnderPriced ? 'UNDERPRICED' : 'OVERPRICED'

    return (
      <NFTCardBase $hoverUnderglow={hoverUnderglow} {...{ ref, ...props }}>
        {listAppraisalPercentage && (
          <DealBadge $percentDifference={listAppraisalPercentage}>
            <Text
              variant="xSmall"
              color="white"
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                fontWeight: 'bold',
                letterSpacing: '.05rem',
              }}
            >
              {Math.abs(listAppraisalPercentage).toFixed(2)}% {title}
            </Text>
          </DealBadge>
        )}
        <Box
          sx={{
            display: imgLoaded ? 'none' : 'grid',
            width: '100%',
            minHeight: 300,
            height: 300,
            placeContent: 'center',
          }}
        >
          <Spinner size="lg" />
        </Box>
        <NFTCardImage
          $isPixelated={isPixelated}
          src={finalImage}
          alt={`Featured image`}
          onLoad={() => setImgLoaded(true)}
          sx={{ display: imgLoaded ? 'block' : 'none' }}
        />
        <NFTCardDetails
          sx={{
            padding: 3,
            gap: 3,
            width: '100%',
          }}
          onMouseLeave={() => setShowPopup(false)}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              maxWidth: '66%',
              justifyContent: 'flex-end',
            }}
          >
            <Flex
              sx={{ gap: 2, alignItems: 'center', justifyContent: 'center' }}
            >
              <Avatar
                color="black"
                src={
                  imageOptimizer(avatarImage, {
                    width: parseInt(theme.images.avatar.sm.size),
                    height: parseInt(theme.images.avatar.sm.size),
                  }) ?? avatarImage
                }
                size="xs"
                sx={{ border: '2px solid black' }}
              />
              <Flex
                sx={{
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
                onMouseOver={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
              >
                <StyledLink href={collectionUrl}>
                  <Text
                    variant="xSmall"
                    color="grey-500"
                    sx={{
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {collection}
                  </Text>
                </StyledLink>
              </Flex>
            </Flex>

            {name && (
              <StyledLink href={nftUrl}>
                <Text
                  variant="large"
                  color="grey-300"
                  sx={{
                    fontSize: 2,
                    lineHeight: '1.2rem',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    marginTop: '2px',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                  }}
                >
                  {name}
                </Text>
              </StyledLink>
            )}
          </Flex>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              width: '100%',
              minHeight: 64,
              height: 64,
            }}
          >
            {listPriceEth != null && (
              <Flex
                sx={{
                  flexDirection: 'column',
                  minWidth: 'fit-content',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}
                onMouseOver={() => setShowPopup(true)}
              >
                <Text
                  color="grey-500"
                  variant="xSmall"
                  sx={{ fontWeight: 'bold' }}
                >
                  Price
                </Text>
                <Label
                  color="white"
                  currencySymbol="Ξ"
                  size="sm"
                  variant="currency"
                  style={{ lineHeight: 1 }}
                >
                  {formatNumber(listPriceEth, { fromWei: true, decimals: 2 })}
                </Label>
                {appraisalPriceETH != null && (
                  <Text
                    color="primary"
                    variant="small"
                    sx={{ fontWeight: 'bold', textAlign: 'right' }}
                  >
                    Appraisal:{' '}
                    {'Ξ' +
                      formatNumber(appraisalPriceETH, {
                        fromWei: true,
                        decimals: 2,
                      })}
                  </Text>
                )}
              </Flex>
            )}
            {listPriceEth == null && appraisalPriceETH != null && (
              <Flex
                sx={{
                  flexDirection: 'column',
                  minWidth: 'fit-content',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}
                onMouseOver={() => setShowPopup(true)}
              >
                {appraisalPriceETH != null && (
                  <Text
                    color="primary"
                    variant="small"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Appraisal:{' '}
                    {'Ξ' +
                      formatNumber(appraisalPriceETH, {
                        fromWei: true,
                        decimals: 2,
                      })}
                  </Text>
                )}
              </Flex>
            )}
          </Flex>
        </NFTCardDetails>
      </NFTCardBase>
    )
  }
)

export default NFTCard
