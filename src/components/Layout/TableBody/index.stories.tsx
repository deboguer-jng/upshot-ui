import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TableBody from './'
import Table from '../Table'
import TableItem from '../TableItem'
import TableCell from '../TableCell'

export default {
  title: 'Layout/TableBody',
  component: TableBody,
  argTypes: {
    children: {
      description: 'Slot for a TableItem.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof TableBody>

const Template: ComponentStory<typeof TableBody> = (args) => (
  <Table sx={{ p: 4, bg: 'background' }}>
    <TableBody {...args} />
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
