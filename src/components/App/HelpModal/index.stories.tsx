import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useRef } from 'react'
import HelpModal from '.'

export default {
  title: 'App/HelpModal',
  component: HelpModal,
} as ComponentMeta<typeof HelpModal>

const Template: ComponentStory<typeof HelpModal> = (args: any) => {
  const ref = useRef()
  return <HelpModal link={''} ref={ref} />
}

export const Default = Template.bind({})
Default.args = {}
