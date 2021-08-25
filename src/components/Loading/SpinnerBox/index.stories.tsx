import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SpinnerBoxTemplate from './'

export default {
  title: '@Skeleton/SpinnerBoxTemplate',
  component: SpinnerBoxTemplate,
} as ComponentMeta<typeof SpinnerBoxTemplate>

const Template: ComponentStory<typeof SpinnerBoxTemplate> = (args) => <SpinnerBoxTemplate {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'LoadingBox',
  sx: { width: '600px', height: '300px' }
}
