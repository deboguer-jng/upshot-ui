import React, { forwardRef } from 'react'

import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import { imageOptimizer } from '../../../utils/imageOptimizer'
import Flex from '../../Layout/Flex'
import Grid from '../../Layout/Grid'
import { SeeAllButton, CardContainer, CollectionCardBase } from './Styled'
import { useTheme } from '../../../themes/UpshotUI'
import { PanelProps } from '../../@UI/Panel'
import { formatCommas } from '../../../utils/number'
export interface CollectionCardProps extends PanelProps {
  /**
   * Collection name
   */
  name: string
  /**
   * Collection link
   */
  link?: string
  /**
   * Total NFTs
   */
  total?: number | string
  /**
   * Collection Avatar
   */
  avatarImage?: string
  /**
   * Display a "+ See All" button.
   */
  hasSeeAll?: boolean
  /**
   * Background image for "+ See All" button.
   */
  seeAllImageSrc?: string
  /**
   * Runder unsupported collection variant.
   */
  isUnsupported?: boolean
  /**
   * Appraisal price
   */
  appraisalPrice?: string
  /**
   * Floor price
   */
  floorPrice?: string
  /**
   * Expand card to modal.
   */
  onExpand?: () => void
}

/**
 * Provides a surface for UI elements.
 */
const CollectionCard = forwardRef(
  (
    {
      name,
      total = 0,
      link,
      avatarImage,
      hasSeeAll = false,
      seeAllImageSrc,
      isUnsupported,
      appraisalPrice,
      floorPrice,
      onExpand,
      children,
      ...props
    }: CollectionCardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { theme } = useTheme()

    return (
      <CollectionCardBase onClick={onExpand} {...{ ref, ...props }}>
        <CardContainer>
          <Flex sx={{ gap: 2 }}>
            {!!avatarImage && (
              <Avatar
                color="black"
                src={
                  imageOptimizer(avatarImage, {
                    width: parseInt(theme.images.avatar.md.size),
                    height: parseInt(theme.images.avatar.md.size),
                  }) ?? avatarImage
                }
                size="md"
                sx={{
                  width: '54px',
                  height: '54px',
                  border: '2px solid black',
                }}
              />
            )}
            <Flex
              sx={{
                justifyContent: 'center',
                flexDirection: 'column',
                flexGrow: 1,
                marginLeft: avatarImage ? 0 : 2,
                marginTop: avatarImage ? 0 : 1,
              }}
            >
              {link ? (
                <Text
                  as="a"
                  // @ts-ignore
                  href={link}
                  target={link.startsWith('http') ? '_blank' : '_self'}
                  onClick={(e) => e.stopPropagation()}
                  sx={{
                    color: 'inherit',
                    fontSize: 3,
                    fontWeight: 'bold',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    lineHeight: 1.25,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {name}
                </Text>
              ) : (
                <Text
                  sx={{
                    fontSize: 3,
                    fontWeight: 'bold',
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    lineHeight: 1.25,
                  }}
                >
                  {name}
                </Text>
              )}
              <Flex sx={{ gap: 2, alignItems: 'flex-end' }}>
                <Text color="grey-600" sx={{ fontSize: 2 }}>
                  {total ? formatCommas(total) : 0} NFTs
                </Text>
                {!!floorPrice && isUnsupported && (
                  <Text color="pink" sx={{ fontSize: 2 }}>
                    Ξ{floorPrice} Floor Price
                  </Text>
                )}
                {!!floorPrice && !isUnsupported && (
                  <Text color="pink" sx={{ fontSize: 2 }}>
                    Ξ{floorPrice} Floor Sum
                  </Text>
                )}
                {!!appraisalPrice && (
                  <Text color="blue" sx={{ fontSize: 2 }}>
                    Ξ{appraisalPrice} Appraisal
                  </Text>
                )}
              </Flex>
            </Flex>
            <IconButton
              type="button"
              onClick={onExpand}
              sx={{
                border: '1px solid',
                borderColor: theme.colors['grey-600'],
                width: 21,
                height: 21,
                marginTop: '4px',
                marginRight: '4px',
                '&:hover, &:hover svg polygon': {
                  borderColor: theme.colors['grey-500'],
                  fill: theme.colors['grey-500'],
                },
              }}
            >
              <Icon size={9} icon="expand" />
            </IconButton>
          </Flex>

          <Grid
            sx={{
              gridTemplateColumns: isUnsupported ? '1fr' : '1fr 1fr',
              padding: 2,
              paddingTop: 0,
            }}
          >
            {children}
            {hasSeeAll && (
              <SeeAllButton onClick={onExpand} $imageSrc={seeAllImageSrc} />
            )}
          </Grid>
        </CardContainer>
      </CollectionCardBase>
    )
  }
)

export default CollectionCard
