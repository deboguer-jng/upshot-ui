/** @jsxImportSource theme-ui */
import React, { forwardRef, HTMLAttributes } from 'react'
import { Text, Flex } from 'theme-ui'


import ErrorSvg from '../../../assets/svg/icons/Error.svg'
import { imageOptimizer } from '../../../utils/imageOptimizer'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import theme from '../../../themes/UpshotUI'
import {
  MiniNftCardWrapper,
  MiniNftCardMainBoard,
  MiniNftCardDetailsBoard,
  MiniNftCardPrice,
  MiniNftCardName,
  MiniNftCardMainContentWrapper,
  AddressCircle,
  MiniNftCardDetailsName,
  MiniNftCardDetailLabel,
  MiniNftCardDetailValue,
  MiniNftCardImageWrapper,
  WrappedLink,
  PriceTooltip,
} from './Styled'

export interface MiniNftCardInterface {
  /**
   * Price for the NFT in Eth.
   */
  price?: string
  /**
   * Rarity percentage.
   */
  rarity?: string

  sales?: string

  floorPrice?: string
  /**
   * NFT creator information.
   */
  creator?: string
  /**
   * Cover image.
   */
  image?: string
  /**
   * Shown error variant.
   */
  error?: boolean
  /**
   * NFT name
   */
  name?: string
  /**
   * Last sale from address.
   */
  from?: string

  fromLink?: string
  /**
   * Last sale to address.
   */
  to?: string

  toLink?: string
  /**
   * Last sale date
   */
  date?: string
  /**
   * Variant type
   */
  type?: 'default' | 'search' | 'collection'

  pixelated?: boolean

  link?: string

  tooltip?: string
}

const MiniNftCard = forwardRef(
  (
    {
      error = false,
      type = 'default',
      creator,
      image,
      name,
      price,
      rarity,
      sales,
      floorPrice,
      from,
      fromLink,
      to,
      toLink,
      date,
      link,
      pixelated = false,
      tooltip,
      ...props
    }: MiniNftCardInterface & HTMLAttributes<HTMLDivElement>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    const optimizedSrc = imageOptimizer(image, {height: theme.miniNftCard.height, width: theme.miniNftCard.width}) ?? image
    const imageSrc = pixelated ? image : optimizedSrc

    return (
      <MiniNftCardWrapper isMobile={isMobile} {...{ ref, ...props }}>
        <MiniNftCardMainBoard error={error}>
          <MiniNftCardImageWrapper
            src={error ? ErrorSvg : imageSrc}
            pixelated={pixelated}
          />
          <MiniNftCardMainContentWrapper type={type}>
            {type === 'default' || type === 'collection' ? (
              <>
                {error ? (
                  <MiniNftCardPrice error={error}>Error</MiniNftCardPrice>
                ) : price?.length ? (
                  <MiniNftCardPrice>
                    {price}
                    {!!tooltip && (
                      <PriceTooltip>
                        <Text
                          sx={{
                            fontSize: '12px',
                            lineHeight: '14px',
                            textTransform: 'none',
                          }}
                          color="grey-200"
                        >
                          {tooltip}
                        </Text>
                      </PriceTooltip>
                    )}
                  </MiniNftCardPrice>
                ) : null}
              </>
            ) : (
              <MiniNftCardName error={error}>
                {error ? 'Error' : name}
              </MiniNftCardName>
            )}
          </MiniNftCardMainContentWrapper>
        </MiniNftCardMainBoard>
        {!isMobile && (
          <MiniNftCardDetailsBoard>
            {type === 'search' ? (
              <MiniNftCardDetailLabel variant="xSmall">
                Creator:
              </MiniNftCardDetailLabel>
            ) : null}
            <MiniNftCardDetailsName variant="small" error={error}>
              {error
                ? 'Error'
                : type === 'default' || type === 'collection'
                ? name
                : creator}
            </MiniNftCardDetailsName>
            {type === 'default' ? (
              <MiniNftCardDetailValue variant="xSmall" error={error}>
                {error ? 'Error' : date}
              </MiniNftCardDetailValue>
            ) : null}
            <MiniNftCardDetailLabel variant="xSmall">
              {type === 'default'
                ? 'From :'
                : type === 'collection'
                ? '# of sales :'
                : 'Rarity :'}
            </MiniNftCardDetailLabel>
            <MiniNftCardDetailValue variant="small" error={error}>
              {error ? (
                type === 'default' ? (
                  'Error'
                ) : (
                  '--%'
                )
              ) : type === 'default' ? (
                <Flex sx={{ alignItems: 'center' }}>
                  <AddressCircle variant="from" />
                  <a
                    href={fromLink}
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <Text variant="small"> {from} </Text>
                  </a>
                </Flex>
              ) : type === 'collection' ? (
                sales
              ) : (
                rarity
              )}
            </MiniNftCardDetailValue>
            <MiniNftCardDetailLabel variant="xSmall">
              {type === 'default'
                ? 'To :'
                : type === 'collection'
                ? 'floor price :'
                : 'Price :'}
            </MiniNftCardDetailLabel>
            <MiniNftCardDetailValue variant="small" error={error}>
              {error ? (
                type === 'default' ? (
                  'Error'
                ) : (
                  '$--'
                )
              ) : type === 'default' ? (
                <Flex sx={{ alignItems: 'center' }}>
                  <AddressCircle variant="to" />
                  <a
                    href={toLink}
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    <Text variant="small"> {to} </Text>
                  </a>
                </Flex>
              ) : type === 'collection' ? (
                floorPrice
              ) : (
                price
              )}
            </MiniNftCardDetailValue>
            <MiniNftCardDetailValue>
              {error ? (
                <Text variant="small" color="grey-600">
                  View Collection
                </Text>
              ) : (
                <WrappedLink href={link}>
                  {' '}
                  <Text variant="small" color="primary">
                    {' '}
                    View Collection{' '}
                  </Text>
                </WrappedLink>
              )}
            </MiniNftCardDetailValue>
          </MiniNftCardDetailsBoard>
        )}
      </MiniNftCardWrapper>
    )
  }
)

export default MiniNftCard
