import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SkeletonTemplate from './'

export default {
  title: '@UI/SkeletonTemplate',
  component: SkeletonTemplate,
} as ComponentMeta<typeof SkeletonTemplate>

const Template: ComponentStory<typeof SkeletonTemplate> = (args) => <SkeletonTemplate {...args} />

export const SpinnerBox = Template.bind({})
SpinnerBox.args = { 
  type: 'LoadingBox',
  sx: { width: '600px', height: '300px' }
}

export const BlurrySquare = Template.bind({})
BlurrySquare.args = { 
  type: 'BlurrySquare',
  sx: { width: '160px', height: '160px' }
}

export const CollectionGrid = Template.bind({})
CollectionGrid.args = { 
  type: 'CollectionGrid',
  sx: { width: '160px', height: '30px' }
}

/* export const ExtraSmallRectangle = Template.bind({})
ExtraSmallRectangle.args = { circle: false, sx: { width: '40px', height: '12px' } }

export const Square = Template.bind({})
Square.args = { circle: false, sx: { width: '124px', height: '124px' } }

export const Circle = Template.bind({})
Circle.args = { circle: true, sx: { width: '124px', height: '124px' } }

export const ExtraLarge = Template.bind({})
ExtraLarge.args = { sx: { width: '600px', height: '300px' } } */