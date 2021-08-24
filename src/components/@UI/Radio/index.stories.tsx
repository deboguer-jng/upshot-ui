import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Label, Flex } from 'theme-ui'

import Radio from './'

export default {
  title: '@UI/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => (
  <Flex sx={{ gap: 1, flexDirection: 'column' }}>
    <Label sx={{ alignItems: 'center' }}>
      <Radio name="testradio" defaultChecked={true} {...args} />
      Option 1
    </Label>

    <Label sx={{ alignItems: 'center' }}>
      <Radio name="testradio" {...args} />
      Option 2
    </Label>
  </Flex>
)

export const Default = Template.bind({})
Default.args = {}

export const error = Template.bind({})
error.args = {
  error: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
