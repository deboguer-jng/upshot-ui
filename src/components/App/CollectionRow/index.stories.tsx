import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CollectionTable from '../CollectionTable'
import CollectionRow from '../CollectionRow'

export default {
  title: 'App/CollectionRow',
  component: CollectionRow,
} as ComponentMeta<typeof CollectionRow>

const Template: ComponentStory<typeof CollectionRow> = (args) => (
  <CollectionTable>
    <CollectionRow {...args} />
  </CollectionTable>
)

export const Default = Template.bind({})
Default.args = {
  title: 'CryptoPunk #1024',
  imageSrc: '/img/defaultAvatar.png',
}
