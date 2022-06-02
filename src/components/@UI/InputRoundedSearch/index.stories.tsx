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

export const Nav = Template.bind({})
Nav.args = { sx: { width: 300 }, hasButton: true, variant: 'nav' }

export const SearchButton = Template.bind({})
SearchButton.args = {
  variant: 'search',
  hasSearchButton: true,
  sx: { width: 300 },
}

export const ClearButton = Template.bind({})
ClearButton.args = {
  variant: 'search',
  hasClearButton: true,
  sx: { width: 300 },
}

export const SearchDropdown = Template.bind({})
SearchDropdown.args = {
  hasButton: true,
  variant: 'search',
  sx: { width: 300 },
  suggestions: [
    {
      id: 0,
      name: 'item1',
    },
    {
      id: 1,
      name: 'item2',
    },
    {
      id: 2,
      name: 'item3',
    },
    {
      id: 3,
      name: 'item4',
    },
    {
      id: 4,
      name: 'item5',
    },
    {
      id: 5,
      name: 'item6',
    },
    {
      id: 6,
      name: 'item7',
    },
  ],
}
