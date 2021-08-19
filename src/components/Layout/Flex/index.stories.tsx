import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from 'theme-ui'
import Flex from './'

export default {
  title: 'Layout/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />

export const Default = Template.bind({})
Default.args = {
  p: 4,
  bg: 'background',
  color: 'text',
  sx: { width: '200px', height: '200px' },
  children: (
    <>
      {[...new Array(3)].map((_, i) => (
        <div key={i}>
          <Text>Item {i + 1}</Text>
        </div>
      ))}
    </>
  ),
}
