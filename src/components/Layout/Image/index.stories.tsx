import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from 'theme-ui'
import OptimizedImage from './'

export default {
  title: 'Layout/OptimizedImage',
  component: OptimizedImage,
} as ComponentMeta<typeof OptimizedImage>

const Template: ComponentStory<typeof OptimizedImage> = (args) => <OptimizedImage {...args} />

export const Default = Template.bind({})
Default.args = {
  src: 'https://res.cloudinary.com/upshot-inc/image/upload/v1631819750/uvwr9fujso4awqpjxlfq.png',
}

export const W100 = Template.bind({})
W100.args = {
  src: 'https://res.cloudinary.com/upshot-inc/image/upload/v1631819750/uvwr9fujso4awqpjxlfq.png',
  width: 100,
}

export const H100 = Template.bind({})
H100.args = {
  src: 'https://res.cloudinary.com/upshot-inc/image/upload/v1631819750/uvwr9fujso4awqpjxlfq.png',
  height: 100,
}

export const W100H100 = Template.bind({})
W100H100.args = {
  src: 'https://res.cloudinary.com/upshot-inc/image/upload/v1631819750/uvwr9fujso4awqpjxlfq.png',
  width: 100,
  height: 100,
}


export const W100AR16_9 = Template.bind({})
W100AR16_9.args = {
  src: 'https://res.cloudinary.com/upshot-inc/image/upload/v1631819750/uvwr9fujso4awqpjxlfq.png',
  width: 100,
  aspectRatio: '16:9',
}