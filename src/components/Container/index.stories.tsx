import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Container from './'
import { Text } from 'theme-ui'

export default {
  title: '@UI/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const Default = Template.bind({})
Default.args = {
  sx: { background: '#000', color: '#fff' },
  children: <Text variant="h3Primary">Content</Text>,
}
