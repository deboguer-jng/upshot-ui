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
  /**
   * Last sale to address.
   */
  to?: string
  /**
   * Last sale date
   */
  date?: string
  /**
   * Variant type
   */
  type?: 'default' | 'search'
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
      to,
      date,
      ...props
    }: MiniNftCardInterface & HTMLAttributes<HTMLDivElement>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <MiniNftCardWrapper {...{ ref, ...props }}>
        <MiniNftCardMainBoard error={error}>
          <img src={error ? ErrorSvg : image} />
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
                <Text variant="small"> {from} </Text>
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
                <Text variant="small"> {to} </Text>
              </Flex>
            ) : (
              price
            )}
          </MiniNftCardDetailValue>
        </MiniNftCardDetailsBoard>
      </MiniNftCardWrapper>
    )
  }
)

export default MiniNftCard
