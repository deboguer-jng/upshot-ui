import React from 'react'
import { ComponentMeta } from '@storybook/react'
import CollectionTable from '../CollectionTable'
import CollectionGridRow, { CollectionGridRowProps } from '../CollectionGridRow'
import Link from '../../@UI/Link'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import { useTheme } from '../../../themes/UpshotUI'
import { Flex, Grid, Box } from 'theme-ui'

type CollectionItems = {
  items: (CollectionGridRowProps & { columns: string })[]
}

export default {
  title: 'App/CollectionGridRow',
  component: CollectionGridRow,
} as ComponentMeta<typeof CollectionGridRow>

const Template = ({ items }: CollectionItems) => {
  const { theme } = useTheme()
  const breakpointIndex = useBreakpointIndex()
  const isMobile = breakpointIndex <= 1

  const COLUMNS = ['Column 1', 'Column 2', 'Column 3']
  const colSpacing = `76px auto repeat(${COLUMNS.length}, max(100px))`

  return (
    <Box>
      <Grid sx={{ color: theme.colors['grey-500'] }} columns={colSpacing}>
        <Box>Name</Box> {/* Avatar */}
        <Box></Box> {/* Name */}
        {isMobile ? (
          // Mobile only shows the first and last columns
          <Box>{`${COLUMNS[0]} & ${COLUMNS.slice(-1)[0]}`}</Box>
        ) : (
          <>
            {COLUMNS.map((col, key) => (
              <Box {...{ key }}>{col}</Box>
            ))}
            <Box />
          </>
        )}
      </Grid>
      {items.map(({ columns, ...args }, key) => (
        <CollectionGridRow
          columns={colSpacing}
          children={
            isMobile ? (
              /* Mobile stacks the first & last columns. */
              <Box sx={{ maxWidth: 100 }}>
                <Flex sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                  <Flex>{columns[0]}</Flex>
                  <Flex>{columns.slice(-1)[0]}</Flex>
                </Flex>
              </Box>
            ) : (
              COLUMNS.map((column, key) => (
                <Box sx={{ maxWidth: 100 }} {...{ key }}>
                  {column}
                </Box>
              ))
            )
          }
          {...{ key, ...args }}
        />
      ))}
    </Box>
  )
}

const TemplateLinkRow = ({ items }: CollectionItems) => {
  const { theme } = useTheme()
  const breakpointIndex = useBreakpointIndex()
  const isMobile = breakpointIndex <= 1

  const COLUMNS = ['Column 1', 'Column 2', 'Column 3']
  const colSpacing = `76px auto repeat(${COLUMNS.length}, max(100px)) 46px`

  return (
    <Box>
      <Grid
        sx={{
          color: theme.colors['grey-500'],
          padding: [1, 3].map((n) => theme.space[n] + 'px').join(' '),
        }}
        columns={colSpacing}
      >
        <Box></Box> {/* Avatar */}
        <Box>Name</Box> {/* Name */}
        {isMobile ? (
          // Mobile only shows the first and last columns
          <Box>{`${COLUMNS[0]} & ${COLUMNS.slice(-1)[0]}`}</Box>
        ) : (
          <>
            {COLUMNS.map((col, key) => (
              <Box {...{ key }}>{col}</Box>
            ))}
            <Box />
          </>
        )}
      </Grid>
      {items.map(({ columns, ...args }, key) => (
        <CollectionGridRow
          columns={colSpacing}
          sx={{ border: 'thin solid red' }}
          href="#"
          onClick={() => {
            console.log('row clicked')
          }}
          children={
            isMobile ? (
              /* Mobile stacks the first & last columns. */
              <Box sx={{ maxWidth: 100 }}>
                <Flex sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                  <Flex>{columns[0]}</Flex>
                  <Flex>{columns.slice(-1)[0]}</Flex>
                </Flex>
              </Box>
            ) : (
              COLUMNS.map((column, key) => (
                <Box sx={{ maxWidth: 100 }} {...{ key }}>
                  {column}
                </Box>
              ))
            )
          }
          {...{ key, ...args }}
        />
      ))}
    </Box>
  )
}

const args = {
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

export const Default = Template.bind({})
Default.args = args

export const LinkRow = TemplateLinkRow.bind({})
LinkRow.args = args
