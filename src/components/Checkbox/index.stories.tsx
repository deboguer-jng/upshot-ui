import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Checkbox from './'

export default {
  title: '@UI/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />


export const defaultCheckbox = Template.bind({})
defaultCheckbox.args = {
  type: 'default',
  text: 'text',
}

export const error = Template.bind({})
error.args = {
  type: 'error',
  text: 'text',
}

export const disabled = Template.bind({})
disabled.args = {
  type: 'disabled',
  text: 'text',
}

export const disabledChecked = Template.bind({})
disabledChecked.args = {
  type: 'disabled',
  text: 'text',
  checked: true,
}