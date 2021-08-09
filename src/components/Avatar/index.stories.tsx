import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Avatar from './'

export default {
  title: '@UI/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const ExtraLargeInitials = Template.bind({})
ExtraLargeInitials.args = {
  initials: 'up',
  size: 'xl',
}

export const LargeInitials = Template.bind({})
LargeInitials.args = {
  initials: 'up',
  size: 'lg',
}

export const MediumInitials = Template.bind({})
MediumInitials.args = {
  initials: 'up',
  size: 'md',
}

export const SmallInitials = Template.bind({})
SmallInitials.args = {
  initials: 'up',
  size: 'sm',
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  src: '/img/defaultAvatar.png',
  size: 'xl',
}

export const Large = Template.bind({})
Large.args = {
  src: '/img/defaultAvatar.png',
  size: 'lg',
}

export const Medium = Template.bind({})
Medium.args = {
  src: '/img/defaultAvatar.png',
  size: 'md',
}

export const Small = Template.bind({})
Small.args = {
  src: '/img/defaultAvatar.png',
  size: 'sm',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  src: '/img/defaultAvatar.png',
  size: 'xs',
}

export const Yellow = Template.bind({})
Yellow.args = {
  src: '/img/defaultAvatar.png',
  borderColor: 'yellow',
}
