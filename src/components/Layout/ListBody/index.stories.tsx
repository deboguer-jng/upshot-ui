import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ListBody from './'
import List from '../List'
import ListItem from '../ListItem'
import ListCell from '../ListCell'

export default {
  title: 'Layout/ListBody',
  component: ListBody,
  argTypes: {
    children: {
      description: 'Slot for a ListItem.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof ListBody>

const Template: ComponentStory<typeof ListBody> = (args) => (
  <List sx={{ p: 4, bg: 'background' }}>
    <ListBody {...args} />
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
