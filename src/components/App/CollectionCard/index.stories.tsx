import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'
import CollectionCard from './'
import { Image } from 'theme-ui'

export default {
  title: 'App/CollectionCard',
  component: CollectionCard,
} as ComponentMeta<typeof CollectionCard>

const Template: ComponentStory<typeof CollectionCard> = (args) => (
  <Box sx={{ maxWidth: 360 }}>
    <CollectionCard {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Bored Ape Yacht Club',
  total: 25,
  hasSeeAll: true,
  children: [...new Array(3)].map((_, idx) => (
    <Box
      key={idx}
      sx={{
        width: '100%',
        '&::after': {
          content: "''",
          display: 'block',
          paddingTop: '100%',
          backgroundImage: `url(/img/sample_nft_${(idx % 3) + 1}.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: 'sm',
        },
      }}
    />
  )),
}

export const SmallCollection = Template.bind({})
SmallCollection.args = {
  name: 'Bored Ape Yacht Club',
  total: 2,
  hasSeeAll: false,
  children: [...new Array(2)].map((_, idx) => (
    <Image
      src={`/img/sample_nft_${(idx % 3) + 1}.jpg`}
      key={idx}
      sx={{ borderRadius: 'sm', width: '100%', height: '100%' }}
    />
  )),
}
