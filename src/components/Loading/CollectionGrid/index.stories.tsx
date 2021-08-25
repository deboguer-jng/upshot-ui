import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CollectionGridTemplate from './'

export default {
  title: '@Skeleton/CollectionGridTemplate',
  component: CollectionGridTemplate,
} as ComponentMeta<typeof CollectionGridTemplate>

const Template: ComponentStory<typeof CollectionGridTemplate> = (args) => <CollectionGridTemplate {...args} />


export const Default = Template.bind({})
Default.args = {
  type: 'CollectionGrid',
  sx: { width: '220px', height: '46px' }
}

