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

export const errorCheckbox = Template.bind({})
errorCheckbox.args = {
  type: 'error',
  text: 'text',
}

export const disabledCheckbox = Template.bind({})
disabledCheckbox.args = {
  type: 'disabled',
  text: 'text',
}