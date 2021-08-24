import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from './'
import TableBody from '../TableBody'
import TableItem from '../TableItem'
import TableCell from '../TableCell'

export default {
  title: 'Layout/Table',
  component: Table,
  argTypes: {
    children: {
      description: 'Slot for a TableHead or TableBody.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  p: 4,
  bg: 'background',
  children: (
    <TableBody>
      <TableItem>
        {[...new Array(3)].map((_, i) => (
          <TableCell key={i}>Item {i + 1}</TableCell>
        ))}
      </TableItem>
    </TableBody>
  ),
}
