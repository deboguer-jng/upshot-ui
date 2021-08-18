import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Avatar from './'

export default {
  title: '@UI/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  src: '/img/defaultAvatar.png',
  size: 'xl',
  color: 'black',
}

export const Large = Template.bind({})
Large.args = {
  src: '/img/defaultAvatar.png',
  size: 'lg',
  color: 'black',
}

export const Medium = Template.bind({})
Medium.args = {
  src: '/img/defaultAvatar.png',
  size: 'md',
  color: 'black',
}

export const Small = Template.bind({})
Small.args = {
  src: '/img/defaultAvatar.png',
  size: 'sm',
  color: 'black',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  src: '/img/defaultAvatar.png',
  size: 'xs',
  color: 'black',
}

export const Yellow = Template.bind({})
Yellow.args = {
  src: '/img/defaultAvatar.png',
  color: 'yellow',
}
