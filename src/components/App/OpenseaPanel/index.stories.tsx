import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from '../../@UI/Text'
import OpenseaPanel from './'

export default {
  title: 'App/OpenseaPanel',
  component: OpenseaPanel,
} as ComponentMeta<typeof OpenseaPanel>

const Template: ComponentStory<typeof OpenseaPanel> = (args) => (
  <>
    <Text sx={{ padding: '10px', position: 'absolute', zIndex: -1 }}>
      If you see this, you probably use Firefox. <br />
      It is expected, but if you want full experience, <br />
      use something else for this panel. <br />
      This is a background. This is a background. <br />
      This is a background. This is a background.
      </Text>
    <OpenseaPanel {...args} />
  </>
)

export const Wide = Template.bind({})
Wide.args = {
  listPriceETH: 1,
  listPriceUSD: 4000,
  appraisalPriceETH: 2,
  openseaUrl: 'https://upshot.io/',
}


export const Popup = Template.bind({})
Popup.args = {
  variant: 'popup',
  listPriceETH: 1,
  listPriceUSD: 4000,
  appraisalPriceETH: 2,
  openseaUrl: 'https://upshot.io/',
  sx: {width: '350px'},
}



export const PopupRed = Template.bind({})
PopupRed.args = {
  variant: 'popup',
  listPriceETH: 4,
  listPriceUSD: 16000,
  appraisalPriceETH: 2,
  openseaUrl: 'https://upshot.io/',
  sx: {width: '350px'},
}
