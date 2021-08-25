import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CollectionButton from '.'
import Icon from '../Icon'

export default {
  title: '@UI/CollectionButton',
  component: CollectionButton,
} as ComponentMeta<typeof CollectionButton>

const Template: ComponentStory<typeof CollectionButton> = (args) => (
  <CollectionButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="comment" />,
}

export const Error = Template.bind({})
Error.args = {
  error: true,
}

export const HighlightBlue = Template.bind({})
HighlightBlue.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  underglow: 'primary',
}

export const HighlightPink = Template.bind({})
HighlightPink.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  underglow: 'secondary',
}

export const HighlightRed = Template.bind({})
HighlightRed.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  underglow: 'red',
}

export const HighlightYellow = Template.bind({})
HighlightYellow.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  underglow: 'yellow',
}

export const HighlightGreen = Template.bind({})
HighlightGreen.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  underglow: 'green',
}

export const HighlightGrey = Template.bind({})
HighlightGrey.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  underglow: 'grey-400',
}
