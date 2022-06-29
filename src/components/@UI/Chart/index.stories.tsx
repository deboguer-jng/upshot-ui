import React, { useState, useMemo } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Chart from './'

export default {
  title: '@UI/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>

const Template: ComponentStory<typeof Chart> = (args) => <Chart height={400} {...args} />

export const Main = Template.bind({})
Main.args = {
  data: [
    {
      name: 'Mutant Ape Yacht Club',
      url: 'https://upshot.io/',
      data: [
        {x: 1327359600000, y: 3.95},
        {x: 1327446000000, y: 11.34},
        {x: 1327532400000, y: 8.18},
        {x: 1327618800000, y: 26.05},
        {x: 1327878000000, y: 60.0},
        {x: 1327964400000, y: 62.95},
        {x: 1328050800000, y: 55.24},
        {x: 1328137200000, y: 45.29},
        {x: 1328223600000, y: 80.85},
        {x: 1328482800000, y: 85.86},
        {x: 1328569200000, y: 86.28},
      ],
      atl: '3.95',
      ath: '86.28',
      priceUsd: 5434565,
      priceChange: '+16.47%',
    },
    {
      name: 'Bored Ape Yacht Club',
      url: 'https://upshot.io/',
      data: [
        {x: 1327359600000, y: 13.95},
        {x: 1327446000000, y: 7.34},
        {x: 1327532400000, y: 9.18},
        {x: 1327618800000, y: 10.05},
        {x: 1327878000000, y: 21.0},
        {x: 1327964400000, y: 35.95},
        {x: 1328050800000, y: 26.24},
        {x: 1328137200000, y: 20.29},
        {x: 1328223600000, y: 50.85},
        {x: 1328482800000, y: 28.86},
        {x: 1328569200000, y: 42.28},
      ],
      atl: '7.34',
      ath: '50.85',
      priceUsd: 5434565,
      priceChange: '+16.47%',
    },
    {
      name: 'Miami DAO',
      url: 'https://upshot.io/',
      data: [
        {x: 1327359600000, y: 12.95},
        {x: 1327446000000, y: 4.34},
        {x: 1327532400000, y: 35.18},
        {x: 1327618800000, y: 32.05},
        {x: 1327878000000, y: 21.0},
        {x: 1327964400000, y: 12.95},
        {x: 1328050800000, y: 32.24},
        {x: 1328137200000, y: 12.29},
        {x: 1328223600000, y: 0.85},
        {x: 1328482800000, y: 0.3},
        {x: 1328569200000, y: 1.28},
      ],
      atl: '7.34',
      ath: '50.85',
      priceUsd: 5434565,
      priceChange: '+16.47%',
    },
  ],
}

export const MainSingle = Template.bind({})
MainSingle.args = {
  data: [
    {
      name: 'Chromie Squiggles',
      url: 'https://upshot.io/',
      data: [
        {x: 1327359600000, y: 13.95},
        {x: 1327446000000, y: 7.34},
        {x: 1327532400000, y: 9.18},
        {x: 1327618800000, y: 10.05},
        {x: 1327878000000, y: 21.0},
        {x: 1327964400000, y: 35.95},
        {x: 1328050800000, y: 26.24},
        {x: 1328137200000, y: 20.29},
        {x: 1328223600000, y: 50.85},
        {x: 1328482800000, y: 28.86},
        {x: 1328569200000, y: 42.28},
      ],
      atl: 7.34,
      ath: 50.85,
      priceUsd: 5434565,
      priceChange: '+16.47%',
    },
  ],
}

export const Embedded = Template.bind({})
Embedded.args = {
  data: [
    {
      name: 'CryptoPunks',
      url: 'https://upshot.io/',
      data: [
        {x: 1327359600000, y: 3.95},
        {x: 1327446000000, y: 11.34},
        {x: 1327532400000, y: 8.18},
        {x: 1327618800000, y: 26.05},
        {x: 1327878000000, y: 60.0},
        {x: 1327964400000, y: 62.95},
        {x: 1328050800000, y: 55.24},
        {x: 1328137200000, y: 45.29},
        {x: 1328223600000, y: 80.85},
        {x: 1328482800000, y: 85.86},
        {x: 1328569200000, y: 86.28},
      ],
      atl: 3.95,
      ath: 86.28,
      priceUsd: 5434565,
      priceChange: '+16.47%',
    },
    {
      name: 'Chromie Squiggles',
      url: 'https://upshot.io/',
      data: [
        {x: 1327359600000, y: 13.95},
        {x: 1327446000000, y: 7.34},
        {x: 1327532400000, y: 9.18},
        {x: 1327618800000, y: 10.05},
        {x: 1327878000000, y: 21.0},
        {x: 1327964400000, y: 35.95},
        {x: 1328050800000, y: 26.24},
        {x: 1328137200000, y: 20.29},
        {x: 1328223600000, y: 50.85},
        {x: 1328482800000, y: 28.86},
        {x: 1328569200000, y: 42.28},
      ],
      atl: 7.34,
      ath: 50.85,
      priceUsd: 5434565,
      priceChange: '+16.47%',
    },
  ],
  embedded: true,
}

export const ChartLoading = Template.bind({})
ChartLoading.args = {
  loading: true,
}

export const ChartNoData = Template.bind({})
ChartNoData.args = {
  noData: true,
}

export const ChartError = Template.bind({})
ChartError.args = {
  error: true,
}

export const ChartNoSelected = Template.bind({})
ChartNoSelected.args = {
  noSelected: true,
}
