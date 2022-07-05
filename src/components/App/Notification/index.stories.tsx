import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NotifPopper, { NotifRow } from '.'
import { exampleNotifs } from './exampleData'

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

export const Popper = TemplatePopper.bind({})
Popper.args = {
  notifs: exampleNotifs
}

export const Row = TemplateRow.bind({})
Row.args = exampleNotifs.read[0]