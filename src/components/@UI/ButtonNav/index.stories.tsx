import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonNav from './'
import Icon from '../Icon'
import Text from '../Text'
import { useState } from '@storybook/addons'
import { Flex } from '../../..'

export default {
  title: '@UI/ButtonNav',
  component: ButtonNav,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonNav>

const Template: ComponentStory<typeof ButtonNav> = (args) => (
  <ButtonNav {...args}>
    <Text>Button</Text>
  </ButtonNav>
)

const TemplateToggle: ComponentStory<typeof ButtonNav> = (args) => {
  const [toggled, setToggled] = useState(false)

  return (
    <ButtonNav
      {...args}
      toggled={toggled}
      onClick={() => {
        setToggled(!toggled)
      }}
    >
      <Text>Button</Text>
    </ButtonNav>
  )
}

const TemplateMultiToggle: ComponentStory<typeof ButtonNav> = (args) => {
  const [toggled, setToggled] = useState(0)

  return (
    <Flex sx={{ flexDirection: 'row' }}>
      {['Items', 'Analytics', 'Activity'].map((data, idx) => (
        <ButtonNav
          {...args}
          toggled={toggled == idx}
          onClick={() => {
            setToggled(idx)
          }}
        >
          <Text>{data}</Text>
        </ButtonNav>
      ))}
    </Flex>
  )
}

export const Default = Template.bind({})
Default.args = {
  toggled: true,
}

export const Toggle = TemplateToggle.bind({})

export const MultiToggle = TemplateMultiToggle.bind({})
