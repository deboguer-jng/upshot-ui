import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pagination from './'

export default {
  title: '@UI/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Default = Template.bind({})
Default.args = { pageCount: 10 }
