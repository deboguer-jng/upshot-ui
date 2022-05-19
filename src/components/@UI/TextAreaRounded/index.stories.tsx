import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextareaRounded from './'

export default {
  title: '@UI/TextareaRounded',
  component: TextareaRounded,
} as ComponentMeta<typeof TextareaRounded>

const Template: ComponentStory<typeof TextareaRounded> = (args) => (
  <TextareaRounded {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Write a short description...\nhere',
  sx: { width: 300 },
}

export const Dark = Template.bind({})
Dark.args = {
  dark: true,
  placeholder: 'Write a short description...\nhere',
  sx: { width: 300 },
}

export const WithOverlays = Template.bind({})
WithOverlays.args = {
  optional: true,
  showCount: true,
  maxLength: 100,
  placeholder: 'Write a short description...\nhere',
  sx: { width: 300 },
}
