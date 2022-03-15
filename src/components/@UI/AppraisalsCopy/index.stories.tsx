import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AppraisalsCopy from './'

export default {
  title: '@UI/AppraisalsCopy',
  component: AppraisalsCopy,
} as ComponentMeta<typeof AppraisalsCopy>

const Template: ComponentStory<typeof AppraisalsCopy> = () => (
  <>
    <AppraisalsCopy link="google.com" />
  </>
)

export const Default = Template.bind({})

Default.args = {}
