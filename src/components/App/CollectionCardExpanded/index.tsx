import { BoxProps } from 'theme-ui'
import React, { forwardRef, useEffect, useCallback, useRef } from 'react'

import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import IconButton from '../../@UI/IconButton'
import Icon from '../../@UI/Icon'
import Flex from '../../Layout/Flex'
import CollectionCardItem from '../CollectionCardItem'
import {
  CardContainer,
  CollectionCardExpandedBase,
  MasonryContainer,
} from './Styled'
import { usePositioner, useResizeObserver, useMasonry } from 'masonic'
import { useSize, useScroller } from 'mini-virtual-list'
import { CollectionCardItemProps } from '../CollectionCardItem'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import { useTheme } from '../../../themes/UpshotUI'
import { imageOptimizer } from '../../../utils/imageOptimizer'

export interface CollectionCardExpandedProps extends BoxProps {
  /**
   * Collection name
   */
  name: string
  /**
   * Total NFTs
   */
  total: number
  /**
   * Collection Avatar
   */
  avatarImage?: string
  /**
   * Items
   */
  items: CollectionCardItemProps[]
  /**
   * Close handler
   */
  onClose?: (e: React.MouseEvent) => void
  /**
   * Infinite scroll handler
   */
  onFetchMore?: (offset: number) => void
}

/**
 * Temporary solution to add deterministic height variance
 * prior to a solution that provides the exact heights or
 * proportional sizes for assets received via graphQL.
 */
const prng = (seed: number) => {
  let t = (seed += 0x6d2b79f5)
  t = Math.imul(t ^ (t >>> 15), t | 1)
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61)

  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

/**
 * Provides an expanded collection card.
 */
const CollectionCardExpanded = forwardRef(
  (
    {
      name,
      total = 0,
      avatarImage,
      items = [],
      onClose,
      onFetchMore,
      ...props
    }: CollectionCardExpandedProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    /* Masonry setup */
    const scrollRef = useRef(null)
    const { theme } = useTheme()
    const { width, height } = useSize(scrollRef)
    const { scrollTop, isScrolling } = useScroller(scrollRef)
    const isMobile = useBreakpointIndex() <= 1
    const positioner = usePositioner({
      width: Math.max(0, width - 8), // Scrollbar padding
      columnWidth: 240,
      columnGutter: 16,
      rowGutter: 16,
    })
    const resizeObserver = useResizeObserver(positioner)

    /* Check if the scroll position is at the bottom of the container. */
    const isScrollBottom = useCallback(() => {
      if (!scrollRef.current) return false

      const { scrollTop, clientHeight, scrollHeight } = scrollRef.current
      if (scrollTop + clientHeight < scrollHeight) return false

      return true
    }, [scrollRef])

    /* Fetch items if available and scrolled to bottom. */
    useEffect(() => {
      const infiniteScroll = async () => {
        if (!isScrollBottom()) return
        if (total > items.length) onFetchMore?.(items.length)
      }

      const el = scrollRef.current
      el?.addEventListener('scroll', infiniteScroll)

      return () => el?.removeEventListener('scroll', infiniteScroll)
    }, [scrollRef, items.length])

    /* Virtualized cell renderer by masonry index. */
    const MasonryRenderer = useCallback(
      ({ index, data }: { index: number; data: any }) => {
        const dynamicHeight = Math.round(prng(index)) * 60 + 260

        return (
          <a href={`/analytics/nft/${data.id}`} target="_blank">
            <CollectionCardItem
              sx={{ height: isMobile ? 400 : dynamicHeight }}
              {...data}
            />
          </a>
        )
      },
      [isMobile]
    )

    /* Auto-fetch more items on masonry cell render if scrolled to the bottom. */
    const handleOnRender = (_startIndex: number, endIndex: number) => {
      if (!isScrollBottom() || endIndex === total - 1) return

      onFetchMore?.(endIndex + 1)
    }

    return (
      <CollectionCardExpandedBase {...{ ref, ...props }}>
        <CardContainer>
          <Flex sx={{ gap: 2, padding: 3, paddingBottom: 0 }}>
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
              }}
            >
              <Text
                sx={{
                  fontSize: 4,
                  fontWeight: 'bold',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  lineHeight: 1.25,
                }}
              >
                {name}
              </Text>
              <Text color="grey-600">{total ?? '-'} NFTs</Text>
            </Flex>
            <Flex>
              <IconButton onClick={onClose}>
                <Icon icon="close" />
              </IconButton>
            </Flex>
          </Flex>

          <MasonryContainer ref={scrollRef}>
            {useMasonry({
              positioner,
              resizeObserver,
              items,
              height,
              scrollTop,
              isScrolling,
              render: MasonryRenderer,
              onRender: handleOnRender,
            })}
          </MasonryContainer>
        </CardContainer>
      </CollectionCardExpandedBase>
    )
  }
)

export default CollectionCardExpanded
