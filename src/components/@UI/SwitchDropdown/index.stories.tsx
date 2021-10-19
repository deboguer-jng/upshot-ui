import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SwitchDropdown from './'
import { useState } from '@storybook/addons'
import { Box } from 'theme-ui'

export default {
  title: '@UI/SwitchDropdown',
  component: SwitchDropdown,
} as ComponentMeta<typeof SwitchDropdown>

const Template: ComponentStory<typeof SwitchDropdown> = (args) => {
  const [value, setValue] = useState(null)

  const handleChange = (option: string) => {
    setValue(option)
  }

  return <SwitchDropdown value={value} onChange={handleChange} {...args} />
}

export const Default = Template.bind({})
Default.args = {
  options: ['Collections', 'NFTs', 'value'],
}
