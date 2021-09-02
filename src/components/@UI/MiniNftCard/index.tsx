import React, { forwardRef } from 'react'
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
  creator?: string
  image?: string
  error?: boolean
  name?: string
  price?: number
  rarity?: number
  from?: string
  to?: string
  date?: string
  type: 'default' | 'search'
}

const MiniNftCard = forwardRef(
  ({
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
  }: MiniNftCardInterface,
  ref: React.ForwardedRef<HTMLDivElement>
  ) => {
  return (
    <MiniNftCardWrapper {...{ ref, ...props }}>
      <MiniNftCardMainBoard error={error}>
        <img src={error ? ErrorSvg : image} />
        <MiniNftCardMainContentWrapper type={type}>
          {type === 'default' ? (
            <MiniNftCardPrice error={error}>
              {error ? 'Error' : `$${price.toFixed(2)}`}
            </MiniNftCardPrice>
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
            `${rarity.toFixed(2)}%`
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
            `$${price}`
          )}
        </MiniNftCardDetailValue>
      </MiniNftCardDetailsBoard>
    </MiniNftCardWrapper>
  )
})

export default MiniNftCard
