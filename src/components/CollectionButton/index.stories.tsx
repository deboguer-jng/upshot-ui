import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CollectionButton from './'
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

export const HighlightBlue = Template.bind({})
HighlightBlue.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlight: 'blue',
}

export const HighlightPink = Template.bind({})
HighlightPink.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlight: 'pink',
}

export const HighlightRed = Template.bind({})
HighlightRed.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlight: 'red',
}

export const HighlightYellow = Template.bind({})
HighlightYellow.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlight: 'yellow',
}

export const HighlightGreen = Template.bind({})
HighlightGreen.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlight: 'green',
}

export const HighlightGrey = Template.bind({})
HighlightGrey.args = {
  text: 'name',
  subText: 'eth value',
  icon: <Icon icon="checkmark" />,
  highlight: 'grey',
}
