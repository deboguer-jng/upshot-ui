import { ComponentMeta, ComponentStory } from '@storybook/react'
import makeBlockie from 'ethereum-blockies-base64'
import React from 'react'
import AlertSettingAccordion from '.'
import Box from '../../Layout/Box/index'

export default {
  title: 'App/AlertSettingAccordion',
  component: AlertSettingAccordion,
} as ComponentMeta<typeof AlertSettingAccordion>

type AlertSettingAccordionProps = {
  name?: string
  following: boolean
  onFollowChange?: (value: boolean) => void
  imageSrc: string
  link: string
}
const Template: ComponentStory<typeof AlertSettingAccordion> = ({
  name,
  imageSrc,
  link,
  ...args
}: AlertSettingAccordionProps) => (
  <AlertSettingAccordion
    {...args}
    name={name}
    link={link}
    imageSrc={imageSrc}
    onFollowChange={(value) => {
      console.log(value, 'onFollowChange')
    }}
  >
    <Box>children</Box>
  </AlertSettingAccordion>
)

export const Collector = Template.bind({})
Collector.args = {
  name: 'Pranksy',
  following: true,
  imageSrc: makeBlockie('0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459'),
  link: `/analytics/user/'0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459'`,
}

export const Collection = Template.bind({})
Collection.args = {
  name: 'CryptoPunks',
  following: true,
  imageSrc:
    'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120',
  link: `/analytics/collection/1`,
}

export const NFT = Template.bind({})
NFT.args = {
  name: '"Milady 0 #2222"',
  following: true,
  imageSrc: 'https://www.miladymaker.net/milady/2222.png',
  link: `/analytics/nft/0x5Af0D9827E0c53E4799BB226655A1de152A425a5/2222`,
}
