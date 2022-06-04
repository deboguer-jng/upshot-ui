import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputRounded from './'

export default {
  title: '@UI/InputRounded',
  component: InputRounded,
} as ComponentMeta<typeof InputRounded>

const Template: ComponentStory<typeof InputRounded> = (args) => (
  <InputRounded {...args} />
)

export const Default = Template.bind({})
Default.args = { placeholder: 'Search...', sx: { width: 300 } }

export const Dark = Template.bind({})
Dark.args = { dark: true, placeholder: 'Search...', sx: { width: 300 } }

export const WithSuffix = Template.bind({})
WithSuffix.args = { placeholder: '100', suffix: '%', sx: { width: 300 } }

export const WithSuffixDisabled = Template.bind({})
WithSuffixDisabled.args = { placeholder: '100', suffix: '%', disabled: true, sx: { width: 300 } }

export const WithPrefix = Template.bind({})
WithPrefix.args = { placeholder: '100', prefix: '$', sx: { width: 300 } }

export const WithPrefixAndSuffix = Template.bind({})
WithPrefixAndSuffix.args = { placeholder: '100', prefix: '+/-', suffix: '%', sx: { width: 300 } }