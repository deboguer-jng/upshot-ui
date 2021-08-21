import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from 'theme-ui'
import Grid from './'

export default {
  title: 'Layout/Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

export const Default = Template.bind({})
Default.args = {
  p: 4,
  gap: 4,
  columns: 2,
  bg: 'background',
  color: 'text',
  children: (
    <>
      {[...new Array(3)].map((_, i) => (
        <div key={i}>
          <Text>Item {i + 1}</Text>
        </div>
      ))}
    </>
  ),
}
