import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from './'

export default {
  title: '@UI/Image',
  component: Image,
} as ComponentMeta<typeof Image>

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />

export const DefaultHttps = Template.bind({})
DefaultHttps.args = {
  src: 'https://res.cloudinary.com/upshot-inc/image/upload/v1631819750/uvwr9fujso4awqpjxlfq.png',
}

export const DefaultHttp = Template.bind({})
DefaultHttp.args = {
  src: 'http://res.cloudinary.com/upshot-inc/image/upload/v1631819750/uvwr9fujso4awqpjxlfq.png',
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

export const ArtblockUrl = Template.bind({})
ArtblockUrl.args = {
  src: 'https://media.artblocks.io/204000000.png',
  width: 100,
  height: 100,
}
