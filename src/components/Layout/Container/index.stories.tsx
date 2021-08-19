import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Container from './'
import { Text } from 'theme-ui'

export default {
  title: 'Layout/Container',
  component: Container,
} as ComponentMeta<typeof Container>

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
)

export const Default = Template.bind({})
Default.args = {
  p: 4,
  sx: { background: '#000', color: '#fff' },
  children: <Text>Content</Text>,
}
