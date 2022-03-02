import { Flex, BoxProps, Box} from 'theme-ui'
import React, { forwardRef, useState } from 'react'
import {
  CollectionCardItemBase,
  CollectionCardItemImage,
  CollectionCardItemDetails,
} from './Styled'
import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import { Icon } from '../../..'
import OpenseaPanel from '../OpenseaPanel'
import Label from '../../@UI/Label'
import { imageOptimizer } from '../../../utils/imageOptimizer'
import { useTheme } from '../../../themes/UpshotUI'

export interface CollectionCardItemProps extends BoxProps {
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
   * Asset name
   */
  name: string
  /**
   * Description metadata
   */
  description: string
  /**
   * Appraisal Price in ETH
   */
  appraisalPriceETH?: number | null
  /**
   * Appraisal confidence (0-100)
   */
  appraisalConfidence?: number | null
  /**
   * Appraisal Price in USD
   */
  appraisalPriceUSD?: number | null
  /**
   * Floor Price in USD
   */
  floorPriceETH?: number | null
  /**
   * Floor Price in USD
   */
  floorPriceUSD?: number | null
  /**
   * Is card expanded by default
   */
  expanded?: boolean
  /**
   * Is pixelated rendering
   */
  isPixelated?: boolean

  listPriceEth: number

  listPriceUSD: number
}

/**
 * Renders an item inside a collection card container.
 */
const CollectionCardItem = forwardRef(
  (
    {
      avatarImage,
      imageSrc,
      collection,
      name,
      description,
      listPriceEth,
      listPriceUSD,
      appraisalPriceETH = null,
      appraisalConfidence = null,
      appraisalPriceUSD = null,
      floorPriceETH = null,
      floorPriceUSD = null,
      expanded = false,
      isPixelated = false,
      ...props
    }: CollectionCardItemProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [showPopup, setShowPopup] = useState(false)
    const { theme } = useTheme()
    const optimizedSrc = imageOptimizer(imageSrc, {width: 512}) ?? imageSrc
    const finalImage = isPixelated ? imageSrc : optimizedSrc
    const hoverUnderglow = appraisalPriceETH ? 'blue' : 'grey-600'

    return (
      <CollectionCardItemBase $expanded={expanded} $hoverUnderglow={hoverUnderglow} {...{ ref, ...props }}>
        <CollectionCardItemImage $isPixelated={isPixelated} $src={finalImage} />
        <CollectionCardItemDetails sx={{ padding: 3, gap: 3, width: '100%' }}>
          <Flex sx={{ flexDirection: 'column', minWidth: 'calc(100% - 120px)' }}>
            <Flex sx={{ gap: 2 }}>
              <Avatar
                color="black"
                src={imageOptimizer(avatarImage, {
                  width: parseInt(theme.images.avatar.sm.size),
                  height: parseInt(theme.images.avatar.sm.size)
                }) ?? avatarImage}
                size="xs"
                sx={{ border: '2px solid black' }}
              />
              <Flex
                sx={{
                  justifyContent: 'center',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
                onMouseOver={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
              >
                <Text
                  variant="xSmall"
                  color="grey-500"
                  sx={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                  }}
                >
                  {collection}
                </Text>
              </Flex>
            </Flex>

            <Text
            variant="large"
              color="grey-300"
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}
            >
              {name}
            </Text>
          </Flex>
          {showPopup && (
            <Box
              sx={{
                position: 'absolute',
                top: '-210px',
                right: 0,
                zIndex: 2,
              }}
            >
              <OpenseaPanel
                variant="popup"
                listPriceETH={listPriceEth}
                sx={{ width: '100%' }}
                listPriceUSD={listPriceUSD}
                appraisalPriceETH={appraisalPriceETH}
                openseaUrl="https://upshot.io/"
              />
            </Box>
          )}
          { appraisalPriceETH != null && (// appraisal price
            <Flex sx={{ flexDirection: 'column', minWidth: 'fit-content' }}>
              <Text color='grey-500' variant="xSmall">
                Appraisal price
              </Text>
              <Label
                color="primary"
                currencySymbol=""
                size="sm"
                topRightLabel={appraisalConfidence ? appraisalConfidence.toString() + '%' : ''}
                variant="currency"
                style={{ lineHeight: 1 }}
              >
                {'Ξ' + appraisalPriceETH.toLocaleString()}
              </Label>
              { appraisalPriceUSD != null && (
                <Text color='grey-300' variant="small" sx={{ opacity: 0.5 }}>
                  ${appraisalPriceUSD.toLocaleString()}
                </Text>
              )}
            </Flex>
            )}
            { floorPriceETH  != null && ( // floor price
              <Flex sx={{ flexDirection: 'column', minWidth: 'fit-content' }}>
                <Text color='grey-500' variant="xSmall">
                  Floor price
                </Text>
                <Label
                  color="grey-500"
                  currencySymbol=""
                  size="sm"
                  variant="currency"
                  style={{ lineHeight: 1 }}
                >
                  {'Ξ' + floorPriceETH.toLocaleString()}
                </Label>
                { floorPriceUSD != null && (
                  <Text color='grey-300' variant="small" sx={{ opacity: 0.5 }}>
                    ${floorPriceUSD.toLocaleString()}
                  </Text>
                )}
              </Flex>
              )}
        </CollectionCardItemDetails>
      </CollectionCardItemBase>
    )
  }
)

export default CollectionCardItem
