import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'
import CollectionCardItem from './'

export default {
  title: 'App/CollectionCardItem',
  component: CollectionCardItem,
} as ComponentMeta<typeof CollectionCardItem>

const Template: ComponentStory<typeof CollectionCardItem> = (args) => (
  <Box sx={{ maxWidth: 240 }}>
    <CollectionCardItem {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  avatarImage: '/img/defaultAvatar.png',
  imageSrc: '/img/sample_nft_1.jpg',
  name: 'Bored Ape Yacht Club',
  description:
    'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
}

export const Expanded = Template.bind({})
Expanded.args = {
  expanded: true,
  avatarImage: '/img/defaultAvatar.png',
  imageSrc: '/img/sample_nft_1.jpg',
  name: 'Bored Ape Yacht Club',
  description:
    'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
}
