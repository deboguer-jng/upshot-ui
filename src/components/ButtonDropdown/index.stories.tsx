import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonDropdown from './'

export default {
  title: '@UI/ButtonDropdown',
  component: ButtonDropdown,
} as ComponentMeta<typeof ButtonDropdown>

const Template: ComponentStory<typeof ButtonDropdown> = (args) => {
  const [value, setValue] = useState(args.isMulti ? [] : '')
  return <ButtonDropdown value={value} setValue={setValue} {...args} />
}

export const Single = Template.bind({})
Single.args = {
  options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
  name: 'test1',
}

export const Multi = Template.bind({})
Multi.args = {
  options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
  name: 'test2',
  isMulti: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
  disabled: true,
  name: 'test3',
}

export const MultiDisabled = Template.bind({})
MultiDisabled.args = {
  options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
  disabled: true,
  isMulti: true,
  name: 'test4',
}
