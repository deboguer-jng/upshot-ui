import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Table from '../Table'
import TableBody from '../TableBody'
import TableRow from './'
import TableCell from '../TableCell'

export default {
  title: 'Layout/TableRow',
  component: TableRow,
  argTypes: {
    children: {
      description: 'Slot for a TableCell.',
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof TableRow>

const Template: ComponentStory<typeof TableRow> = (args) => (
  <Table sx={{ p: 4, bg: 'background' }}>
    <TableBody>
      <TableRow {...args} />
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
