import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Label, Paragraph } from 'theme-ui'

import Radio from './'

export default {
  title: '@UI/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => (
  <div>
    <Label>
      <Radio name="testradio" defaultChecked={true} {...args} />
    </Label>
    <Label>
      <Radio name="testradio" {...args} />
    </Label>
  </div>
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
