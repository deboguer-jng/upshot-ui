import { BoxProps } from 'theme-ui'
import React, { forwardRef, useMemo, useCallback, useRef } from 'react'

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
import {
  usePositioner,
  useResizeObserver,
  useMasonry,
  useInfiniteLoader,
} from 'masonic'
import { useSize, useScroller } from 'mini-virtual-list'
import { CollectionCardItemProps } from '../CollectionCardItem'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'

export interface CollectionCardExpandedProps extends BoxProps {
  /**
   * Collection name
   */
  name: string
  /**
   * Total NFTs
   */
  total?: number | string
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
  onFetchMore?: () => void
  /**
   * Has more items to fetch.
   */
  hasMore?: boolean
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
      avatarImage = '/img/defaultAvatar.png',
      items = [],
      hasMore = true,
      onClose,
      onFetchMore,
      ...props
    }: CollectionCardExpandedProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const containerRef = useRef(null)
    const { width, height } = useSize(containerRef)
    const { scrollTop, isScrolling } = useScroller(containerRef)
    const isMobile = useBreakpointIndex() <= 1
    const positioner = usePositioner({
      width: Math.max(0, width - 8), // Scrollbar padding
      columnWidth: 240,
      columnGutter: 16,
      rowGutter: 16,
    })
    const resizeObserver = useResizeObserver(positioner)

    const maybeLoadMore = useInfiniteLoader(onFetchMore, {
      isItemLoaded: (index, items) => !!items[index],
    })

    const MasonryRenderer = useCallback(
      ({ index, data }: { index: number; data: any }) => {
        const dynamicHeight = useMemo(
          () => Math.round(prng(index)) * 60 + 260,
          [index]
        ) // Masonry tiling

        return (
          <CollectionCardItem
            {...data}
            sx={{ height: isMobile ? 400 : dynamicHeight }}
          />
        )
      },
      [isMobile]
    )

    return (
      <CollectionCardExpandedBase {...{ ref, ...props }}>
        <CardContainer>
          <Flex sx={{ gap: 2, padding: 3, paddingBottom: 0 }}>
            <Avatar
              color="black"
              src={avatarImage}
              size="md"
              sx={{ width: '54px', height: '54px', border: '2px solid black' }}
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
              <Text color="grey-600">{total} NFTs</Text>
            </Flex>
            <Flex>
              <IconButton onClick={onClose}>
                <Icon icon="close" />
              </IconButton>
            </Flex>
          </Flex>

          <MasonryContainer className="masonryContainer" ref={containerRef}>
            {useMasonry({
              positioner,
              resizeObserver,
              items,
              height,
              scrollTop,
              isScrolling,
              overscanBy: 6,
              render: MasonryRenderer,
              onRender: onFetchMore ? maybeLoadMore : null,
            })}
          </MasonryContainer>
        </CardContainer>
      </CollectionCardExpandedBase>
    )
  }
)

export default CollectionCardExpanded
