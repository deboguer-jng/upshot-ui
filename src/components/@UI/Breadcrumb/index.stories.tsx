import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Breadcrumb from './'

export default {
  title: '@UI/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text: 'Analytics Home',
}
