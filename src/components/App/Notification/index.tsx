import React, { forwardRef } from 'react'

import Link, { LinkProps } from '../../@UI/Link'
import { PanelProps } from '../../@UI/Panel'
import Text from '../../@UI/Text'
import {
  CenterFlex,
  Divider,
  StyledPanel,
  StyledFlex,
  RoundImage,
  EllipsisText,
} from './Styled'
import Label from '../../@UI/Label'

export interface NotifRowProps extends LinkProps {
  /**
   * Notification url
   */
  url: string
  /**
   * Notification image src
   */
  image?: string
  /**
   * Notification title
   */
  title: string
  /**
   * Notification description
   */
  description: string
  /**
   * Notification price
   */
  price?: number
  /**
   * Notification percentage
   */
  percentage?: number
  /**
   * Notification time
   */
  time?: string
  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
}

export const NotifRow = forwardRef(
  (
    {
      url,
      image,
      title,
      description,
      price,
      percentage,
      time,
      linkComponent,
      ...props
    }: NotifRowProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => (
    <Link href={url} noHover target="_blank" component={linkComponent} {...{ ref, ...props }}>
      <StyledFlex>
        <CenterFlex>
          <RoundImage src={image} width={52} />
        </CenterFlex>

        <CenterFlex sx={{ flexGrow: '1' }}>
          <EllipsisText variant="xLarge">
            {title}
          </EllipsisText>
          <EllipsisText color="grey-500">
            {description}
          </EllipsisText>
        </CenterFlex>

        <CenterFlex sx={{ minWidth: 'min-content' }}>
          <Label
            size="xs"
            variant="currency"
            sx={{ lineHeight: '1rem' }}
          >
            {price.toString()}
          </Label>
          <Text color="blue" sx={{ lineHeight: '1rem' }}>
            {percentage}%
          </Text>
          <Text color="grey-700" variant="small" sx={{ lineHeight: '1rem' }}>
            {time}
          </Text>
        </CenterFlex>

      </StyledFlex>
    </Link>
  )
)

export interface NotifObject {
  unread: NotifRowProps[]
  read: NotifRowProps[]
}

export interface NotifPopperProps extends PanelProps {
  /**
   * Variant: wide or popup. Default: wide. The popup variant has 20% transparency and blurry backdrop.
   */
  notifs: NotifObject
  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
}

/**
 * Provides wide and popup Opensea panels.
 */
const NotifPopper = forwardRef(
  (
    {
      notifs,
      linkComponent,
      ...props
    }: NotifPopperProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const showUnread = notifs.unread && notifs.unread.length > 0
    const showRead = notifs.read && notifs.read.length > 0

    return (
      <StyledPanel>
        <Text
          color="white"
          variant="h3Primary"
        >
          Notifications
        </Text>

        {showUnread && ( // if there are unread notifs
          <>
            <Text
              color="grey-600"
              sx={{
                fontWeight: 'bold',
                marginTop: '10px',
              }}
            >
              Unread
            </Text>

            <Divider />

            {notifs.unread.map((item, i) => (
              <NotifRow key={`notif-unread-${i}`} linkComponent={linkComponent}  {...item } />          
            ))}
          </>
        )}

        {showRead && ( // if there are read notifs
          <>
            <Text
              color="grey-600"
              sx={{
                fontWeight: 'bold',
                marginTop: '10px',
              }}
            >
              Read
            </Text>

            <Divider />

            {notifs.read.map((item, i) => (
              <NotifRow key={`notif-read-${i}`} linkComponent={linkComponent}  {...item } />          
            ))}
          </>
        )}

        {!showUnread && !showRead && (
          <>
            <Divider />
            <Text
              color="grey-600"
              sx={{
                fontWeight: 'bold',
                marginTop: '10px',
              }}
            >
              There are no notifications yet
            </Text>
          </>
        )}
        
      </StyledPanel>
    )
  }
)

export default NotifPopper
