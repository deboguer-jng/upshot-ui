import React from 'react'
import { ComponentStory } from '@storybook/react'

import ChartLabel from '.'

export default {
  title: '@UI/ChartLabel',
  component: ChartLabel,
}

const Template: ComponentStory<typeof ChartLabel> = (args) => (
  <ChartLabel {...args} />
)

const MultiTemplate: ComponentStory<typeof ChartLabel> = (args) => (
  <>
    <ChartLabel {...args} />
    <ChartLabel {...args} />
  </>
)

export const Alone = Template.bind({})
Alone.args = { variant: 'alone', title: 'Item 1', url: 'https://upshot.io', price_1: 3241, price_2: 5434565, change: '+16.47%', timestamp: 1635510022423, atl: 'Ξ00', ath: 'Ξ5434565' }

export const AloneNoDelta = Template.bind({})
AloneNoDelta.args = { variant: 'alone', title: 'Item 1', url: 'https://upshot.io', price_1: 3241, price_2: 5434565, timestamp: 1635510022423, atl: 'Ξ00', ath: 'Ξ5434565' }

export const Multi = MultiTemplate.bind({})
Multi.args = { variant: 'multi', title: 'Item 1', url: 'https://upshot.io', price_1: 3241, price_2: 5434565, change: '+16.47%', timestamp: 1635510022423, atl: 'Ξ00', ath: 'Ξ5434565' }

export const MultiNoDelta = MultiTemplate.bind({})
MultiNoDelta.args = { variant: 'multi', title: 'Item 1', url: 'https://upshot.io', price_1: 3241, price_2: 5434565, timestamp: 1635510022423, atl: 'Ξ00', ath: 'Ξ5434565' }

export const LabelColored = MultiTemplate.bind({})
LabelColored.args = { variant: 'multi', title: 'Item 1', url: 'https://upshot.io', price_1: 3241, price_2: 5434565, change: '+16.47%', timestamp: 1635510022423, atl: 'Ξ00', ath: 'Ξ5434565',  titleColor: 'pink' }

export const LabelNoUSDPrice = MultiTemplate.bind({})
LabelNoUSDPrice.args = { variant: 'multi', title: 'Item 1', url: 'https://upshot.io', price_1: 3241, change: '+16.47%', timestamp: 1635510022423, atl: 'Ξ00', ath: 'Ξ5434565',  titleColor: 'pink' }
