/** @jsxImportSource theme-ui */
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import React, { forwardRef, HTMLAttributes } from 'react'
import { Text, Flex } from 'theme-ui'
import ErrorSvg from '../../../assets/svg/icons/Error.svg'
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
} from './Styled'

export interface MiniNftCardInterface {
  /**
   * Price for the NFT in Eth.
   */
  price?: string
  /**
   * Rarity percentage.
   */
  rarity: string
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
  type?: 'default' | 'search'

  pixelated?: boolean

  link?: string
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
      from,
      fromLink,
      to,
      toLink,
      date,
      link,
      pixelated = false,
      ...props
    }: MiniNftCardInterface & HTMLAttributes<HTMLDivElement>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    return (
      <MiniNftCardWrapper isMobile={isMobile} {...{ ref, ...props }}>
        <MiniNftCardMainBoard error={error}>
          <MiniNftCardImageWrapper
            src={error ? ErrorSvg : image}
            pixelated={pixelated}
          />
          <MiniNftCardMainContentWrapper type={type}>
            {type === 'default' ? (
              <>
                {error ? (
                  <MiniNftCardPrice error={error}>Error</MiniNftCardPrice>
                ) : price?.length ? (
                  <MiniNftCardPrice>{price}</MiniNftCardPrice>
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
              {error ? 'Error' : type === 'default' ? name : creator}
            </MiniNftCardDetailsName>
            {type === 'default' ? (
              <MiniNftCardDetailValue variant="xSmall" error={error}>
                {error ? 'Error' : date}
              </MiniNftCardDetailValue>
            ) : null}
            <MiniNftCardDetailLabel variant="xSmall">
              {type === 'default' ? 'From :' : 'Rarity :'}
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
              ) : (
                rarity
              )}
            </MiniNftCardDetailValue>
            <MiniNftCardDetailLabel variant="xSmall">
              {type === 'default' ? 'To :' : 'Price :'}
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
