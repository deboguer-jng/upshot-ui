import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Text from './'

export default {
  title: '@UI/Text',
  component: Text,
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = { color: 'white', children: 'Default' }

/* H0 */
export const H0Primary = Template.bind({})
H0Primary.args = {
  color: 'white',
  children: 'H0 Primary',
  variant: 'h0Primary',
}

export const H0Secondary = Template.bind({})
H0Secondary.args = {
  color: 'white',
  children: 'H0 Secondary',
  variant: 'h0Secondary',
}

/* H1 */
export const H1Primary = Template.bind({})
H1Primary.args = {
  color: 'white',
  children: 'H1 Primary',
  variant: 'h1Primary',
}

export const H1Secondary = Template.bind({})
H1Secondary.args = {
  color: 'white',
  children: 'H1 Secondary',
  variant: 'h1Secondary',
}

/* H2 */
export const H2Primary = Template.bind({})
H2Primary.args = {
  color: 'white',
  children: 'H2 Primary',
  variant: 'h2Primary',
}

export const H2Secondary = Template.bind({})
H2Secondary.args = {
  color: 'white',
  children: 'H2 Secondary',
  variant: 'h2Secondary',
}

export const H2Tertiary = Template.bind({})
H2Tertiary.args = {
  color: 'white',
  children: 'H2 Tertiary',
  variant: 'h2Tertiary',
}

/* H3 */
export const H3Primary = Template.bind({})
H3Primary.args = {
  color: 'white',
  children: 'H3 Primary',
  variant: 'h3Primary',
}

export const H3Secondary = Template.bind({})
H3Secondary.args = {
  color: 'white',
  children: 'H3 Secondary',
  variant: 'h3Secondary',
}

/* Sized */
export const XLarge = Template.bind({})
XLarge.args = {
  color: 'white',
  children: 'xLarge',
  variant: 'xLarge',
}

export const Large = Template.bind({})
Large.args = {
  color: 'white',
  children: 'Large',
  variant: 'large',
}

export const Small = Template.bind({})
Small.args = {
  color: 'white',
  children: 'Small',
  variant: 'small',
}

export const XSmall = Template.bind({})
XSmall.args = {
  color: 'white',
  children: 'xSmall',
  variant: 'xSmall',
}
