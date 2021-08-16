import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from './'
import UpshotThemeProvider from '../../themes'

export default {
  title: '@UI/Spinner',
  component: Spinner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => (
  <UpshotThemeProvider>
    <Spinner {...args} />
  </UpshotThemeProvider>
)

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  size: 'xl',
}

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
}

export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  size: 'xs',
}