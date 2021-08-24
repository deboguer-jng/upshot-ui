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
  highlightColor: 'primary',
}

export const HighlightPink = Template.bind({})
HighlightPink.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlightColor: 'secondary',
}

export const HighlightRed = Template.bind({})
HighlightRed.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlightColor: 'red',
}

export const HighlightYellow = Template.bind({})
HighlightYellow.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlightColor: 'yellow',
}

export const HighlightGreen = Template.bind({})
HighlightGreen.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlightColor: 'green',
}

export const HighlightGrey = Template.bind({})
HighlightGrey.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlightColor: 'grey-400',
}
