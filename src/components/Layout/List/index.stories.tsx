import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import List from './'
import ListBody from '../ListBody'
import ListItem from '../ListItem'
import ListCell from '../ListCell'

export default {
  title: 'Layout/List',
  component: List,
  argTypes: {
    children: {
      description: 'Slot for a ListHead or ListBody.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => <List {...args} />

export const Default = Template.bind({})
Default.args = {
  p: 4,
  bg: 'background',
  children: (
    <ListBody>
      <ListItem>
        {[...new Array(3)].map((_, i) => (
          <ListCell key={i}>Item {i + 1}</ListCell>
        ))}
      </ListItem>
    </ListBody>
  ),
}
