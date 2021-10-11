import React from 'react'
import { ComponentStory } from '@storybook/react'

import LabelAttribute from '.'

export default {
  title: '@UI/LabelAttribute',
  component: LabelAttribute,
}

const Template: ComponentStory<typeof LabelAttribute> = (args) => (
  <LabelAttribute {...args}>3D Glasses</LabelAttribute>
)

const TooltipTemplate: ComponentStory<typeof LabelAttribute> = (args) => (
  <LabelAttribute {...args} style={{ marginTop: 100 }}>
    This is a long text This is a long text This is a long text This is a long
    text This is a long text This is a long text This is a long text
  </LabelAttribute>
)

export const LabelAttributeRegularTransparent = Template.bind({})

export const LabelAttributeRegularBlue = Template.bind({})
LabelAttributeRegularBlue.args = { transparent: false }

export const LabelAttributeTooltipRegularBlue = TooltipTemplate.bind({})
LabelAttributeTooltipRegularBlue.args = { transparent: false }

export const LabelAttributePercentageTransparent = Template.bind({})
LabelAttributePercentageTransparent.args = {
  percentage: 69,
  variant: 'percentage',
}

export const LabelAttributePercentageBlue = Template.bind({})
LabelAttributePercentageBlue.args = {
  percentage: 69,
  variant: 'percentage',
  transparent: false,
}

export const LabelAttributeRemoveableTransparent = Template.bind({})
LabelAttributeRemoveableTransparent.args = { variant: 'removeable' }

export const LabelAttributeRemoveableBlue = Template.bind({})
LabelAttributeRemoveableBlue.args = {
  variant: 'removeable',
  transparent: false,
}
