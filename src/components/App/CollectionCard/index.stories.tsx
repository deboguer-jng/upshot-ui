import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'
import CollectionCard from './'

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
}
