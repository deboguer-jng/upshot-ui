import React from "react";
import { ComponentStory } from "@storybook/react"

import AttributeLabel from "."

export default {
  title: '@UI/LabelAttribute',
  component: AttributeLabel,
}

const Template: ComponentStory<typeof AttributeLabel> = (args) => <AttributeLabel {...args} />

export const AttributeLabelRegular = Template.bind({})
AttributeLabelRegular.args = { text: '3D Glasses' }

