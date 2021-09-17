import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonChartCollection from './'
import Icon from '../Icon'
import { useState } from '@storybook/addons'

export default {
  title: '@UI/ButtonChartCollection',
  component: ButtonChartCollection,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonChartCollection>

const Template: ComponentStory<typeof ButtonChartCollection> = (args) => {
  const [selected, setSelected] = useState(false)

  return (
    <ButtonChartCollection
      {...args}
      selected={selected}
      onClick={() => {
        setSelected(!selected)
      }}
    >
      {' '}
      ButtonChartCollection{' '}
    </ButtonChartCollection>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  title: 'Series 1',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  title: 'Series 1',
}
