import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputRoundedSearch from './'

export default {
  title: '@UI/InputRoundedSearch',
  component: InputRoundedSearch,
} as ComponentMeta<typeof InputRoundedSearch>

const Template: ComponentStory<typeof InputRoundedSearch> = (args) => (
  <InputRoundedSearch {...args} />
)

export const Default = Template.bind({})
Default.args = { sx: { width: 300 } }

export const SearchButton = Template.bind({})
SearchButton.args = { hasButton: true, sx: { width: 300 } }
