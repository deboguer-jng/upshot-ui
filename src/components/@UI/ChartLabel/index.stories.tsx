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
Alone.args = { type: 'alone', title: 'Item 1 price:', price: '$0,000', change: '+20.31 (+16.47%)' }

export const Multi = PercentageTemplate.bind({})
Multi.args = { type: 'multi', title: 'Item 1 price:', price: '$0,000', change: '+20.31 (+16.47%)' }

export const LabelColored = PercentageTemplate.bind({})
LabelColored.args = { type: 'multi', title: 'Title', price: 'price', change: 'change', titleColor: 'red' }
