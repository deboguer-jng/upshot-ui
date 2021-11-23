import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'
import CollectionCardExpanded from './'
import { Image } from 'theme-ui'

export default {
  title: 'App/CollectionCardExpanded',
  component: CollectionCardExpanded,
} as ComponentMeta<typeof CollectionCardExpanded>

const Template: ComponentStory<typeof CollectionCardExpanded> = (args) => (
  <CollectionCardExpanded {...args} />
)

export const Default = Template.bind({})
Default.args = {
  name: 'Bored Ape Yacht Club',
  total: 25,
  hasSeeAll: true,
  children: [...new Array(3)].map((_, idx) => (
    <Image
      src={`/img/sample_nft_${(idx % 3) + 1}.jpg`}
      key={idx}
      sx={{ borderRadius: 'sm', width: '100%', height: '100%' }}
    />
  )),
}
