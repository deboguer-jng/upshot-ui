import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MiniNftCard from '.'

export default {
  title: '@UI/MiniNftCard',
  component: MiniNftCard,
} as ComponentMeta<typeof MiniNftCard>

const Template: ComponentStory<typeof MiniNftCard> = (args) => (
  <MiniNftCard {...args} />
)

export const Error = Template.bind({})
Error.args = {
  error: true,
}
