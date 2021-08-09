import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Spinner } from './'
import UpshotThemeProvider from '../../themes'

export default {
  title: 'Example/Spinner',
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

export const Dark = Template.bind({})
Dark.args = {
  theme: 'dark',
}

export const Light = Template.bind({})
Light.args = {
  theme: 'light',
}

export const Small = Template.bind({})
Small.args = {
  theme: 'light',
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  theme: 'light',
  size: 'large',
}
