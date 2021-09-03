import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CollectionLineTemplate from './'

export default {
  title: '@Skeleton/CollectionLineTemplate',
  component: CollectionLineTemplate,
} as ComponentMeta<typeof CollectionLineTemplate>

const Template: ComponentStory<typeof CollectionLineTemplate> = (args) => <CollectionLineTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'CollectionLine',
  sx: { width: '100%', height: '62px' }
}

