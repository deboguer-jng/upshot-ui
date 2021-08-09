import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './'

export default {
  title: '@UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  label: 'Button',
}

export const Active = Template.bind({})
Active.args = {
  status: 'active',
  label: 'Button',
}

export const FixedWidth = Template.bind({})
FixedWidth.args = {
  status: 'active',
  label: 'Button',
  width: 300,
}
