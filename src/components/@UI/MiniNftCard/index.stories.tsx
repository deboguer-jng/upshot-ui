import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MiniNftCard from '.'

export default {
  title: '@UI/MiniNftCard',
  component: MiniNftCard,
} as ComponentMeta<typeof MiniNftCard>

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

export const Default = Template.bind({})
Default.args = {
  image:
    'https://digitalax.mypinata.cloud/ipfs/QmYftLKLJn4T8GxjwThSJwGcZYop23mc5WkW17K7bi2Ua3',
  name: 'nft name',
  price: 0,
  date: '08/25/2021',
  from: '234234234',
  to: '234534523',
}

export const Search = Template.bind({})
Search.args = {
  image:
    'https://digitalax.mypinata.cloud/ipfs/QmYftLKLJn4T8GxjwThSJwGcZYop23mc5WkW17K7bi2Ua3',
  name: 'nft name',
  price: 0,
  date: '08/25/2021',
  rarity: 0,
  type: 'search',
}

export const SearchLongName = Template.bind({})
SearchLongName.args = {
  image:
    'https://digitalax.mypinata.cloud/ipfs/QmYftLKLJn4T8GxjwThSJwGcZYop23mc5WkW17K7bi2Ua3',
  name: 'Very long NFT name that take up all of the space.',
  creator: 'Creator name',
  price: 0,
  date: '08/25/2021',
  rarity: 0,
  type: 'search',
}
