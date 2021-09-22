import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MiniNftCard from '.'
import { Flex, Box } from 'theme-ui'

export default {
  title: '@UI/MiniNftCard',
  component: MiniNftCard,
} as ComponentMeta<typeof MiniNftCard>

const Template1: ComponentStory<typeof MiniNftCard> = (args) => {
  return (
    <Flex>
      <Box m={2}>
        <MiniNftCard {...args} onClick={() => {}} />
      </Box>
      <Box m={2}>
        <MiniNftCard {...args} />
      </Box>
      <Box m={2}>
        <MiniNftCard {...args} />
      </Box>
    </Flex>
  )
}

const Template: ComponentStory<typeof MiniNftCard> = (args) => (
  <MiniNftCard {...args} />
)

export const ErrorDefault = Template.bind({})
ErrorDefault.args = {
  error: true,
}

export const ErrorSearch = Template.bind({})
ErrorSearch.args = {
  error: true,
  type: 'search',
}

export const Default = Template1.bind({})
Default.args = {
  image: 'https://www.stockvault.net/data/2012/09/24/135964/preview16.jpg',
  name: 'nft name',
  price: '$69',
  date: '08/25/2021',
  from: '0xce..ea4',
  to: '0xdf...4a1',
}

export const DefaultLongName = Template.bind({})
DefaultLongName.args = {
  image: 'https://www.stockvault.net/data/2012/09/24/135964/preview16.jpg',
  name: 'Very long NFT name that take up all of the space.Very long NFT name that take up all of the space.',
  price: '$420',
  date: '08/25/2021',
  from: '0xce..ea4',
  to: '0xdf...4a1',
}

export const Search = Template.bind({})
Search.args = {
  image:
    'https://digitalax.mypinata.cloud/ipfs/QmYftLKLJn4T8GxjwThSJwGcZYop23mc5WkW17K7bi2Ua3',
  name: 'nft name',
  price: '$100.42',
  creator: 'creator',
  rarity: '45%',
  type: 'search',
}

export const SearchLongName = Template.bind({})
SearchLongName.args = {
  image:
    'https://digitalax.mypinata.cloud/ipfs/QmYftLKLJn4T8GxjwThSJwGcZYop23mc5WkW17K7bi2Ua3',
  name: 'Very long NFT name that take up all of the space.Very long NFT name that take up all of the space.',
  creator: 'Very long NFT name that take up all of the space.',
  price: '$100,000',
  date: '08/25/2021',
  rarity: '62.5%',
  type: 'search',
}
