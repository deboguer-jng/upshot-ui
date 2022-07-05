import React from 'react'
import FollowerModal from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'App/FollowerModal',
  component: FollowerModal,
} as ComponentMeta<typeof FollowerModal>

const Template: ComponentStory<typeof FollowerModal> = (args) => {
  const onFollow = (id: number) => {}
  const onUnFollow = (id: number) => {}
  const onClose = () => {}

  return (
    <FollowerModal
      {...args}
      onFollow={onFollow}
      onClose={onClose}
      onUnFollow={onUnFollow}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  userAddress: 'emmons.eth',
  following: Array(10).fill({
    id: 677519,
    img: '/img/defaultAvatar.png',
    address: 'Sam.eth',
  }),
  follower: Array(20).fill({
    id: 677519,
    img: '/img/defaultAvatar.png',
    address: 'Sam.eth',
    isFollowing: true,
  }),
}
