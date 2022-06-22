import React from 'react'
import { ComponentMeta } from '@storybook/react'
import AlertSettingAccordion from '.'
import Box from '../../Layout/Box/index'

export default {
  title: 'App/AlertSettingAccordion',
  component: AlertSettingAccordion,
} as ComponentMeta<typeof AlertSettingAccordion>

type AlertSettingAccordionProps = {
  address?: string
  username?: string
  status: boolean
  followed: boolean
}
const Template = ({
  address,
  username,
  ...args
}: AlertSettingAccordionProps) => (
  <AlertSettingAccordion {...args} address={address} displayName={username}>
    <Box>children</Box>
  </AlertSettingAccordion>
)

export const Default = Template.bind({})
Default.args = {
  address: '0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459',
  username: 'Pranksy',
  status: true,
  followed: true,
}
// Landing.args = {
//   items: [...new Array(5)].map((_) => ({
//     address: '0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459',
//     username: 'Pranksy',
//     collectionName: 'Mad Dog Jones',
//     portfolioValue: '12.34',
//     nftCollection: [...new Array(3)].map((_, idx) => ({
//       imageUrl: `/img/sample_nft_${idx + 1}.jpg`,
//       url: '#',
//     })),
//   })),
// }
