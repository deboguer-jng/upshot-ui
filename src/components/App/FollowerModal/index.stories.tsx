import React from 'react'
import FollowerModal from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'App/FollowerModal',
  component: FollowerModal,
} as ComponentMeta<typeof FollowerModal>

const Template: ComponentStory<typeof FollowerModal> = (args) => {
  const onFollow = (id: number) => {}
  const onClose = () => {}

  return <FollowerModal {...args} onFollow={onFollow} onClose={onClose} />
}

export const Default = Template.bind({})
Default.args = {
  userAddress: 'emmons.eth',
  following: [
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
  ],
  follower: [
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
    {
      img: '/img/defaultAvatar.png',
      address: 'Sam.eth',
    },
  ],
}
