import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'
import AppBar from './'

export default {
  title: 'App/AppBar',
  component: AppBar,
} as ComponentMeta<typeof AppBar>

const Template: ComponentStory<typeof AppBar> = (args) => (
  <Box color="text">
    <AppBar {...args} />
  </Box>
)

export const Default = Template.bind({})
Default.args = {}
