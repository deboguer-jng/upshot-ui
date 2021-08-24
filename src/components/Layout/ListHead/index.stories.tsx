import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import List from '../List'
import ListHead from './'
import ListItem from '../ListItem'
import ListCell from '../ListCell'

export default {
  title: 'Layout/ListHead',
  component: ListHead,
  argTypes: {
    children: {
      description: 'Slot for a ListItem.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof ListHead>

const Template: ComponentStory<typeof ListHead> = (args) => (
  <List sx={{ p: 4, bg: 'background' }}>
    <ListHead {...args} />
  </List>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <ListItem>
      {[...new Array(3)].map((_, i) => (
        <ListCell key={i}>Item {i + 1}</ListCell>
      ))}
    </ListItem>
  ),
}
