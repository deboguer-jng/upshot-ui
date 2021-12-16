import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from './'

export default {
  title: '@App/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  sx: { width: '100%', height: '100px' },
}
