import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {SettingsPanel, SettingsMenuItem } from '.'

export default {
  title: 'App/SettingsPanel',
  component: SettingsPanel,
} as ComponentMeta<typeof SettingsPanel>

const Template: ComponentStory<typeof SettingsPanel> = (args) => (
  <SettingsPanel {...args}>
    <SettingsMenuItem label="Profile">
      Profile content
    </SettingsMenuItem>
    <SettingsMenuItem label="Notifications">
      Notifications content
    </SettingsMenuItem>
  </SettingsPanel>
)

export const Default = Template.bind({})
