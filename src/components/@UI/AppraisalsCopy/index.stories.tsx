import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Link from '../Link'
import AppraisalsCopy from './'

export default {
  title: '@UI/AppraisalsCopy',
  component: AppraisalsCopy,
} as ComponentMeta<typeof AppraisalsCopy>

const Template: ComponentStory<typeof AppraisalsCopy> = () => (
  <>
    <AppraisalsCopy
      link={<Link href="https://google.com">)Read article</Link>}
    />
  </>
)

export const Default = Template.bind({})

Default.args = {}
