import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Radio from './'

export default {
  title: '@UI/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />


export const defaultRadio = Template.bind({})
defaultRadio.args = {
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