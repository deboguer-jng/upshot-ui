import { Text, Flex, BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'
import {
  CollectionCardItemBase,
  CollectionCardItemImage,
  CollectionCardItemDetails,
} from './Styled'
import Avatar from '../../@UI/Avatar'
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
      ...props
    }: CollectionCardItemProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { theme } = useTheme()
    
    const optimizedSrc = imageOptimizer(imageSrc, {width: 512}) ?? imageSrc
    const finalImage = isPixelated ? imageSrc : optimizedSrc
    return (
      <CollectionCardItemBase $expanded={expanded} {...{ ref, ...props }}>
        <CollectionCardItemImage $isPixelated={isPixelated} $src={finalImage} />
        <CollectionCardItemDetails>
          <Flex sx={{ padding: 3, gap: 1, flexDirection: 'column' }}>
            <Flex sx={{ gap: 2 }}>
              <Avatar
                color="black"
                src={imageOptimizer(avatarImage, {
                  width: parseInt(theme.images.avatar.sm.size),
                  height: parseInt(theme.images.avatar.sm.size)
                }) ?? avatarImage}
                size="sm"
                sx={{ border: '2px solid black' }}
              />
              <Flex
                sx={{
                  justifyContent: 'center',
                  flexDirection: 'column',
                  flexGrow: 1,
                }}
              >
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
        </CollectionCardItemDetails>
      </CollectionCardItemBase>
    )
  }
)

export default CollectionCardItem
