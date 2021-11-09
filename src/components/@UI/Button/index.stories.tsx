import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './'
import Icon from '../Icon'
import { useState } from '@storybook/addons'

export default {
  title: '@UI/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}> Button </Button>
)

const TemplateToggle: ComponentStory<typeof Button> = (args) => {
  const [toggled, setToggled] = useState(false)

  return (
    <Button
      {...args}
      toggled={toggled}
      onClick={() => {
        setToggled(!toggled)
      }}
    >
      {' '}
      Button{' '}
    </Button>
  )
}

const MinimizedTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const PrimaryCapitalize = Template.bind({})
PrimaryCapitalize.args = {
  variant: 'primary',
  capitalize: true,
}

export const PrimaryToggle = TemplateToggle.bind({})
PrimaryToggle.args = {
  variant: 'primary',
}

export const SecondaryToggle = TemplateToggle.bind({})
SecondaryToggle.args = {
  variant: 'secondary',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  disabled: true,
}

export const PrimaryFixedWidth = Template.bind({})
PrimaryFixedWidth.args = {
  width: 135,
}

export const PrimaryIcon = Template.bind({})
PrimaryIcon.args = {
  icon: <Icon icon="analytics" />,
}

export const PrimaryIconFixedWidth = Template.bind({})
PrimaryIconFixedWidth.args = {
  icon: <Icon icon="analytics" />,
  width: 135,
}

export const PrimaryIconMinimized = MinimizedTemplate.bind({})
PrimaryIconMinimized.args = {
  icon: <Icon icon="analytics" />,
}

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
  size: 'lg',
  icon: <Icon icon="analytics" />,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
}

export const SecondaryOutline = Template.bind({})
SecondaryOutline.args = {
  variant: 'secondary',
  color: 'primary',
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.args = {
  variant: 'secondary',
  disabled: true,
}

export const SecondaryFixedWidth = Template.bind({})
SecondaryFixedWidth.args = {
  variant: 'secondary',
  width: 135,
}

export const SecondaryIcon = Template.bind({})
SecondaryIcon.args = {
  variant: 'secondary',
  icon: <Icon icon="attention" />,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: 'tertiary',
}

export const TertiaryDisabled = Template.bind({})
TertiaryDisabled.args = {
  variant: 'tertiary',
  disabled: true,
}

export const TertiaryFixedWidth = Template.bind({})
TertiaryFixedWidth.args = {
  variant: 'tertiary',
  width: 135,
}

export const TertiaryIcon = Template.bind({})
TertiaryIcon.args = {
  variant: 'tertiary',
  icon: <Icon icon="attention" />,
}

export const Plain = Template.bind({})
Plain.args = {
  variant: 'plain',
}

export const PlainIcon = Template.bind({})
PlainIcon.args = {
  variant: 'plain',
  icon: <Icon icon="arrowKeyRight" />,
}

export const PlainDisabled = Template.bind({})
PlainDisabled.args = {
  variant: 'plain',
  disabled: true,
}
