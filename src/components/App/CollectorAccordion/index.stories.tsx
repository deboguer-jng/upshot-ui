import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CollectorAccordion from './'
import CollectorAccordionRow from '../CollectorAccordionRow'

export default {
  title: 'App/CollectorAccordion',
  component: CollectorAccordion,
} as ComponentMeta<typeof CollectorAccordion>

const Template: ComponentStory<typeof CollectorAccordion> = (args) => (
  <CollectorAccordion>
    <CollectorAccordionRow {...args} />
  </CollectorAccordion>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Robert Downey Jr.',
  subtitle: 'Owns 152 NFTs',
  portfolioValue: '12.34',
}
