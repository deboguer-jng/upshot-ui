import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CollectorTable from '../CollectorTable'
import TableBody from '../../Layout/TableBody'
import TableHead from '../../Layout/TableHead'
import TableCell from '../../Layout/TableCell'
import TableRow from '../../Layout/TableRow'
import { Box } from 'theme-ui'
import CollectorAccordion from './'

export default {
  title: 'App/CollectorAccordion',
  component: CollectorAccordion,
} as ComponentMeta<typeof CollectorAccordion>

const Template: ComponentStory<typeof CollectorAccordion> = (args) => (
  <Box sx={{ width: 540 }}>
    <CollectorTable>
      <TableHead sx={{ color: 'grey-500' }}>
        <TableRow>
          <TableCell />
          <TableCell>Name</TableCell>
          <TableCell colSpan={2}>NFT Counts</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <CollectorAccordion {...args} />
      </TableBody>
    </CollectorTable>
  </Box>
)

export const Default = Template.bind({})
Default.args = {}
