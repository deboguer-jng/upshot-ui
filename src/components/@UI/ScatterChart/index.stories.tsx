import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'

import ScatterChart from './'

export default {
  title: '@UI/ScatterChart',
  component: ScatterChart,
} as ComponentMeta<typeof ScatterChart>

const Template: ComponentStory<typeof ScatterChart> = (args) => (
  <Box sx={{ height: 500 }}>
    <ScatterChart {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  data: [
    {
      name: 'Chromie Squiggles',
      data: [
        [1327359600000, 13.95, '1455', '0x1234...abcd', 500, 'addy.eth'],
        [1327446000000, 7.34, '1455', '0x1234...abcd', 500, 'addy.eth'],
        [1327532400000, 9.18, '1455', '0x1234...abcd', 500, ''],
        [1327618800000, 10.05, '1455', '0x1234...abcd', 500, ''],
        [1327878000000, 21.0, '1455', '0x1234...abcd', 500, ''],
        [1327964400000, 35.95, '1455', '0x1234...abcd', 500, ''],
        [1328050800000, 26.24, '1455', '0x1234...abcd', 500, 'addy.eth'],
        [1328137200000, 20.29, '1455', '0x1234...abcd', 999, 'addy.eth'],
        [1328223600000, 50.85, '1455', '0x1234...abcd', 999, ''],
        [1328482800000, 28.86, '1455', '0x1234...abcd', 999, ''],
        [1328569200000, 42.28, '1455', '0x1234...abcd', 999, 'addy.eth'],
      ],
    },
  ],
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
