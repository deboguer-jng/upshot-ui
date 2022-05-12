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
        {x: 1327359600000, y: 13.95, id: '1455', address: '0x1234...abcd', gmi: 500, ens: 'addy.eth'},
        {x: 1327446000000, y: 7.34, id: '1455', address: '0x1234...abcd', gmi: 500, ens: 'addy.eth'},
        {x: 1327532400000, y: 9.18, id: '1455', address: '0x1234...abcd', gmi: 500, ens: ''},
        {x: 1327618800000, y: 10.05, id: '1455', address: '0x1234...abcd', gmi: 500, ens: ''},
        {x: 1327878000000, y: 21.0, id: '1455', address: '0x1234...abcd', gmi: 500, ens: ''},
        {x: 1327964400000, y: 35.95, id: '1455', address: '0x1234...abcd', gmi: 500, ens: ''},
        {x: 1328050800000, y: 26.24, id: '1455', address: '0x1234...abcd', gmi: 500, ens: 'addy.eth'},
        {x: 1328050800000, y: 25, id: '1455', address: '0x1234...abcd', gmi: 999, ens: 'addy.eth'},
        {x: 1328137200000, y: 20.29, id: '1455', address: '0x1234...abcd', gmi: 999, ens: 'addy.eth'},
        {x: 1328223600000, y: 50.85, id: '1455', address: '0x1234...abcd', gmi: 999, ens: ''},
        {x: 1328482800000, y: 28.86, id: '1455', address: '0x1234...abcd', gmi: 999, ens: ''},
        {x: 1328569200000, y: 42.28, id: '1455', address: '0x1234...abcd', gmi: 999, ens: 'addy.eth'},
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
