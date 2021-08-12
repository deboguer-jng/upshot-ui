import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react"

import LabelBasic from "."
import { Label } from "@theme-ui/components";

export default {
  title: '@UI/LabelBasic',
  component: LabelBasic,
}

const Template: ComponentStory<typeof LabelBasic> = (args) => <LabelBasic {...args} />

export const LabelBasicSmall = Template.bind({})
LabelBasicSmall.args = { text: 'CryptoPunks', variant: 'basicSmall' }

export const LabelBasicMedium = Template.bind({})
LabelBasicMedium.args = { text: 'CryptoPunks', variant: 'basicMedium' }