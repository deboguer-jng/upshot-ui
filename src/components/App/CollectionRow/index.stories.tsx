import React from 'react'
import { ComponentMeta } from '@storybook/react'

import CollectionTable from '../CollectionTable'
import CollectionRow, { CollectionRowProps } from '../CollectionRow'
import TableHead from '../../Layout/TableHead'
import TableBody from '../../Layout/TableBody'
import TableRow from '../../Layout/TableRow'
import TableCell from '../../Layout/TableCell'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import { useTheme } from '../../../themes/UpshotUI'
import { Flex } from 'theme-ui'

type CollectionItems = {
  items: (CollectionRowProps & { columns: string })[]
}

export default {
  title: 'App/CollectionRow',
  component: CollectionRow,
} as ComponentMeta<typeof CollectionRow>

const Template = ({ items }: CollectionItems) => {
  const { theme } = useTheme()
  const breakpointIndex = useBreakpointIndex()
  const isMobile = breakpointIndex <= 1

  const COLUMNS = ['Column 1', 'Column 2', 'Column 3']

  return (
    <CollectionTable>
      <TableHead sx={{ color: theme.colors['grey-500'] }}>
        <TableRow>
          <TableCell>Name</TableCell> {/* Avatar */}
          <TableCell></TableCell> {/* Name */}
          {isMobile ? (
            // Mobile only shows the first and last columns
            <TableCell>{`${COLUMNS[0]} & ${COLUMNS.slice(-1)[0]}`}</TableCell>
          ) : (
            <>
              {COLUMNS.map((col, key) => (
                <TableCell {...{ key }}>{col}</TableCell>
              ))}
              <TableCell></TableCell>
            </>
          )}
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ columns, ...args }, key) => (
          <CollectionRow
            children={
              isMobile ? (
                /* Mobile stacks the first & last columns. */
                <TableCell sx={{ maxWidth: 100 }}>
                  <Flex
                    sx={{ flexDirection: 'column', alignItems: 'flex-end' }}
                  >
                    <Flex>{columns[0]}</Flex>
                    <Flex>{columns.slice(-1)[0]}</Flex>
                  </Flex>
                </TableCell>
              ) : (
                COLUMNS.map((column, key) => (
                  <TableCell sx={{ maxWidth: 100 }} {...{ key }}>
                    {column}
                  </TableCell>
                ))
              )
            }
            {...{ key, ...args }}
          />
        ))}
      </TableBody>
    </CollectionTable>
  )
}

export const Default = Template.bind({})
Default.args = {
  items: [
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales quis ex nec sagittis.',
      imageSrc:
        'https://res.cloudinary.com/upshot-inc/image/upload/v1628114947/xriprlqfkheg6dzhl6j7.png',
      columns: ['Value 1', 'Value 2', 'Value 3'],
      pixelated: true,
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales quis ex nec sagittis.',
      imageSrc:
        'https://res.cloudinary.com/upshot-inc/image/upload/v1631595287/e9pnaaeah4a1jw8kpmgd.jpg',
      columns: ['Value 1', 'Value 2', 'Value 3'],
    },
    {
      title: 'CryptoPunk #1025',
      imageSrc: '/img/defaultAvatar.png',
      columns: ['Value 1', 'Value 2', 'Value 3'],
    },
  ],
}
