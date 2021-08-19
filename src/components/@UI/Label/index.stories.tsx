import React from "react";
import { ComponentStory } from "@storybook/react"

import Label from "."

export default {
  title: '@UI/Label',
  component: Label,
}

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const LabelBasicSmall = Template.bind({})
LabelBasicSmall.args = { text: 'CryptoPunks' }

export const LabelBasicMedium = Template.bind({})
LabelBasicMedium.args = { text: 'CryptoPunks', size: 'md' }

export const LabelCurrencyMini = Template.bind({})
LabelCurrencyMini.args = { text: '420.69', style: 'currency', size: 'xs' }

export const LabelCurrencySmall = Template.bind({})
LabelCurrencySmall.args = { text: '420.69', style: 'currency', currencySymbol: '$' }

export const LabelCurrencyMedium = Template.bind({})
LabelCurrencyMedium.args = { text: '420.69', style: 'currency', size: 'md' }

export const LabelCurrencyLarge = Template.bind({})
LabelCurrencyLarge.args = { text: '420.69', style: 'currency', size: 'lg', currencySymbol: '$' }
