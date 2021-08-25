import React from 'react';
import { ComponentStory } from '@storybook/react'

import AttributeLabel from '.'

export default {
  title: '@UI/LabelAttribute',
  component: AttributeLabel,
}

const Template: ComponentStory<typeof AttributeLabel> = (args) => <AttributeLabel {...args}>3D Glasses</AttributeLabel>

export const AttributeLabelRegularTransparent = Template.bind({})

export const AttributeLabelRegularBlue = Template.bind({})
AttributeLabelRegularBlue.args = { transparent: false }

export const AttributeLabelPercentageTransparent = Template.bind({})
AttributeLabelPercentageTransparent.args = { percentage: 69, variant: 'percentage' }

export const AttributeLabelPercentageBlue = Template.bind({})
AttributeLabelPercentageBlue.args = { percentage: 69, variant: 'percentage', transparent: false }

export const AttributeLabelRemoveableTransparent = Template.bind({})
AttributeLabelRemoveableTransparent.args = { variant: 'removeable' }

export const AttributeLabelRemoveableBlue = Template.bind({})
AttributeLabelRemoveableBlue.args = { variant: 'removeable', transparent: false }
