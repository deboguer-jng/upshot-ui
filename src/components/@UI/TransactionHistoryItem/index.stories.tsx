import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TransactionHistoryItem from '.'

export default {
  title: '@UI/TransactionHistoryItem',
  component: TransactionHistoryItem,
} as ComponentMeta<typeof TransactionHistoryItem>

const Template: ComponentStory<typeof TransactionHistoryItem> = (args) => (
  <TransactionHistoryItem {...args} />
)

export const Sender = Template.bind({})
Sender.args = {
  variant: 'sender',
  text: 'J04m392816swhwt8dx',
}

export const Recipient = Template.bind({})
Recipient.args = {
  variant: 'recipient',
  text: 'J04m392816swhwt8dx',
}
