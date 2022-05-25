import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonDropdown from './'

export default {
  title: '@UI/ButtonDropdown',
  component: ButtonDropdown,
} as ComponentMeta<typeof ButtonDropdown>

const Template: ComponentStory<typeof ButtonDropdown> = (args) => {
  const [value, setValue] = useState(args.isMulti ? [] : '')
  const optionChanged = (option: string) => {
    if (typeof value === 'object')
      return setValue(
        value.includes(option)
          ? value.filter((val) => val !== option)
          : [...value, option]
      )
    if (value === option) setValue('')
    else setValue(option)
  }

  return <ButtonDropdown value={value} onChange={optionChanged} {...args} />
}

export const Single = Template.bind({})
Single.args = {
  options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
  name: 'test1',
}

export const LabelSingle = Template.bind({})
LabelSingle.args = {
  options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
  name: 'test1',
  label: 'Sort by',
}

export const LabelNoRadio = Template.bind({})
LabelNoRadio.args = {
  options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
  name: 'test1',
  label: 'Sort by',
  hideRadio: true,
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


export const LongName = Template.bind({})
LongName.args = {
  options: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'option7', 'option8'],
  value: 'Floor Change (1W): low to high',
  label: 'Sort by',
  hideRadio: true,
}