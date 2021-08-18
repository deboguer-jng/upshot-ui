import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Panel from './'

export default {
  title: '@UI/Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>

const Template: ComponentStory<typeof Panel> = (args) => <Panel {...args} />

export const Default = Template.bind({})
Default.args = { sx: { width: '300px', height: '225px' } }

export const Inner = Template.bind({})
Inner.args = { inner: true, sx: { width: '300px', height: '225px' } }
