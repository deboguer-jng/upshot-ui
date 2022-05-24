import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'
import NFTCard from './'

export default {
  title: 'App/NFTCard',
  component: NFTCard,
} as ComponentMeta<typeof NFTCard>

const Template: ComponentStory<typeof NFTCard> = (args) => (
  <Box sx={{ maxWidth: 350 }}>
    <NFTCard {...args} sx={{ height: 350}} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  avatarImage: '/img/defaultAvatar.png',
  imageSrc: '/img/sample_nft_1.jpg',
  collection: 'Bored Ape Yacht Club',
  name:
    'The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.',
  tokenId: '#1245',
  listPriceEth: '3120000000000000000',
  listPriceUSD: 300,
  appraisalPriceETH: '4170000000000000000',
  appraisalPriceUSD: 2000,
  listAppraisalPercentage: 17.2,
}

export const ListPriceSupported = Template.bind({})
ListPriceSupported.args = {
  avatarImage: '/img/defaultAvatar.png',
  imageSrc: '/img/sample_nft_1.jpg',
  collection: 'Bored Ape Yacht Club',
  name:
    'Bored Ape Yacht Club #4287',
  listPriceEth: '3120000000000000000',
  listPriceUSD: 300,
  appraisalPriceETH: '4170000000000000000',
  appraisalPriceUSD: 2000,
  listAppraisalPercentage: 17.2,
}

export const NotListedAppraised = Template.bind({})
NotListedAppraised.args = {
  avatarImage: '/img/defaultAvatar.png',
  imageSrc: '/img/sample_nft_1.jpg',
  collection: 'Bored Ape Yacht Club',
  name:
    'Bored Ape Yacht Club #4287',
  appraisalPriceETH: '4170000000000000000',
  appraisalPriceUSD: 2000,
  listAppraisalPercentage: 17.2,
}

export const ListedUnappraised = Template.bind({})
ListedUnappraised.args = {
  avatarImage: '/img/defaultAvatar.png',
  imageSrc: '/img/sample_nft_1.jpg',
  collection: 'Bored Ape Yacht Club',
  name:
    'Bored Ape Yacht Club #4287',
  listPriceEth: '3120000000000000000',
  listPriceUSD: 300,
}

export const UnlistedUnappraised = Template.bind({})
UnlistedUnappraised.args = {
  avatarImage: '/img/defaultAvatar.png',
  imageSrc: '/img/sample_nft_1.jpg',
  collection: 'Bored Ape Yacht Club',
  name:
    'Bored Ape Yacht Club #4287',
}
