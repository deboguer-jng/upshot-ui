import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CollectionLine from './'
import Icon from '../../@UI/Icon'

export default {
  title: 'App/CollectionLine',
  component: CollectionLine,
} as ComponentMeta<typeof CollectionLine>

const Template: ComponentStory<typeof CollectionLine> = (args) => <CollectionLine {...args} />

export const Default = Template.bind({})
Default.args = {
  sx: { width: '100%', height: '62px' },
  text1: 'Crypto punks',
  text2: '1.5 hrs',
  text3: '9999.99',
  text4: '99999',
  text5: '99999'
}

export const Collapsable = Template.bind({})
Collapsable.args = {
  sx: { width: '100%', height: '62px' },
  icon: <Icon icon={'arrowStylizedRight'} color={'primary'} size={24} />,
}

export const UnderglowBlue = Template.bind({})
UnderglowBlue.args = {
  sx: { width: '100%', height: '62px' },
  underglow: 'blue' 
}

export const UnderglowPink = Template.bind({})
UnderglowPink.args = {
  sx: { width: '100%', height: '62px' },
  underglow: 'pink' 
}

export const UnderglowRed = Template.bind({})
UnderglowRed.args = {
  sx: { width: '100%', height: '62px' },
  underglow: 'red' 
}

export const UnderglowYellow = Template.bind({})
UnderglowYellow.args = {
  sx: { width: '100%', height: '62px' },
  underglow: 'yellow' 
}

export const UnderglowGreen = Template.bind({})
UnderglowGreen.args = {
  sx: { width: '100%', height: '62px' },
  underglow: 'green' 
}

export const UnderglowPurple = Template.bind({})
UnderglowPurple.args = {
  sx: { width: '100%', height: '62px' },
  underglow: 'purple' 
}

export const UnderglowBlack = Template.bind({})
UnderglowBlack.args = {
  sx: { width: '100%', height: '62px' },
  underglow: 'black' 
}

export const UnderglowWhite = Template.bind({})
UnderglowWhite.args = {
  sx: { width: '100%', height: '62px' },
  underglow: 'white' 
}

export const UnderglowGrey500 = Template.bind({})
UnderglowGrey500.args = {
  sx: { width: '100%', height: '62px' },
  underglow: 'grey-500' 
}





