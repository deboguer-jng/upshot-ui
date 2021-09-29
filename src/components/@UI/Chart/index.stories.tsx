import React, { useState, useMemo } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Chart from './'

export default {
  title: '@UI/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />

// Leaving this for reference temporarily
const HoverTemplate: ComponentStory<typeof Chart> = (args) => {
  const [label, setLabel] = useState('')

  const handleHover = (e: React.MouseEvent, ctx: any, data: any) => {
    const { dataPointIndex } = data
    const dataPoint = args?.data?.[0]?.data?.[dataPointIndex]

    setLabel(dataPoint ? dataPoint.toString() : '')
  }

  const chart = useMemo(
    () => <Chart dataPointMouseEnter={handleHover} {...args} />,
    [args.data]
  )

  return (
    <div>
      Hover: {label}
      {chart}
    </div>
  )
}

export const Main = Template.bind({})
Main.args = {
  data: [
    {
      name: 'CryptoPunks',
      data: [
        [1327359600000, 3.95],
        [1327446000000, 11.34],
        [1327532400000, 8.18],
        [1327618800000, 26.05],
        [1327878000000, 60.0],
        [1327964400000, 62.95],
        [1328050800000, 55.24],
        [1328137200000, 45.29],
        [1328223600000, 80.85],
        [1328482800000, 85.86],
        [1328569200000, 86.28],
      ],
      atl: 3.95,
      ath: 86.28,
      currentValue: {
        timestamp: 1328569200000,
        value: 86.28
      }
    },
    {
      name: 'Chromie Squiggles',
      data: [
        [1327359600000, 13.95],
        [1327446000000, 7.34],
        [1327532400000, 9.18],
        [1327618800000, 10.05],
        [1327878000000, 21.0],
        [1327964400000, 35.95],
        [1328050800000, 26.24],
        [1328137200000, 20.29],
        [1328223600000, 50.85],
        [1328482800000, 28.86],
        [1328569200000, 42.28],
      ],
      atl: 7.34,
      ath: 50.85,
      currentValue: {
        timestamp: 1328569200000,
        value: 42.28
      }
    },
  ],
}

export const MainHover = HoverTemplate.bind({})
MainHover.args = {
  data: [
    {
      name: 'CryptoPunks',
      data: [
        [1327359600000, 3.95],
        [1327446000000, 11.34],
        [1327532400000, 8.18],
        [1327618800000, 26.05],
        [1327878000000, 60.0],
        [1327964400000, 62.95],
        [1328050800000, 55.24],
        [1328137200000, 45.29],
        [1328223600000, 80.85],
        [1328482800000, 85.86],
        [1328569200000, 86.28],
      ],
      atl: 3.95,
      ath: 86.28,
      currentValue: {
        timestamp: 1328569200000,
        value: 86.28
      }
    },
    {
      name: 'Chromie Squiggles',
      data: [
        [1327359600000, 13.95],
        [1327446000000, 7.34],
        [1327532400000, 9.18],
        [1327618800000, 10.05],
        [1327878000000, 21.0],
        [1327964400000, 35.95],
        [1328050800000, 26.24],
        [1328137200000, 20.29],
        [1328223600000, 50.85],
        [1328482800000, 28.86],
        [1328569200000, 42.28],
      ],
      atl: 7.34,
      ath: 50.85,
      currentValue: {
        timestamp: 1328569200000,
        value: 42.28
      }
    },
  ],
}

export const Embedded = Template.bind({})
Embedded.args = {
  data: [
    {
      name: 'CryptoPunks',
      data: [
        [1327359600000, 3.95],
        [1327446000000, 11.34],
        [1327532400000, 8.18],
        [1327618800000, 26.05],
        [1327878000000, 60.0],
        [1327964400000, 62.95],
        [1328050800000, 55.24],
        [1328137200000, 45.29],
        [1328223600000, 80.85],
        [1328482800000, 85.86],
        [1328569200000, 86.28],
      ],
      atl: 3.95,
      ath: 86.28,
      currentValue: {
        timestamp: 1328569200000,
        value: 86.28
      }
    },
    {
      name: 'Chromie Squiggles',
      data: [
        [1327359600000, 13.95],
        [1327446000000, 7.34],
        [1327532400000, 9.18],
        [1327618800000, 10.05],
        [1327878000000, 21.0],
        [1327964400000, 35.95],
        [1328050800000, 26.24],
        [1328137200000, 20.29],
        [1328223600000, 50.85],
        [1328482800000, 28.86],
        [1328569200000, 42.28],
      ],
      atl: 7.34,
      ath: 50.85,
      currentValue: {
        timestamp: 1328569200000,
        value: 42.28
      }
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
