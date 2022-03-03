import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Box } from 'theme-ui'

import LabeledSwitch from './'

export default {
  title: '@UI/LabeledSwitch',
  component: LabeledSwitch,
} as ComponentMeta<typeof LabeledSwitch>

const Template: ComponentStory<typeof LabeledSwitch> = (args) => {
  const [on, setOn] = useState(false)

  return (
    <Box sx={{ width: 240 }}>
      <LabeledSwitch onToggle={() => setOn(!on)} {...{ on, ...args }} />
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {
  labelOff: 'Option: A',
  labelOn: 'Option: B',
}
