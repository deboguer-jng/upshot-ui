import React from 'react'
import { ComponentMeta } from '@storybook/react'
import CollectorAccordion from './'
import CollectorAccordionRow, {
  CollectorAccordionRowProps,
} from '../CollectorAccordionRow'
import CollectorAccordionHead from '../CollectorAccordionHead'
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
        <CollectorAccordionRow {...args} key={idx} defaultOpen={idx === 0} />
      ))}
    </CollectorAccordion>
  </>
)

/* for testing css
const Template50 = ({ items }: CollectorItems) => (
  <div style={{ width: '50%' }} >
    <CollectorAccordionHead>
      <Text>Collector</Text>
      <Text sx={{ whiteSpace: 'nowrap' }}>NFT Counts</Text>
    </CollectorAccordionHead>
    <CollectorAccordion>
      {items.map((args, idx) => (
        <CollectorAccordionRow {...args} key={idx} defaultOpen={idx === 0} />
      ))}
    </CollectorAccordion>
  </div>
)
 */

const LandingTemplate = ({ items }: CollectorItems) => (
  <>
    <CollectorAccordionHead>
      <Text>Collector</Text>
      <Text sx={{ whiteSpace: 'nowrap' }}>Portfolio Appraisal</Text>
    </CollectorAccordionHead>
    <CollectorAccordion>
      {items.map((args, idx) => (
        <CollectorAccordionRow {...args} key={idx} defaultOpen={idx === 0} />
      ))}
    </CollectorAccordion>
  </>
)

export const Default = Template.bind({})
Default.args = {
  items: [...new Array(5)].map((_) => ({
    address: '0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459',
    displayName: 'Pranksy',
    collectionName: 'Mad Dog Jones',
    count: '24',
    avgHoldTime: 10622266,
    firstAcquisition: 1620184337,
    ageOfCollection: 1620184337,
    totalNftValue: '12739.48',
    nftCollection: [...new Array(34)].map((_, idx) => ({
      id: '0x0/1',
      imageUrl: `/img/sample_nft_${(idx % 3) + 1}.jpg`,
      url: '#',
    })),
    extraCollections: [...new Array(12)].map((_) => ({
      name: 'Happy',
      imageUrl: '/img/defaultAvatar.png',
      url: '#',
      count: 16,
    })),
  })),
}

/* 
For testing css
export const Default50 = Template50.bind({})
Default50.args = {
  items: [...new Array(5)].map((_) => ({
    address: '0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459',
    username: 'Pranksy',
    collectionName: 'Mad Dog Jones',
    count: '24',
    avgHoldTime: 10622266,
    firstAcquisition: 1620184337,
    ageOfCollection: 1620184337,
    totalNftValue: '12739.48',
    nftCollection: [...new Array(3)].map((_, idx) => ({
      id: '0x0/1',
      imageUrl: `/img/sample_nft_${idx + 1}.jpg`,
      url: '#',
    })),
    extraCollections: [...new Array(4)].map((_) => ({
      name: 'Happy',
      imageUrl: '/img/defaultAvatar.png',
      url: '#',
      count: 16,
    })),
  })),
}

export const NoCollections = Template50.bind({})
NoCollections.args = {
  items: [...new Array(5)].map((_) => ({
    address: '0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459',
    username: 'Pranksy',
    collectionName: 'Mad Dog Jones',
    count: '24',
    avgHoldTime: 10622266,
    firstAcquisition: 1620184337,
    ageOfCollection: 1620184337,
    totalNftValue: '12739.48',
    nftCollection: [...new Array(3)].map((_, idx) => ({
      id: '0x0/1',
      imageUrl: `/img/sample_nft_${idx + 1}.jpg`,
      url: '#',
    })),
  })),
}
*/

export const Landing = LandingTemplate.bind({})
Landing.args = {
  items: [...new Array(5)].map((_) => ({
    address: '0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459',
    username: 'Pranksy',
    collectionName: 'Mad Dog Jones',
    portfolioValue: '12.34',
    nftCollection: [...new Array(3)].map((_, idx) => ({
      imageUrl: `/img/sample_nft_${idx + 1}.jpg`,
      url: '#',
    })),
  })),
}
