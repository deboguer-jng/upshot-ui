import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import List from '../List'
import ListBody from '../ListBody'
import ListItem from '../ListItem'
import ListCell from './'

export default {
  title: 'Layout/ListCell',
  component: ListCell,
  argTypes: {
    children: {
      description: 'Slot for inner content.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof ListCell>

const Template: ComponentStory<typeof ListCell> = (args) => (
  <List sx={{ p: 4, bg: 'background' }}>
    <ListBody>
      <ListItem>
        <ListCell {...args} />
      </ListItem>
    </ListBody>
  </List>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Content',
}
