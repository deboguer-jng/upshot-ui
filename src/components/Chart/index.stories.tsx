import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ChartArea } from './'
import UpshotThemeProvider from '../../themes'

export default {
  title: 'Example/Chart',
  component: ChartArea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChartArea>

const Template: ComponentStory<typeof ChartArea> = (args) => (
  <UpshotThemeProvider>
    <ChartArea {...args} />
  </UpshotThemeProvider>
)

export const Tiny = Template.bind({})
Tiny.args = {
  size: 'tiny',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
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
