import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from '../Table'
import TableHead from './'
import TableItem from '../TableItem'
import TableCell from '../TableCell'

export default {
  title: 'Layout/TableHead',
  component: TableHead,
  argTypes: {
    children: {
      description: 'Slot for a TableItem.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof TableHead>

const Template: ComponentStory<typeof TableHead> = (args) => (
  <Table sx={{ p: 4, bg: 'background' }}>
    <TableHead {...args} />
  </Table>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <TableItem>
      {[...new Array(3)].map((_, i) => (
        <TableCell key={i}>Item {i + 1}</TableCell>
      ))}
    </TableItem>
  ),
}
