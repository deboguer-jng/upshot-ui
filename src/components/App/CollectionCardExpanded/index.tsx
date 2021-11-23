import { BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'

import Avatar from '../../@UI/Avatar'
import Text from '../../@UI/Text'
import IconButton from '../../@UI/IconButton'
import Icon from '../../@UI/Icon'
import Flex from '../../Layout/Flex'
import { CardContainer, CollectionCardExpandedBase } from './Styled'
import { Masonry } from 'masonic'

let i = 0
const items = Array.from(Array(5000), () => ({ id: i++ }))

const MasonryCard = ({ index, data: { id }, width }: any) => (
  <div>
    <div>Index: {index}</div>
    <pre>ID: {id}</pre>
    <div>Column width: {width}</div>
  </div>
)

const EasyMasonryComponent = (props: any) => (
  <Masonry items={items} render={MasonryCard} />
)

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
      children,
      ...props
    }: CollectionCardExpandedProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <CollectionCardExpandedBase {...{ ref, ...props }}>
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
            <IconButton>
              <Icon icon="close" />
            </IconButton>
          </Flex>
        </Flex>

        <EasyMasonryComponent />
      </CardContainer>
    </CollectionCardExpandedBase>
  )
)

export default CollectionCardExpanded
