import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Accordion from './'

export default {
  title: '@UI/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <>
    <Accordion {...args}>
      <div>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
      </div>
    </Accordion>
    <Accordion {...args}>
      <div>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
      </div>
    </Accordion>
    <Accordion {...args}>
      <div>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
        <h1> This is same text </h1>
      </div>
    </Accordion>
  </>
)

export const Default = Template.bind({})

Default.args = {
  title: 'Price History',
}

export const Dropdown = Template.bind({})

Dropdown.args = {
  title: 'Price History',
  isDropdown: true,
}
