import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from '../Table'
import TableBody from '../TableBody'
import TableItem from './'
import TableCell from '../TableCell'

export default {
  title: 'Layout/TableItem',
  component: TableItem,
  argTypes: {
    children: {
      description: 'Slot for a TableCell.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof TableItem>

const Template: ComponentStory<typeof TableItem> = (args) => (
  <Table sx={{ p: 4, bg: 'background' }}>
    <TableBody>
      <TableItem {...args} />
    </TableBody>
  </Table>
)

export const Default = Template.bind({})
Default.args = {
  children: (
    <>
      {[...new Array(3)].map((_, i) => (
        <TableCell key={i}>Item {i + 1}</TableCell>
      ))}
    </>
  ),
}
