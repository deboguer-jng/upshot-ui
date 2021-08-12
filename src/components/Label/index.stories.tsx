import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Label from "."

export default {
  title: '@UI/Label',
  component: Label,
}

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const LabelBasicSmall = Template.bind({})
LabelBasicSmall.args = { text: 'CryptoPunks', variant: 'basicSmall' }

export const LabelBasicMedium = Template.bind({})
LabelBasicMedium.args = { text: 'CryptoPunks', variant: 'basicMedium' }

export const LabelCurrencyMini = Template.bind({})
LabelCurrencyMini.args = { text: '420.69', variant: 'currencyMini'}

export const LabelCurrencySmall = Template.bind({})
LabelCurrencySmall.args = { text: '420.69', variant: 'currencySmall' }

export const LabelCurrencyMedium = Template.bind({})
LabelCurrencyMedium.args = { text: '420.69', variant: 'currencyMedium'}

export const LabelCurrencyLarge = Template.bind({})
LabelCurrencyLarge.args = { text: '420.69', variant: 'currencyLarge' }