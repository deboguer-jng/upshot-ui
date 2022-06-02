import { Flex, Box } from 'theme-ui'
import React, { forwardRef, useState } from 'react'
import { NFTCardBase, NFTCardImage, NFTCardDetails, DealBadge } from './Styled'
import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import Label from '../../@UI/Label'
import { imageOptimizer } from '../../../utils/imageOptimizer'
import { useTheme } from '../../../themes/UpshotUI'
import { PanelProps } from '../../@UI/Panel'
import { formatNumber } from '../../../utils/number'
import Spinner from '../../@UI/Spinner'
import Link from '../../@UI/Link'

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
  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
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
      linkComponent,
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
        <Link href={nftUrl} component={linkComponent} sx={{ width: '100%' }}>
          <NFTCardImage
            $isPixelated={isPixelated}
            src={finalImage}
            alt={`Featured image`}
            onLoad={() => setImgLoaded(true)}
            sx={{
              display: imgLoaded ? 'block' : 'none',
            }}
          />
        </Link>
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
              flexGrow: 1,
              justifyContent: 'flex-start',
            }}
          >
            <Flex
              sx={{
                gap: 2,
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}
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
                <Link
                  href={collectionUrl}
                  component={linkComponent}
                  sx={{
                    display: 'inline-block',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    width: '100%',
                  }}
                >
                  <Text variant="xSmall" color="grey-500">
                    {collection}
                  </Text>
                </Link>
              </Flex>
            </Flex>

            {name && (
              <Text color="grey-300" variant="large">
                <Link
                  component={linkComponent}
                  href={nftUrl}
                  variant="large"
                  sx={{
                    lineHeight: '1.2rem',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    marginTop: '2px',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    maxWidth: '75%',
                    width: '100%',
                    //@ts-ignore
                    whiteSpace: 'normal !important',
                  }}
                >
                  {name}
                </Link>
              </Text>
            )}
          </Flex>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
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
                  gap: 2,
                }}
                onMouseOver={() => setShowPopup(true)}
              >
                <Flex sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                  <Text
                    color="grey-500"
                    variant="xSmall"
                    sx={{
                      fontWeight: 'heading',
                      textAlign: 'right',
                    }}
                  >
                    Price
                  </Text>
                  <Text
                    color="grey-500"
                    variant="xSmall"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: 2,
                      textAlign: 'right',
                    }}
                  >
                    {formatNumber(listPriceEth, {
                      fromWei: true,
                      decimals: 2,
                      prefix: 'ETHER',
                    })}
                  </Text>
                </Flex>
                {appraisalPriceETH != null && (
                  <Flex
                    sx={{ flexDirection: 'column', alignItems: 'flex-end' }}
                  >
                    <Text
                      color="primary"
                      variant="xSmall"
                      sx={{ fontWeight: 'heading', textAlign: 'right' }}
                    >
                      Appraisal
                    </Text>
                    <Text
                      color="primary"
                      variant="xSmall"
                      sx={{
                        fontWeight: 'bold',
                        fontSize: 2,
                        textAlign: 'right',
                      }}
                    >
                      {formatNumber(appraisalPriceETH, {
                        fromWei: true,
                        decimals: 2,
                        prefix: 'ETHER',
                      })}
                    </Text>
                  </Flex>
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
