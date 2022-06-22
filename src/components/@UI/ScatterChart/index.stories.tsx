import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'
import bigData from '../ScatterChart/bigData.json'

import ScatterChart from './'

export default {
  title: '@UI/ScatterChart',
  component: ScatterChart,
} as ComponentMeta<typeof ScatterChart>

const Template: ComponentStory<typeof ScatterChart> = (args) => (
  <Box sx={{ height: 500, width: '100%', border: 'thin solid black' }}>
    <ScatterChart {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Chromie Squiggles',
  id: '0x000',
  data: [
    {
      "x": 1653995681000,
      "y": 0.099,
      "id": "285000087",
      "address": "0x1e7E...535c",
      "gmi": 481.00084954931896,
      "ens": null
    },
    {
      "x": 1653996230000,
      "y": 0.145,
      "id": "285000365",
      "address": "0x1e7E...535c",
      "gmi": 481.00084954931896,
      "ens": null
    },
    {
      "x": 1653996273000,
      "y": 0.15,
      "id": "285000275",
      "address": "0x1e7E...535c",
      "gmi": 481.00084954931896,
      "ens": null
    },
    {
      "x": 1655663469000,
      "y": 0.15,
      "id": "285000342",
      "address": "0xF4c5...2FB5",
      "gmi": 760.9583608650242,
      "ens": "nullflicker.eth"
    },
    {
      "x": 1653506509000,
      "y": 0.142,
      "id": "285000059",
      "address": "0x5e8a...61C4",
      "gmi": 676.08099581732,
      "ens": null
    },
    {
      "x": 1655477836000,
      "y": 0.1,
      "id": "285000035",
      "address": "0x4B67...041a",
      "gmi": 965.7813201397037,
      "ens": null
    },
    {
      "x": 1655477762000,
      "y": 0.099,
      "id": "285000318",
      "address": "0x4B67...041a",
      "gmi": 965.7813201397037,
      "ens": null
    },
    {
      "x": 1653662706000,
      "y": 0.09,
      "id": "285000160",
      "address": "0x4B67...041a",
      "gmi": 965.7813201397037,
      "ens": null
    },
    {
      "x": 1653662706000,
      "y": 0.09,
      "id": "285000156",
      "address": "0x4B67...041a",
      "gmi": 965.7813201397037,
      "ens": null
    },
    {
      "x": 1653662706000,
      "y": 0.1,
      "id": "285000357",
      "address": "0x4B67...041a",
      "gmi": 965.7813201397037,
      "ens": null
    },
    {
      "x": 1655654896000,
      "y": 0.15,
      "id": "285000353",
      "address": "0x53DD...c8Da",
      "gmi": 975.8706197767581,
      "ens": "cryptodubs.eth"
    },
    {
      "x": 1655654801000,
      "y": 0.127,
      "id": "285000378",
      "address": "0x53DD...c8Da",
      "gmi": 975.8706197767581,
      "ens": "cryptodubs.eth"
    },
    {
      "x": 1655654755000,
      "y": 0.1,
      "id": "285000157",
      "address": "0x53DD...c8Da",
      "gmi": 975.8706197767581,
      "ens": "cryptodubs.eth"
    },
    {
      "x": 1655649623000,
      "y": 0.119,
      "id": "285000320",
      "address": "0x6301...1423",
      "gmi": 998.2755799524311,
      "ens": "athrab.eth"
    },
    {
      "x": 1655649623000,
      "y": 0.095,
      "id": "285000162",
      "address": "0x6301...1423",
      "gmi": 998.2755799524311,
      "ens": "athrab.eth"
    },
    {
      "x": 1655649623000,
      "y": 0.1,
      "id": "285000141",
      "address": "0x6301...1423",
      "gmi": 998.2755799524311,
      "ens": "athrab.eth"
    },
    {
      "x": 1655649623000,
      "y": 0.1,
      "id": "285000062",
      "address": "0x6301...1423",
      "gmi": 998.2755799524311,
      "ens": "athrab.eth"
    },
    {
      "x": 1653315395000,
      "y": 0.1569,
      "id": "285000089",
      "address": "0xb789...725E",
      "gmi": 915.6353133660665,
      "ens": "yuzu.eth"
    },
    {
      "x": 1653683296000,
      "y": 0.09,
      "id": "285000384",
      "address": "0x97a6...4dA0",
      "gmi": 682.4265731206185,
      "ens": null
    },
    {
      "x": 1653639773000,
      "y": 0.089,
      "id": "285000396",
      "address": "0xb789...725E",
      "gmi": 915.6353133660665,
      "ens": "yuzu.eth"
    }
  ]
}

export const BigData = Template.bind({})
BigData.args = bigData;
