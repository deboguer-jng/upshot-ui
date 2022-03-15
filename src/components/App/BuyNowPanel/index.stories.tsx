import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from '../../@UI/Text'
import BuyNowPanel from '.'

export default {
  title: 'App/BuyNowPanel',
  component: BuyNowPanel,
} as ComponentMeta<typeof BuyNowPanel>

const Template: ComponentStory<typeof BuyNowPanel> = (args) => (
  <>
    <Text sx={{ padding: '10px', position: 'absolute', zIndex: -1 }}>
      If you see this, you probably use Firefox. <br />
      It is expected, but if you want full experience, <br />
      use something else for this panel. <br />
      This is a background. This is a background. <br />
      This is a background. This is a background.
      </Text>
    <BuyNowPanel {...args} />
  </>
)

export const Wide = Template.bind({})
Wide.args = {
  listPriceETH: 1,
  listPriceUSD: 4000,
  appraisalPriceETH: 2,
  listAppraisalPercentage: 5.5,
  marketplaceName: 'OpenSea',
  marketplaceUrl: 'https://opensea.io/',
}


export const Popup = Template.bind({})
Popup.args = {
  variant: 'popup',
  listPriceETH: 1,
  listPriceUSD: 4000,
  appraisalPriceETH: 2,
  listAppraisalPercentage: 20.1,
  marketplaceName: 'OpenSea',
  marketplaceUrl: 'https://opensea.io/',
  sx: {width: '350px'},
}



export const PopupRed = Template.bind({})
PopupRed.args = {
  variant: 'popup',
  listPriceETH: 4,
  listPriceUSD: 16000,
  appraisalPriceETH: 2,
  listAppraisalPercentage: -2,
  marketplaceName: 'OpenSea',
  marketplaceUrl: 'https://opensea.io/',
  sx: {width: '350px'},
}

export const NotOpenSea = Template.bind({})
NotOpenSea.args = {
  listPriceETH: 1,
  listPriceUSD: 4000,
  appraisalPriceETH: 2,
  listAppraisalPercentage: 5.5,
  marketplaceName: 'Larva Labs',
  marketplaceUrl: 'https://www.larvalabs.com/',
}