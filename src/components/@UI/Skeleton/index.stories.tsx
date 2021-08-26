import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Skeleton from './'

export default {
  title: '@UI/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const MediumRectangle = Template.bind({})
MediumRectangle.args = { sx: { width: '124px', height: '20px' } }

export const ExtraSmallRectangle = Template.bind({})
ExtraSmallRectangle.args = { circle: false, sx: { width: '40px', height: '12px' } }

export const Square = Template.bind({})
Square.args = { circle: false, sx: { width: '124px', height: '124px' } }

export const Circle = Template.bind({})
Circle.args = { circle: true, sx: { width: '124px', height: '124px' } }

export const ExtraLarge = Template.bind({})
ExtraLarge.args = { sx: { width: '600px', height: '300px' } }