import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '../Icon'

import IconButton from './'

export default {
  title: '@UI/IconButton',
  component: IconButton,
  argTypes: {
    children: {
      description: 'Slot for an inner Icon component.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: <Icon aria-label="arrow pointing right" icon="arrowSmallRight" />,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: <Icon aria-label="arrow pointing right" icon="arrowSmallRight" />,
}
