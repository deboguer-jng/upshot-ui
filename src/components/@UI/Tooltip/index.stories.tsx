import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tooltip from './'
import Text from '../Text'

export default {
  title: '@UI/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <>
    <Tooltip {...args} />
    <Text sx={{ marginTop: '20px', display: 'block' }}>Background</Text>
  </>
)

export const Default = Template.bind({})
Default.args = {
  tooltip: (
    <Text variant="h3Secondary" sx={{ lineHeight: 1.3 }}>
      Hello, I'm a tooltip
    </Text>
  ),
}
