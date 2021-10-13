import React, { useState, useMemo } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ScatterChart from './'

export default {
  title: '@UI/ScatterChart',
  component: ScatterChart,
} as ComponentMeta<typeof ScatterChart>

const Template: ComponentStory<typeof ScatterChart> = (args) => (
  <ScatterChart {...args} />
)

export const Main = Template.bind({})
Main.args = {}
