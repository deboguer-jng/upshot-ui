import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Icon from '../Icon'

import IconButton from './'

export default {
  title: '@UI/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  onClick: () => {},
  children: <Icon aria-label="arrow pointing right" icon="arrowSmallRight" />,
}
