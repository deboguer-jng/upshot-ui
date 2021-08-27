import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AvatarInitials from './'

export default {
  title: '@UI/AvatarInitials',
  component: AvatarInitials,
} as ComponentMeta<typeof AvatarInitials>

const Template: ComponentStory<typeof AvatarInitials> = (args) => (
  <AvatarInitials {...args} />
)

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  size: 'xl',
  children: 'up',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  children: 'up',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  children: 'up',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  children: 'u',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
  children: 'u',
}
