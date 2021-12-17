/** @jsxImportSource theme-ui */
import { BoxProps } from 'theme-ui'
import React, { forwardRef, useState } from 'react'
import {
  CollectionCardItemBase,
  CollectionCardItemImage,
  CollectionCardItemDetails,
} from './Styled'
import Avatar from '../../@UI/Avatar'
import { Text, Flex, Box } from 'theme-ui'
import { Icon } from '../../..'
import OpenseaPanel from '../OpenseaPanel'

export interface CollectionCardItemProps extends BoxProps {
  /**
   * NFT Avatar
   */
  avatarImage?: string
  /**
   * Image source
   */
  imageSrc: string
  /**
   * Asset name
   */
  name: string
  /**
   * Description metadata
   */
  description: string
  /**
   * Expanded description
   */
  expanded?: boolean
  /**
   * Is pixelated rendering
   */
  isPixelated?: boolean

  listPriceEth: number

  listPriceUSD: number

  appraisalPriceETH: number

  appraisalPriceUSD: number
}

/**
 * Renders an item inside a collection card container.
 */
const CollectionCardItem = forwardRef(
  (
    {
      expanded = false,
      isPixelated = false,
      avatarImage,
      name,
      imageSrc,
      description,
      listPriceEth,
      listPriceUSD,
      appraisalPriceETH,
      appraisalPriceUSD,
      ...props
    }: CollectionCardItemProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [showPopup, setShowPopup] = useState(false)

    return (
      <CollectionCardItemBase $expanded={expanded} {...{ ref, ...props }}>
        <CollectionCardItemImage $isPixelated={isPixelated} $src={imageSrc} />

        <CollectionCardItemDetails>
          <Flex sx={{ padding: 3, gap: 1, flexDirection: 'column' }}>
            <Flex sx={{ justifyContent: 'flex-end', gap: 2 }}>
              <Flex
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'visible',
                }}
                onMouseOver={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
              >
                <Box sx={{ position: 'relative' }}>
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
                  <Flex sx={{ gap: 1 }}>
                    <Text sx={{ color: 'grey-500', fontSize: 2 }}>
                      {' '}
                      Appraisal Price{' '}
                    </Text>
                    {listPriceEth <= appraisalPriceETH && (
                      <Icon
                        color="green"
                        sx={{ width: '14px', height: '14px' }}
                        icon="upshot"
                      />
                    )}
                  </Flex>
                </Box>
              </Flex>
            </Flex>
            <Flex
              sx={{ gap: 2, width: '100%', justifyContent: 'space-between' }}
            >
              <Flex sx={{ flexDirection: 'column', gap: 2, width: '80%' }}>
                <Flex sx={{ gap: 2, alignItems: 'center' }}>
                  <Avatar
                    color="black"
                    src={avatarImage}
                    size="sm"
                    sx={{ border: '2px solid black' }}
                  />
                  <Text
                    sx={{
                      fontSize: 2,
                      color: 'grey-500',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      lineHeight: 1.25,
                    }}
                  >
                    {name}
                  </Text>
                </Flex>
                <Text
                  sx={{
                    color: 'grey-300',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    fontSize: 2,
                  }}
                >
                  {description}
                </Text>
              </Flex>
              <Flex sx={{ gap: 2, flexDirection: 'column' }}>
                <Text
                  sx={{
                    color: 'grey-500',
                    fontSize: 3,
                    lineHeight: '24px',
                    textAlign: 'right',
                  }}
                >
                  Ξ{appraisalPriceETH}
                </Text>
                <Text sx={{ color: 'grey-500', fontSize: 2 }}>
                  ${appraisalPriceUSD}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </CollectionCardItemDetails>
      </CollectionCardItemBase>
    )
  }
)

export default CollectionCardItem
