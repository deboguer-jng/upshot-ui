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

const MultiTemplate: ComponentStory<typeof LabelAttribute> = (args) => (
  <>
    <LabelAttribute {...args.first}>3D Glasses</LabelAttribute>
    <LabelAttribute {...args.second}>3D Glasses</LabelAttribute>
    <LabelAttribute {...args.third}>3D Glasses</LabelAttribute>
  </>
)

const TooltipTemplate: ComponentStory<typeof LabelAttribute> = (args) => (
  <LabelAttribute {...args} style={{ marginTop: 100 }}>
    This is a long text This is a long text This is a long text This is a long
    text This is a long text This is a long text This is a long text
  </LabelAttribute>
)

const ExpandedTooltipTemplate: ComponentStory<typeof LabelAttribute> = (
  args
) => (
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

export const LabelAttributeExpandedTooltipRegularBlue =
  ExpandedTooltipTemplate.bind({})
LabelAttributeExpandedTooltipRegularBlue.args = {
  transparent: false,
  expanded: true,
  expandedText: 'Trait Type',
}

export const LabelAttributePercentageTransparent = MultiTemplate.bind({})
LabelAttributePercentageTransparent.args = {
  first: {
    percentage: 69,
    variant: 'percentage',
  },
  second: {
    percentage: 69.99,
    variant: 'percentage',
  },
  third: {
    percentage: 100.0,
    variant: 'percentage',
  },
}

export const LabelAttributePercentageBlue = Template.bind({})
LabelAttributePercentageBlue.args = {
  percentage: 69,
  variant: 'percentage',
  transparent: false,
}

export const LabelAttributeExpandedPercentageTransparent = MultiTemplate.bind(
  {}
)
LabelAttributeExpandedPercentageTransparent.args = {
  first: {
    percentage: 69,
    expanded: true,
    expandedText: 'Trait Type',
    variant: 'percentage',
  },
  second: {
    percentage: 69.99,
    expanded: true,
    expandedText: 'Trait Type',
    variant: 'percentage',
  },
  third: {
    percentage: 100.0,
    expanded: true,
    expandedText: 'Trait Type',
    variant: 'percentage',
  },
}

export const LabelAttributeExpandedPercentageBlue = Template.bind({})
LabelAttributePercentageBlue.args = {
  percentage: 69,
  expanded: true,
  expandedText: 'Trait Type',
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

export const LabelAttributeRemoveableBlueHover = Template.bind({})
LabelAttributeRemoveableBlueHover.args = {
  variant: 'removeable',
  transparent: false,
  hasHover: true,
}

export const LabelAttributeRemoveableHover = Template.bind({})
LabelAttributeRemoveableHover.args = {
  variant: 'removeable',
  transparent: true,
  hasHover: true,
}
