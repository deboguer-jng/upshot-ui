import React from 'react';
import { ComponentStory } from '@storybook/react'

import AttributeLabel from '.'

export default {
  title: '@UI/LabelAttribute',
  component: AttributeLabel,
}

const Template: ComponentStory<typeof AttributeLabel> = (args) => <AttributeLabel {...args} />

export const AttributeLabelRegularTransparent = Template.bind({})
AttributeLabelRegularTransparent.args = { text: '3D Glasses' }

export const AttributeLabelRegularBlue = Template.bind({})
AttributeLabelRegularBlue.args = { text: '3D Glasses', transparent: false }

export const AttributeLabelPercentageTransparent = Template.bind({})
AttributeLabelPercentageTransparent.args = { text: '3D Glasses', percentage: 69, variant: 'percentage' }

export const AttributeLabelPercentageBlue = Template.bind({})
AttributeLabelPercentageBlue.args = { text: '3D Glasses', percentage: 69, variant: 'percentage', transparent: false }