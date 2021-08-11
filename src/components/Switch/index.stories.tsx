import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '../Icon'

import Switch from './'

export default {
  title: '@UI/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
