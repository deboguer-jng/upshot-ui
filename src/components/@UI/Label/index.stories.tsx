import React from 'react'
import { ComponentStory } from '@storybook/react'

import Label from '.'

export default {
  title: '@UI/Label',
  component: Label,
}

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>CryptoPunks</Label>
)
const PercentageTemplate: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>420.69</Label>
)

export const LabelBasicSmall = Template.bind({})

export const LabelBasicMedium = Template.bind({})
LabelBasicMedium.args = { size: 'md' }

export const LabelCurrencyMini = PercentageTemplate.bind({})
LabelCurrencyMini.args = { variant: 'currency', size: 'xs' }

export const LabelCurrencySmall = PercentageTemplate.bind({})
LabelCurrencySmall.args = { variant: 'currency', currencySymbol: '$' }

export const LabelCurrencyMedium = PercentageTemplate.bind({})
LabelCurrencyMedium.args = { variant: 'currency', size: 'md' }

export const LabelCurrencyLarge = PercentageTemplate.bind({})
LabelCurrencyLarge.args = {
  variant: 'currency',
  size: 'lg',
  currencySymbol: '$',
}

export const LabelCurrencyLargeRed = PercentageTemplate.bind({})
LabelCurrencyLargeRed.args = {
  variant: 'currency',
  size: 'lg',
  currencySymbol: '$',
  color: 'red',
}

export const LabelCurrencyConfidence = PercentageTemplate.bind({})
LabelCurrencyConfidence.args = {
  variant: 'currency',
  size: 'lg',
  currencySymbol: '$',
  topRightLabel: '140%',
  color: 'red',
}
