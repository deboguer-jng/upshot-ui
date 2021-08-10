import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputRounded from './'

export default {
  title: '@UI/InputRounded',
  component: InputRounded,
} as ComponentMeta<typeof InputRounded>

const Template: ComponentStory<typeof InputRounded> = (args) => (
  <InputRounded {...args} />
)

export const Default = Template.bind({})
Default.args = { placeholder: 'Search...', sx: { width: 300 } }
