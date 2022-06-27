import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NotifPopper, { NotifRow } from '.'

export default {
  title: 'App/Navbar/Notification',
  component: NotifPopper,
} as ComponentMeta<typeof NotifPopper>

const TemplatePopper: ComponentStory<typeof NotifPopper> = (args) => (
  <NotifPopper {...args} />
)

const TemplateRow: ComponentStory<typeof NotifPopper> = (args) => (
  <NotifRow {...args} />
)

export const exampleNotifs = {
  unread: [
    {
      url: 'https://upshot.xyz/analytics/collection/4489',
      image: 'https://ipfs.io/ipfs/QmQKg9WhKXjR9P9okW6tD5bKnisrZKfFKrCq6GGgf6iGxz',
      title: 'CryptoDickButts',
      description: 'Going to the m00n',
      price: 420,
      percentage: 69,
      time: 'now',
    }
  ],
  read: [
    {
      url: 'https://upshot.xyz/analytics/collection/4489',
      image: 'https://ipfs.io/ipfs/QmQKg9WhKXjR9P9okW6tD5bKnisrZKfFKrCq6GGgf6iGxz',
      title: 'CryptoDickButts',
      description: 'Going to the m00n',
      price: 420,
      percentage: 69,
      time: 'now',
    }
  ]
}

export const Popper = TemplatePopper.bind({})
Popper.args = {
  notifs: exampleNotifs
}

export const Row = TemplateRow.bind({})
Row.args = {
  url: 'https://upshot.xyz/analytics/collection/4489',
  image: 'https://ipfs.io/ipfs/QmQKg9WhKXjR9P9okW6tD5bKnisrZKfFKrCq6GGgf6iGxz',
  title: 'CryptoDickButts',
  description: 'Going to the m00n',
  price: 420,
  percentage: 69,
  time: 'now',  
}