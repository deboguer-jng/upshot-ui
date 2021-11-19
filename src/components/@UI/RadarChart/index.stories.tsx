import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'

import RadarChart from './'

export default {
  title: '@UI/RadarChart',
  component: RadarChart,
} as ComponentMeta<typeof RadarChart>

const Template: ComponentStory<typeof RadarChart> = (args) => (
  <Box sx={{ height: 500 }}>
    <RadarChart {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  data: {
    series: [
      {
        name: 'Portfolio Distribution',
        data: [5, 10, 20, 30, 35],
      },
    ],
    labels: ['CyberKongz', 'CryptoPunks', 'The Sandbox', 'Doodles', 'BAYC'],
  },
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}

export const NoData = Template.bind({})
NoData.args = {
  noData: true,
}

export const error = Template.bind({})
error.args = {
  error: true,
}
