import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Alert from './'

export default {
  title: '@UI/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => 
  <Alert 
    {...args} />

export const Generic = Template.bind({})
Generic.args = { children: 'Generic alert message.' }

export const Pending = Template.bind({})
Pending.args = { variant: 'pending', children: <>Transaction pending. <a>View on Etherscan</a></> }

export const Error = Template.bind({})
Error.args = { variant: 'error', children: 'Error. Please verify wallet to continue.' }

export const Success = Template.bind({})
Success.args = { variant: 'success', children: <>Transaction complete. <a>View on Etherscan</a></> }