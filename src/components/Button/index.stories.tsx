import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './'
import Icon from '../Icon'

export default {
  title: '@UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  label: 'Button',
}

export const PrimaryActive = Template.bind({})
PrimaryActive.args = {
  status: 'active',
  label: 'Button',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  status: 'disabled',
  label: 'Button',
}

export const PrimaryFixedWidth = Template.bind({})
PrimaryFixedWidth.args = {
  status: 'active',
  label: 'Button',
  width: 135,
}

export const PrimaryIcon = Template.bind({})
PrimaryIcon.args = {
  status: 'active',
  label: 'Button',
  icon: <Icon icon="analytics" />,
}

export const PrimaryIconFixedWidth = Template.bind({})
PrimaryIconFixedWidth.args = {
  status: 'active',
  label: 'Button',
  icon: <Icon icon="analytics" />,
  width: 135,
}

export const PrimaryIconMinimized = Template.bind({})
PrimaryIconMinimized.args = {
  status: 'active',
  icon: <Icon icon="analytics" />,
}

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
  status: 'active',
  size: 'large',
  label: 'Button',
  icon: <Icon icon="analytics" />,
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  label: 'Button',
}

export const SecondaryActive = Template.bind({})
SecondaryActive.args = {
  type: 'secondary',
  status: 'active',
  label: 'Button',
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
  type: 'secondary',
  status: 'disabled',
  label: 'Button',
}

export const SecondaryFixedWidth = Template.bind({})
SecondaryFixedWidth.args = {
  type: 'secondary',
  status: 'active',
  label: 'Button',
  width: 135,
}

export const SecondaryIcon = Template.bind({})
SecondaryIcon.args = {
  type: 'secondary',
  label: 'Button',
  icon: <Icon icon="attention" />,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
  label: 'Button',
}

export const TertiaryActive = Template.bind({})
TertiaryActive.args = {
  type: 'tertiary',
  status: 'active',
  label: 'Button',
}

export const TertiaryDisabled = Template.bind({})
TertiaryDisabled.args = {
  type: 'tertiary',
  status: 'disabled',
  label: 'Button',
}

export const TertiaryFixedWidth = Template.bind({})
TertiaryFixedWidth.args = {
  type: 'tertiary',
  status: 'active',
  label: 'Button',
  width: 135,
}

export const TertiaryIcon = Template.bind({})
TertiaryIcon.args = {
  type: 'tertiary',
  label: 'Button',
  icon: <Icon icon="attention" />,
}

export const Plain = Template.bind({})
Plain.args = {
  type: 'plain',
  label: 'Button',
}

export const PlainIcon = Template.bind({})
PlainIcon.args = {
  type: 'plain',
  label: 'Button',
  icon: <Icon icon="arrowKeyRight" />,
}

export const PlainDisabled = Template.bind({})
PlainDisabled.args = {
  type: 'plain',
  label: 'Button',
  status: 'disabled',
}
