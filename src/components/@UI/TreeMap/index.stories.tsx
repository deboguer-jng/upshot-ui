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
    { id: 1, name: 'token1', delta: 13.95, marketCap: 433 },
    { id: 2, name: 'token2', delta: 7.34, marketCap: 215 },
    { id: 3, name: 'token3', delta: -9.18, marketCap: 111 },
    { id: 4, name: 'token4', delta: 10.05, marketCap: 112 },
    { id: 5, name: 'token5', delta: 21.0, marketCap: 553 },
    { id: 6, name: 'token6', delta: -35.95, marketCap: 336 },
    { id: 7, name: 'token7', delta: 26.24, marketCap: 338 },
    { id: 8, name: 'token8', delta: -20.29, marketCap: 543 },
    { id: 9, name: 'token9', delta: 50.85, marketCap: 423 },
    { id: 10, name: 'token10', delta: 28.86, marketCap: 444 },
    { id: 11, name: 'token11', delta: -42.28, marketCap: 232 },
  ],
  onCollectionSelected: (collection: number) => {
    console.log({ collection })
  },
}

export const Error = Template.bind({})
Error.args = {
  error: true,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
