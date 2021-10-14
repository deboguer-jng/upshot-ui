import React, { useState, useMemo } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TreeMap from './'

export default {
  title: '@UI/TreeMap',
  component: TreeMap,
} as ComponentMeta<typeof TreeMap>

const Template: ComponentStory<typeof TreeMap> = (args) => <TreeMap {...args} />

export const Main = Template.bind({})
Main.args = {
  data: [
    { name: 'token1', value: 13.95 },
    { name: 'token2', value: 7.34 },
    { name: 'token3', value: -9.18 },
    { name: 'token4', value: 10.05 },
    { name: 'token5', value: 21.0 },
    { name: 'token6', value: -35.95 },
    { name: 'token7', value: 26.24 },
    { name: 'token8', value: -20.29 },
    { name: 'token9', value: 50.85 },
    { name: 'token10', value: 28.86 },
    { name: 'token11', value: -42.28 },
  ],
}

export const Error = Template.bind({})
Error.args = {
  error: true,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
