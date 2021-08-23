import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SkeletonCollection from './'

export default {
  title: '@UI/SkeletonCollection',
  component: SkeletonCollection,
} as ComponentMeta<typeof SkeletonCollection>

const Template: ComponentStory<typeof SkeletonCollection> = (args) => <SkeletonCollection {...args} />

export const SpinnerBox = Template.bind({})
SpinnerBox.args = { 
  type: 'loadingBox',
  bg: 'background',
  sx: { width: '600px', height: '300px' }
}

export const BlurrySquare = Template.bind({})
BlurrySquare.args = { 
  type: 'blurrySquare',
  bg: 'background',
  sx: { width: '160px', height: '160px' }
}

/* export const ExtraSmallRectangle = Template.bind({})
ExtraSmallRectangle.args = { circle: false, sx: { width: '40px', height: '12px' } }

export const Square = Template.bind({})
Square.args = { circle: false, sx: { width: '124px', height: '124px' } }

export const Circle = Template.bind({})
Circle.args = { circle: true, sx: { width: '124px', height: '124px' } }

export const ExtraLarge = Template.bind({})
ExtraLarge.args = { sx: { width: '600px', height: '300px' } } */