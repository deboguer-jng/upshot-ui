import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'
import smallData from './smallData.json'
// import bigData from './bigData.json'
import bigData from './bigData2.json'

import ScatterChart from './'

export default {
  title: '@UI/ScatterChart',
  component: ScatterChart,
} as ComponentMeta<typeof ScatterChart>

const Template: ComponentStory<typeof ScatterChart> = (args) => (
  <Box sx={{ height: 500, width: '100%' }}>
    <ScatterChart {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Supermental',
  data: smallData,
}

export const BigData = Template.bind({})
BigData.args = {
  name: 'Azuki',
  data: bigData,
}

export const Loading = Template.bind({})
Loading.args = { loading: true }

export const NoData = Template.bind({})

export const Error = Template.bind({})
Error.args = { error: true }
