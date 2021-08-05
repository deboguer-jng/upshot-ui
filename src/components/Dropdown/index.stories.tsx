import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Dropdown from './'

export default {
  title: '@UI/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

const exampleOptions = [
    {label: 'Label 1', value: 'Value 1'},
    {label: 'Label 2', value: 'Value 2'},
    {label: 'Label 3', value: 'Value 3'}
]

export const Radio = Template.bind({})
Radio.args = { type: 'radio', options: exampleOptions }

export const Checkbox = Template.bind({})
Checkbox.args = { type: 'checkbox', options: exampleOptions }