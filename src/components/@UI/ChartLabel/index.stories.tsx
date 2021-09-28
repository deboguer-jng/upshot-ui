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
Alone.args = { variant: 'alone', title: 'Item 1', price_1: '1,000', price_2: '4,000', change: '+16.47%', date: "Feb 00 2021 00:00", atl: 'Ξ00', ath: 'Ξ4,000' }

export const AloneNoDelta = Template.bind({})
AloneNoDelta.args = { variant: 'alone', title: 'Item 1', price_1: '1,000', price_2: '4,000', date: "Feb 00 2021 00:00", atl: 'Ξ00', ath: 'Ξ4,000' }

export const Multi = MultiTemplate.bind({})
Multi.args = { variant: 'multi', title: 'Item 1', price_1: '1,000', price_2: '4,000', change: '+16.47%', date: "Feb 00 2021 00:00", atl: 'Ξ00', ath: 'Ξ4,000' }

export const MultiNoDelta = MultiTemplate.bind({})
MultiNoDelta.args = { variant: 'multi', title: 'Item 1', price_1: '1,000', price_2: '4,000', date: "Feb 00 2021 00:00", atl: 'Ξ00', ath: 'Ξ4,000' }

export const LabelColored = MultiTemplate.bind({})
LabelColored.args = { variant: 'multi', title: 'Item 1', price_1: '1,000', price_2: '4,000', change: '+16.47%', date: "Feb 00 2021 00:00", atl: 'Ξ00', ath: 'Ξ4,000',  titleColor: 'pink' }

export const LabelNoUSDPrice = MultiTemplate.bind({})
LabelNoUSDPrice.args = { variant: 'multi', title: 'Item 1', price_1: '1,000', change: '+16.47%', date: "Feb 00 2021 00:00", atl: 'Ξ00', ath: 'Ξ4,000',  titleColor: 'pink' }
