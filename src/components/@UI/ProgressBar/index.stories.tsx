import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Panel from '../Panel'
import ProgressBar from './'

export default {
  title: '@UI/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <Panel>
    <ProgressBar bgColor="grey-800" {...args} />
  </Panel>
)

export const Default = Template.bind({})
Default.args = { percent: 67 }
