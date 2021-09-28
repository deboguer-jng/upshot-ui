import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Navbar from '.'

export default {
  title: 'App/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: any) => {
  const [value, setValue] = useState('')

  return (
    <Navbar
      searchValue={value}
      onSearchValueChange={(e) =>
        setValue((e.target as HTMLInputElement).value)
      }
      onSearchSuggestionChange={(item) =>
        setValue(args.searchSuggestions[item.id - 1].label)
      }
      onSearch={(e) => {
        console.log({ value })
      }}
      {...args}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  searchSuggestions: [
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
