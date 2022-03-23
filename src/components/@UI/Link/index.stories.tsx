import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Link from '.'

export default {
  title: '@UI/Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => (
  <Link href="https://cryptopunks.net" variant="default" {...args}>Link</Link>
)

export const Default = Template.bind({})