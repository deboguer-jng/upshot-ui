import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ChartArea } from './'

export default {
  title: '@UI/Chart',
  component: ChartArea,
} as ComponentMeta<typeof ChartArea>

const Template: ComponentStory<typeof ChartArea> = (args) => (
  <ChartArea {...args} />
)

export const Main = Template.bind({})
Main.args = {}

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

export const ChartNoSelectedLarge = Template.bind({})
ChartNoSelectedLarge.args = {
  noSelected: true,
  size: 'large',
}
