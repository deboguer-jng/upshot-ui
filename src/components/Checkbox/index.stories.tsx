import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Label } from 'theme-ui'

import Checkbox from './'

export default {
  title: '@UI/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Label>
    <Checkbox {...args} />
  </Label>
)

export const Default = Template.bind({})
Default.args = {}

export const error = Template.bind({})
error.args = {
  error: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}