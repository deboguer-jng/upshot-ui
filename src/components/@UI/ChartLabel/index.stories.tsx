import React from 'react'
import { ComponentStory } from '@storybook/react'

import ChartLabel from '.'
import Grid from '../../Layout/Grid'

export default {
  title: '@UI/ChartLabel',
  component: ChartLabel,
}

const Template: ComponentStory<typeof ChartLabel> = (args) => (
  <ChartLabel {...args} />
)

const MultiTemplate: ComponentStory<typeof ChartLabel> = (args) => (
  <Grid gap={5} columns={3} sx={{ maxWidth: '800px' }}>
    <ChartLabel {...args} />
    <ChartLabel {...args} />
    <ChartLabel {...args} />
  </Grid>
)

export const Alone = Template.bind({})
Alone.args = {
  variant: 'alone',
  title: 'Item 1',
  url: 'https://upshot.io',
  price_1: 3241,
  price_2: 5434565,
  change: '+16.47%',
  atl: 'Ξ00',
  ath: 'Ξ5434565',
}

export const AloneNoDelta = Template.bind({})
AloneNoDelta.args = {
  variant: 'alone',
  title: 'Item 1',
  url: 'https://upshot.io',
  price_1: 0.001,
  price_2: 0.001,
  atl: 'Ξ00',
  ath: 'Ξ5434565',
}

export const Multi = MultiTemplate.bind({})
Multi.args = {
  variant: 'multi',
  title: 'Very Long Title Overflow With WebKit Line Clamping',
  url: 'https://upshot.io',
  price_1: 0.1,
  price_2: 1,
  change: '+16.47%',
  atl: 'Ξ00',
  ath: 'Ξ5434565',
}

export const MultiNoDelta = MultiTemplate.bind({})
MultiNoDelta.args = {
  variant: 'multi',
  title: 'Item 1',
  url: 'https://upshot.io',
  price_1: 3241,
  price_2: 5434565,
  atl: 'Ξ00',
  ath: 'Ξ5434565',
}

export const MultiNoAthAtl = MultiTemplate.bind({})
MultiNoAthAtl.args = {
  variant: 'multi',
  title: 'Item 1',
  url: 'https://upshot.io',
  price_1: 3241,
  price_2: 5434565,
}

export const LabelColored = MultiTemplate.bind({})
LabelColored.args = {
  variant: 'multi',
  title: 'Item 1',
  url: 'https://upshot.io',
  price_1: 3241,
  price_2: 5434565,
  change: '+16.47%',
  atl: 'Ξ00',
  ath: 'Ξ5434565',
  titleColor: 'pink',
}

export const LabelNoUSDPrice = MultiTemplate.bind({})
LabelNoUSDPrice.args = {
  variant: 'multi',
  title: 'Item 1',
  url: 'https://upshot.io',
  price_1: 3241,
  change: '+16.47%',
  atl: 'Ξ00',
  ath: 'Ξ5434565',
  titleColor: 'pink',
}
