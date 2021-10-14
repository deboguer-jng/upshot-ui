import React from 'react'
import { ComponentMeta } from '@storybook/react'
import CollectorAccordion from './'
import CollectorAccordionRow from '../CollectorAccordionRow'
import CollectorAccordionHead from '../CollectorAccordionHead'
import { CollectorAccordionRowProps } from '../CollectorAccordionRow'
import { Text } from 'theme-ui'

type CollectorItems = {
  items: CollectorAccordionRowProps[]
}

export default {
  title: 'App/CollectorAccordion',
  component: CollectorAccordion,
} as ComponentMeta<typeof CollectorAccordion>

const Template = ({ items }: CollectorItems) => (
  <>
    <CollectorAccordionHead>
      <Text>Collector</Text>
      <Text sx={{ whiteSpace: 'nowrap' }}>NFT Counts</Text>
    </CollectorAccordionHead>
    <CollectorAccordion>
      {items.map((args, idx) => (
        <CollectorAccordionRow {...args} key={idx} />
      ))}
    </CollectorAccordion>
  </>
)

const LandingTemplate = ({ items }: CollectorItems) => (
  <>
    <CollectorAccordionHead>
      <Text>Collector</Text>
      <Text sx={{ whiteSpace: 'nowrap' }}>Portfolio Appraisal</Text>
    </CollectorAccordionHead>
    <CollectorAccordion>
      {items.map((args, idx) => (
        <CollectorAccordionRow {...args} key={idx} />
      ))}
    </CollectorAccordion>
  </>
)

export const Default = Template.bind({})
Default.args = {
  items: [...new Array(5)].map((_) => ({
    name: 'Robert Downey Jr.',
    collectionName: 'Mad Dog Jones',
    count: '24',
    avgHoldTime: '173 days',
    firstAcquisition: '09/12/21',
    totalNftValue: '12739.48',
    nftCollection: [...new Array(3)].map((_, idx) => ({
      imageUrl: `/img/sample_nft_${idx + 1}.jpg`,
      url: '#',
    })),
    otherCollectors: [...new Array(4)].map((_) => ({
      name: 'Happy',
      imageUrl: '/img/defaultAvatar.png',
      url: '#',
      count: 16,
    })),
  })),
}

export const Landing = LandingTemplate.bind({})
Landing.args = {
  items: [...new Array(5)].map((_) => ({
    name: 'Robert Downey Jr.',
    collectionName: 'Mad Dog Jones',
    portfolioValue: '12.34',
    nftCollection: [...new Array(3)].map((_, idx) => ({
      imageUrl: `/img/sample_nft_${idx + 1}.jpg`,
      url: '#',
    })),
  })),
}
