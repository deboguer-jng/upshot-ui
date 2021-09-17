import React from 'react'
import { ComponentStory } from '@storybook/react'

import Label from '.'

export default {
  title: '@UI/ChartLabel',
  component: Label,
}

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>CryptoPunks</Label>
)
const PercentageTemplate: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>420.69</Label>
)

export const Alone = Template.bind({})
Alone.args = { variant: 'alone', title: 'Item 1', price_1: '1,000', price_2: '4,000', change: '+20.31 (+16.47%)', date: "Feb 00 2021 00:00", atl: 'Ξ00', ath: 'Ξ4,000' }

export const Multi = PercentageTemplate.bind({})
Multi.args = { variant: 'multi', title: 'Item 1', price_1: '1,000', price_2: '4,000', change: '+20.31 (+16.47%)', date: "Feb 00 2021 00:00", atl: 'Ξ00', ath: 'Ξ4,000' }

export const LabelColored = PercentageTemplate.bind({})
LabelColored.args = { variant: 'multi', title: 'Item 1', price_1: '1,000', price_2: '4,000', change: '+20.31 (+16.47%)', date: "Feb 00 2021 00:00", atl: 'Ξ00', ath: 'Ξ4,000',  titleColor: 'red' }
