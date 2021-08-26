import React, { ReactElement } from 'react'
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
} from './Styled'
import { useTheme } from '@emotion/react'

export interface MiniNftCardInterface {
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

export default function MiniNftCard({
  error = false,
  type = 'default',
  image,
  name,
  price,
  rarity,
  from,
  to,
  date,
}: MiniNftCardInterface) {
  const theme = useTheme()
  if (error) {
    return (
      <MiniNftCardWrapper>
        <MiniNftCardMainBoard>
          <img src={ErrorSvg} />
          <MiniNftCardMainContentWrapper type={type}>
            {type === 'default' ? (
              <MiniNftCardPrice error>Error</MiniNftCardPrice>
            ) : (
              <MiniNftCardName error>Error</MiniNftCardName>
            )}
          </MiniNftCardMainContentWrapper>
        </MiniNftCardMainBoard>
        <MiniNftCardDetailsBoard>
          {type === 'default' ? (
            <>
              <Text
                variant="small"
                sx={{ color: theme.colors.red, textTransform: 'uppercase' }}
              >
                {' '}
                Error{' '}
              </Text>
              <Text
                variant="xSmall"
                sx={{ color: theme.colors.red, textTransform: 'uppercase' }}
              >
                {' '}
                Error{' '}
              </Text>
              <Text variant="xSmall" sx={{ color: theme.colors['grey-500'] }}>
                {' '}
                From:{' '}
              </Text>
              <Text
                variant="small"
                sx={{ color: theme.colors.red, textTransform: 'uppercase' }}
              >
                {' '}
                Error{' '}
              </Text>
              <Text variant="xSmall" sx={{ color: theme.colors['grey-500'] }}>
                {' '}
                To:{' '}
              </Text>
              <Text
                variant="small"
                sx={{ color: theme.colors.red, textTransform: 'uppercase' }}
              >
                {' '}
                Error{' '}
              </Text>
            </>
          ) : (
            <>
              <Text
                variant="small"
                sx={{ color: theme.colors.red, textTransform: 'uppercase' }}
              >
                {' '}
                Error{' '}
              </Text>
              <Text
                variant="xSmall"
                sx={{ color: theme.colors.red, textTransform: 'uppercase' }}
              >
                {' '}
                Error{' '}
              </Text>
              <Text variant="xSmall" sx={{ color: theme.colors['grey-500'] }}>
                {' '}
                Rarity:{' '}
              </Text>
              <Text
                variant="xSmall"
                sx={{ color: theme.colors.red, textTransform: 'uppercase' }}
              >
                {' '}
                --%{' '}
              </Text>
              <Text variant="xSmall" sx={{ color: theme.colors['grey-500'] }}>
                {' '}
                Price:{' '}
              </Text>
              <Text
                variant="xSmall"
                sx={{ color: theme.colors.red, textTransform: 'uppercase' }}
              >
                {' '}
                $--{' '}
              </Text>
            </>
          )}
        </MiniNftCardDetailsBoard>
      </MiniNftCardWrapper>
    )
  }

  return (
    <MiniNftCardWrapper>
      <MiniNftCardMainBoard>
        <img src={image} />
        <MiniNftCardMainContentWrapper type={type}>
          {type === 'default' ? (
            <MiniNftCardPrice> ${price} </MiniNftCardPrice>
          ) : (
            <MiniNftCardName> {name} </MiniNftCardName>
          )}
        </MiniNftCardMainContentWrapper>
      </MiniNftCardMainBoard>
      <MiniNftCardDetailsBoard>
        {type === 'default' ? (
          <>
            <Text variant="small"> {name} </Text>
            <Text variant="xSmall"> {date} </Text>
            <Text variant="xSmall" sx={{ color: theme.colors['grey-500'] }}>
              {' '}
              From:{' '}
            </Text>
            <Flex sx={{ alignItems: 'center' }}>
              <AddressCircle variant="from" />
              <Text variant="small"> {from} </Text>
            </Flex>
            <Text variant="xSmall" sx={{ color: theme.colors['grey-500'] }}>
              {' '}
              To:{' '}
            </Text>
            <Flex sx={{ alignItems: 'center' }}>
              <AddressCircle variant="to" />
              <Text variant="small">{to}</Text>
            </Flex>
          </>
        ) : (
          <>
            <Text variant="small"> {name} </Text>
            <Text variant="xSmall"> {date} </Text>
            <Text variant="xSmall" sx={{ color: theme.colors['grey-500'] }}>
              {' '}
              Rarity:{' '}
            </Text>
            <Text variant="small"> {rarity}% </Text>
            <Text variant="xSmall" sx={{ color: theme.colors['grey-500'] }}>
              {' '}
              Price:{' '}
            </Text>
            <Text variant="small"> ${price} </Text>
          </>
        )}
      </MiniNftCardDetailsBoard>
    </MiniNftCardWrapper>
  )

  return <MiniNftCardWrapper></MiniNftCardWrapper>
}
