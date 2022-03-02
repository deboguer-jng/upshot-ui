import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Investors from './'

export default {
  title: '@App/Investors',
  component: Investors,
} as ComponentMeta<typeof Investors>

const Template: ComponentStory<typeof Investors> = (args) => (
  <Investors {...args} />
)

export const Default = Template.bind({})
Default.args = {}
