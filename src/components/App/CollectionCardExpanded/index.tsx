import { BoxProps } from 'theme-ui'
import React, { forwardRef, useMemo, useEffect, useRef } from 'react'

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
import { Masonry } from 'masonic'
import { CollectionCardItemProps } from '../CollectionCardItem'

export interface CollectionCardExpandedProps extends BoxProps {
  /**
   * Collection name
   */
  name: string
  /**
   * Total NFTs
   */
  total?: number
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

type MasonryRendererProps = { index: number; data: CollectionCardItemProps }

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

const MasonryRenderer = ({ index, data }: MasonryRendererProps) => {
  const height = useMemo(() => Math.round(prng(index)) * 80 + 320, [index]) // Masonry tiling

  return <CollectionCardItem {...data} sx={{ height }} />
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
    const scrollBoxRef = useRef(null)

    useEffect(() => {
      // Attach infinite scroll listener

      const infiniteScrollListener = async () => {
        const { scrollTop, clientHeight, scrollHeight } = scrollBoxRef.current
        if (scrollTop + clientHeight < scrollHeight) return

        if (hasMore) onFetchMore?.()
      }

      scrollBoxRef.current.addEventListener('scroll', infiniteScrollListener, {
        passive: true,
      })

      return () =>
        scrollBoxRef.current.removeEventListener(
          'scroll',
          infiniteScrollListener
        )
    }, [])

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

          <MasonryContainer sx={{ maxHeight: 400 }} ref={scrollBoxRef}>
            <Masonry
              columnGutter={24}
              render={MasonryRenderer}
              {...{ items }}
            />
          </MasonryContainer>
        </CardContainer>
      </CollectionCardExpandedBase>
    )
  }
)

export default CollectionCardExpanded
