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
    {
      x: 'INTC',
      y: 10000.23,
    },
    {
      x: 'GS',
      y: 30235.4,
    },
    {
      x: 'CVX',
      y: -56363.32,
    },
    {
      x: 'GE',
      y: 77543,
    },
    {
      x: 'CAT',
      y: -28394.23,
    },
    {
      x: 'RTX',
      y: 12345,
    },
    {
      x: 'CSCO',
      y: -87654,
    },
    {
      x: 'JNJ',
      y: 8493,
    },
    {
      x: 'PG',
      y: -9090,
    },
    {
      x: 'TRV',
      y: 5555,
    },
    {
      x: 'MMM',
      y: -8787,
    },
    {
      x: 'NKE',
      y: 3434,
    },
    {
      x: 'IYT',
      y: 4141,
    },
  ],
}
