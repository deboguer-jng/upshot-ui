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
    { name: 'token1', delta: 13.95, marketCap: 433 },
    { name: 'token2', delta: 7.34, marketCap: 215 },
    { name: 'token3', delta: -9.18, marketCap: 111 },
    { name: 'token4', delta: 10.05, marketCap: 112 },
    { name: 'token5', delta: 21.0, marketCap: 553 },
    { name: 'token6', delta: -35.95, marketCap: 336 },
    { name: 'token7', delta: 26.24, marketCap: 338 },
    { name: 'token8', delta: -20.29, marketCap: 543 },
    { name: 'token9', delta: 50.85, marketCap: 423 },
    { name: 'token10', delta: 28.86, marketCap: 444 },
    { name: 'token11', delta: -42.28, marketCap: 232 },
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
