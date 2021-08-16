import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ChartArea } from './'
import UpshotThemeProvider from '../../themes'

export default {
  title: '@UI/Chart',
  component: ChartArea,
} as ComponentMeta<typeof ChartArea>

const Template: ComponentStory<typeof ChartArea> = (args) => (
  <UpshotThemeProvider>
    <ChartArea {...args} />
  </UpshotThemeProvider>
)

export const Tiny = Template.bind({})
Tiny.args = {
  size: 'xs',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const Medium = Template.bind({})
Medium.args = {}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
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

export const ChartNoSelectedLarge = Template.bind({})
ChartNoSelectedLarge.args = {
  noSelected: true,
  size: 'large',
}
