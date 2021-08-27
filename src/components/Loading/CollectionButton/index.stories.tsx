import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CollectionButtonTemplate from './'

export default {
  title: '@Skeleton/CollectionButtonTemplate',
  component: CollectionButtonTemplate,
} as ComponentMeta<typeof CollectionButtonTemplate>

const Template: ComponentStory<typeof CollectionButtonTemplate> = (args) => <CollectionButtonTemplate {...args} />


export const Default = Template.bind({})
Default.args = {
  type: 'CollectionFlex',
  sx: { width: '100%', height: '46px' }
}
