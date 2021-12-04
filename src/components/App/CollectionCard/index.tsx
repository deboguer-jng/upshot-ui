/** @jsxImportSource theme-ui */
import { BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'

import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import Flex from '../../Layout/Flex'
import Grid from '../../Layout/Grid'
import { SeeAllButton, CardContainer, CollectionCardBase } from './Styled'

export interface CollectionCardProps extends BoxProps {
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
  total?: number
  /**
   * Collection Avatar
   */
  avatarImage?: string
  /**
   * Display a See All button.
   */
  hasSeeAll?: boolean
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
      avatarImage = '/img/defaultAvatar.png',
      hasSeeAll = false,
      onClick,
      children,
      ...props
    }: CollectionCardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <CollectionCardBase {...{ ref, onClick, ...props }}>
      <CardContainer>
        <Flex sx={{ gap: 2 }}>
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
            {link ? (
              <Text
                as="a"
                // @ts-ignore
                href={link}
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
            <Text color="grey-600" sx={{ fontSize: 2 }}>
              {total} NFTs
            </Text>
          </Flex>
          <IconButton
            type="button"
            sx={{
              border: '1px solid',
              borderColor: 'grey-600',
              width: 21,
              height: 21,
              marginTop: '4px',
              marginRight: '4px',
              '&:hover, &:hover svg polygon': {
                borderColor: 'grey-500',
                fill: 'grey-500',
              },
            }}
            {...{ onClick }}
          >
            <Icon size={9} icon="expand" />
          </IconButton>
        </Flex>

        <Grid
          sx={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr) )',
            padding: 2,
            paddingTop: 0,
          }}
        >
          {children}
          {hasSeeAll && <SeeAllButton {...{ onClick }} />}
        </Grid>
      </CardContainer>
    </CollectionCardBase>
  )
)

export default CollectionCard
