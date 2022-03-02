import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BlurrySquareTemplate from './'

export default {
  title: '@Skeleton/BlurrySquareTemplate',
  component: BlurrySquareTemplate,
} as ComponentMeta<typeof BlurrySquareTemplate>

const Template: ComponentStory<typeof BlurrySquareTemplate> = (args) => (
  <BlurrySquareTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {}
