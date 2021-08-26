import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from './'

export default {
  title: '@UI/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const AddLinkBlock = Template.bind({})
AddLinkBlock.args = { icon: 'addLinkBlock', color: 'primary', size: 32 }

export const AddLink = Template.bind({})
AddLink.args = { icon: 'addLink', color: 'primary', size: 32 }

export const Analytics = Template.bind({})
Analytics.args = { icon: 'analytics', color: 'primary', size: 32 }

export const ArrowDropUserBubble = Template.bind({})
ArrowDropUserBubble.args = {
  icon: 'arrowDropUserBubble',
  color: 'primary',
  size: 32,
}

export const ArrowDropdown = Template.bind({})
ArrowDropdown.args = { icon: 'arrowDropdown', color: 'primary', size: 32 }

export const ArrowKeyLeft = Template.bind({})
ArrowKeyLeft.args = { icon: 'arrowKeyLeft', color: 'primary', size: 32 }

export const ArrowKeyRight = Template.bind({})
ArrowKeyRight.args = { icon: 'arrowKeyRight', color: 'primary', size: 32 }

export const ArrowLargeLeft = Template.bind({})
ArrowLargeLeft.args = { icon: 'arrowLargeLeft', color: 'primary', size: 32 }

export const ArrowLargeRight = Template.bind({})
ArrowLargeRight.args = { icon: 'arrowLargeRight', color: 'primary', size: 32 }

export const ArrowSmallLeft = Template.bind({})
ArrowSmallLeft.args = { icon: 'arrowSmallLeft', color: 'primary', size: 32 }

export const ArrowSmallRight = Template.bind({})
ArrowSmallRight.args = { icon: 'arrowSmallRight', color: 'primary', size: 32 }

export const ArrowStylizedLeft = Template.bind({})
ArrowStylizedLeft.args = {
  icon: 'arrowStylizedLeft',
  color: 'primary',
  size: 32,
}

export const ArrowStylizedRight = Template.bind({})
ArrowStylizedRight.args = {
  icon: 'arrowStylizedRight',
  color: 'primary',
  size: 32,
}

export const Ask = Template.bind({})
Ask.args = { icon: 'ask', color: 'primary', size: 32 }

export const AsyncBlock = Template.bind({})
AsyncBlock.args = { icon: 'asyncBlock', color: 'primary', size: 32 }

export const Async = Template.bind({})
Async.args = { icon: 'async', color: 'primary', size: 32 }

export const Attention = Template.bind({})
Attention.args = { icon: 'attention', color: 'primary', size: 32 }

export const BadgeFilled = Template.bind({})
BadgeFilled.args = { icon: 'badgeFilled', color: 'primary', size: 32 }

export const BadgeHollow = Template.bind({})
BadgeHollow.args = { icon: 'badgeHollow', color: 'primary', size: 32 }

export const BitcoinBlock = Template.bind({})
BitcoinBlock.args = { icon: 'bitcoinBlock', color: 'primary', size: 32 }

export const Bitcoin = Template.bind({})
Bitcoin.args = { icon: 'bitcoin', color: 'primary', size: 32 }

export const Boards = Template.bind({})
Boards.args = { icon: 'boards', color: 'primary', size: 32 }

export const Checkmark = Template.bind({})
Checkmark.args = { icon: 'checkmark', color: 'primary', size: 32 }

export const CloseCircle = Template.bind({})
CloseCircle.args = { icon: 'closeCircle', color: 'primary', size: 32 }

export const Close = Template.bind({})
Close.args = { icon: 'close', color: 'primary', size: 32 }

export const Comment = Template.bind({})
Comment.args = { icon: 'comment', color: 'primary', size: 32 }

export const Copy = Template.bind({})
Copy.args = { icon: 'copy', color: 'primary', size: 32 }

export const Dash = Template.bind({})
Dash.args = { icon: 'dash', color: 'primary', size: 32 }

export const Delete = Template.bind({})
Delete.args = { icon: 'delete', color: 'primary', size: 32 }

export const Disconnect = Template.bind({})
Disconnect.args = { icon: 'disconnect', color: 'primary', size: 32 }

export const Discord = Template.bind({})
Discord.args = { icon: 'discord', color: 'primary', size: 32 }

export const Dislike = Template.bind({})
Dislike.args = { icon: 'dislike', color: 'primary', size: 32 }

export const Ellipsis = Template.bind({})
Ellipsis.args = { icon: 'ellipsis', color: 'primary', size: 32 }

export const Enter = Template.bind({})
Enter.args = { icon: 'enter', color: 'primary', size: 32 }

export const ErrorIcon = Template.bind({})
ErrorIcon.args = { icon: 'error', color: 'primary' }

export const EthBlock = Template.bind({})
EthBlock.args = { icon: 'ethBlock', color: 'primary', size: 32 }

export const Ethereum = Template.bind({})
Ethereum.args = { icon: 'ethereum', color: 'primary', size: 32 }

export const ExpandCircle = Template.bind({})
ExpandCircle.args = { icon: 'expandCircle', color: 'primary', size: 32 }

export const Expand = Template.bind({})
Expand.args = { icon: 'expand', color: 'primary', size: 32 }

export const FacebookBlock = Template.bind({})
FacebookBlock.args = { icon: 'facebookBlock', color: 'primary', size: 32 }

export const Facebook = Template.bind({})
Facebook.args = { icon: 'facebook', color: 'primary', size: 32 }

export const Filter = Template.bind({})
Filter.args = { icon: 'filter', color: 'primary', size: 32 }

export const Following = Template.bind({})
Following.args = { icon: 'following', color: 'primary', size: 32 }

export const FoundationBlock = Template.bind({})
FoundationBlock.args = { icon: 'foundationBlock', color: 'primary', size: 32 }

export const Foundation = Template.bind({})
Foundation.args = { icon: 'foundation', color: 'primary', size: 32 }

export const GridView = Template.bind({})
GridView.args = { icon: 'gridView', color: 'primary', size: 32 }

export const GridViewSelected = Template.bind({})
GridViewSelected.args = { icon: 'gridViewSelected', color: 'primary', size: 32 }

export const Groups = Template.bind({})
Groups.args = { icon: 'groups', color: 'primary', size: 32 }

export const Help = Template.bind({})
Help.args = { icon: 'help', color: 'primary', size: 32 }

export const Home = Template.bind({})
Home.args = { icon: 'home', color: 'primary', size: 32 }

export const Influence = Template.bind({})
Influence.args = { icon: 'influence', color: 'primary', size: 32 }

export const Information = Template.bind({})
Information.args = { icon: 'information', color: 'primary', size: 32 }

export const InformationBlock = Template.bind({})
InformationBlock.args = { icon: 'informationBlock', color: 'primary', size: 32 }

export const Instagram = Template.bind({})
Instagram.args = { icon: 'instagram', color: 'primary', size: 32 }

export const InstagramCircle = Template.bind({})
InstagramCircle.args = { icon: 'instagramCircle', color: 'primary', size: 32 }

export const KnownOriginBlock = Template.bind({})
KnownOriginBlock.args = { icon: 'knownOriginBlock', color: 'primary', size: 32 }

export const KnownOrigin = Template.bind({})
KnownOrigin.args = { icon: 'knownOrigin', color: 'primary', size: 32 }

export const LightBulb = Template.bind({})
LightBulb.args = { icon: 'lightBulb', color: 'primary', size: 32 }

export const Like = Template.bind({})
Like.args = { icon: 'like', color: 'primary', size: 32 }

export const ListViewSelected = Template.bind({})
ListViewSelected.args = { icon: 'listViewSelected', color: 'primary', size: 32 }

export const ListView = Template.bind({})
ListView.args = { icon: 'listView', color: 'primary', size: 32 }

export const Lock = Template.bind({})
Lock.args = { icon: 'lock', color: 'primary', size: 32 }

export const MarketPlaceBlock = Template.bind({})
MarketPlaceBlock.args = { icon: 'marketPlaceBlock', color: 'primary', size: 32 }

export const MarketPlace = Template.bind({})
MarketPlace.args = { icon: 'marketPlace', color: 'primary', size: 32 }

export const MediumBlock = Template.bind({})
MediumBlock.args = { icon: 'mediumBlock', color: 'primary', size: 32 }

export const Medium = Template.bind({})
Medium.args = { icon: 'medium', color: 'primary', size: 32 }

export const MediumCircle = Template.bind({})
MediumCircle.args = { icon: 'mediumCircle', color: 'primary', size: 32 }

export const NavAnalyticsSelected = Template.bind({})
NavAnalyticsSelected.args = {
  icon: 'navAnalyticsSelected',
  color: 'primary',
  size: 32,
}

export const NavAnswer = Template.bind({})
NavAnswer.args = { icon: 'navAnswer', color: 'primary', size: 32 }

export const NavHome = Template.bind({})
NavHome.args = { icon: 'navHome', color: 'primary', size: 32 }

export const NavNotificationsInactive = Template.bind({})
NavNotificationsInactive.args = {
  icon: 'navNotificationsInactive',
  color: 'primary',
  size: 32,
}

export const NavNotificationsContainer = Template.bind({})
NavNotificationsContainer.args = {
  icon: 'navNotificationsContainer',
  color: 'primary',
  size: 32,
}

export const Notifications = Template.bind({})
Notifications.args = { icon: 'notifications', color: 'primary', size: 32 }

export const OpenSeaBlock = Template.bind({})
OpenSeaBlock.args = { icon: 'openSeaBlock', color: 'primary', size: 32 }

export const Pen = Template.bind({})
Pen.args = { icon: 'pen', color: 'primary', size: 32 }

export const Photo = Template.bind({})
Photo.args = { icon: 'photo', color: 'primary', size: 32 }

export const QuoraBlock = Template.bind({})
QuoraBlock.args = { icon: 'quoraBlock', color: 'primary', size: 32 }

export const Quora = Template.bind({})
Quora.args = { icon: 'quora', color: 'primary', size: 32 }

export const RaribleBlock = Template.bind({})
RaribleBlock.args = { icon: 'raribleBlock', color: 'primary', size: 32 }

export const SearchCircle = Template.bind({})
SearchCircle.args = { icon: 'searchCircle', color: 'primary', size: 32 }

export const Share = Template.bind({})
Share.args = { icon: 'share', color: 'primary', size: 32 }

export const ShowroomBlock = Template.bind({})
ShowroomBlock.args = { icon: 'showroomBlock', color: 'primary', size: 32 }

export const Showroom = Template.bind({})
Showroom.args = { icon: 'showroom', color: 'primary', size: 32 }

export const Spacebar = Template.bind({})
Spacebar.args = { icon: 'spacebar', color: 'primary', size: 32 }

export const SuperRareBlock = Template.bind({})
SuperRareBlock.args = { icon: 'superRareBlock', color: 'primary', size: 32 }

export const SuperRare = Template.bind({})
SuperRare.args = { icon: 'superRare', color: 'primary', size: 32 }

export const ToggleLists = Template.bind({})
ToggleLists.args = { icon: 'toggleLists', color: 'primary', size: 32 }

export const Trophy = Template.bind({})
Trophy.args = { icon: 'trophy', color: 'primary', size: 32 }

export const Truthfulness = Template.bind({})
Truthfulness.args = { icon: 'truthfulness', color: 'primary', size: 32 }

export const TwitterBlock = Template.bind({})
TwitterBlock.args = { icon: 'twitterBlock', color: 'primary', size: 32 }

export const Twitter = Template.bind({})
Twitter.args = { icon: 'twitter', color: 'primary', size: 32 }

export const TwitterCircle = Template.bind({})
TwitterCircle.args = { icon: 'twitterCircle', color: 'primary', size: 32 }

export const Upshot = Template.bind({})
Upshot.args = { icon: 'upshot', color: 'primary', size: 32 }

export const Uptoken = Template.bind({})
Uptoken.args = { icon: 'uptoken', color: 'primary', size: 32 }

export const UptokenStacked = Template.bind({})
UptokenStacked.args = { icon: 'uptokenStacked', color: 'primary', size: 32 }

export const Usdc = Template.bind({})
Usdc.args = { icon: 'usdc', color: 'primary', size: 32 }

export const VerificationStatusActive = Template.bind({})
VerificationStatusActive.args = {
  icon: 'verificationStatusActive',
  color: 'primary',
  size: 32,
}

export const VerificationStatusPaused = Template.bind({})
VerificationStatusPaused.args = {
  icon: 'verificationStatusPaused',
  color: 'primary',
  size: 32,
}

export const Wallet = Template.bind({})
Wallet.args = { icon: 'wallet', color: 'primary', size: 32 }

export const X = Template.bind({})
X.args = { icon: 'x', color: 'primary', size: 32 }

export const YoutubeBlock = Template.bind({})
YoutubeBlock.args = { icon: 'youtubeBlock', color: 'primary', size: 32 }

export const Youtube = Template.bind({})
Youtube.args = { icon: 'youtube', color: 'primary', size: 32 }

export const ZoraBlock = Template.bind({})
ZoraBlock.args = { icon: 'zoraBlock', color: 'primary', size: 32 }

export const Zora = Template.bind({})
Zora.args = { icon: 'zora', color: 'primary', size: 32 }
