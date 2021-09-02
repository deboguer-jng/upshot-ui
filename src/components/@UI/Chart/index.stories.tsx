import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Chart from './'

export default {
  title: '@UI/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />

export const Main = Template.bind({})
Main.args = {
  data: [
    {
      name: 'Series 1',
      data: [31, 40, 28, 32, 51, 42, 109, 100],
    },
    {
      name: 'Series 2',
      data: [11, 32, 45, 32, 33, 34, 52, 41],
    },
  ],
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
