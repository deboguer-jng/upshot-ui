import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import List from '../List'
import ListBody from '../ListBody'
import ListItem from './'
import ListCell from '../ListCell'

export default {
  title: 'Layout/ListItem',
  component: ListItem,
  argTypes: {
    children: {
      description: 'Slot for a ListCell.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof ListItem>

const Template: ComponentStory<typeof ListItem> = (args) => (
  <List sx={{ p: 4, bg: 'background' }}>
    <ListBody>
      <ListItem {...args} />
    </ListBody>
  </List>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      {[...new Array(3)].map((_, i) => (
        <ListCell key={i}>Item {i + 1}</ListCell>
      ))}
    </>
  ),
}
