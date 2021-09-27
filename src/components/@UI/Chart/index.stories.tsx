import React, { useState, useMemo } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Chart from './'

export default {
  title: '@UI/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />

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
      name: 'Series 1',
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        [1328050800000, 31.24],
        [1328137200000, 31.29],
        [1328223600000, 31.85],
        [1328482800000, 31.86],
        [1328569200000, 32.28],
      ],
    },
    {
      name: 'Series 2',
      data: [
        [1331161200000, 33.05],
        [1331247600000, 33.64],
        [1331506800000, 33.56],
        [1331593200000, 34.22],
        [1331679600000, 33.77],
        [1331766000000, 34.17],
        [1331852400000, 33.82],
        [1332111600000, 34.51],
        [1332198000000, 33.16],
        [1332284400000, 33.56],
        [1332370800000, 33.71],
      ],
    },
  ],
}

export const MainHover = HoverTemplate.bind({})
MainHover.args = {
  data: [
    {
      name: 'Series 1',
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        [1328050800000, 31.24],
        [1328137200000, 31.29],
        [1328223600000, 31.85],
        [1328482800000, 31.86],
        [1328569200000, 32.28],
      ],
    },
    {
      name: 'Series 2',
      data: [
        [1331161200000, 33.05],
        [1331247600000, 33.64],
        [1331506800000, 33.56],
        [1331593200000, 34.22],
        [1331679600000, 33.77],
        [1331766000000, 34.17],
        [1331852400000, 33.82],
        [1332111600000, 34.51],
        [1332198000000, 33.16],
        [1332284400000, 33.56],
        [1332370800000, 33.71],
      ],
    },
  ],
}

export const Embedded = Template.bind({})
Embedded.args = {
  data: [
    {
      name: 'Series 1',
      data: [
        [1327359600000, 30.95],
        [1327446000000, 31.34],
        [1327532400000, 31.18],
        [1327618800000, 31.05],
        [1327878000000, 31.0],
        [1327964400000, 30.95],
        [1328050800000, 31.24],
        [1328137200000, 31.29],
        [1328223600000, 31.85],
        [1328482800000, 31.86],
        [1328569200000, 32.28],
      ],
    },
    {
      name: 'Series 2',
      data: [
        [1331161200000, 33.05],
        [1331247600000, 33.64],
        [1331506800000, 33.56],
        [1331593200000, 34.22],
        [1331679600000, 33.77],
        [1331766000000, 34.17],
        [1331852400000, 33.82],
        [1332111600000, 34.51],
        [1332198000000, 33.16],
        [1332284400000, 33.56],
        [1332370800000, 33.71],
      ],
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
