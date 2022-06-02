import React, { forwardRef } from 'react'
import { ButtonProps } from 'theme-ui'

import Link from '../../@UI/Link'
import { PanelProps } from '../../@UI/Panel'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import Box from '../../Layout/Box'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import colors from '../../../themes/UpshotUI/colors'
import {
  Divider,
  StyledPanel,
} from './Styled'
import { formatNumber } from '../../../utils/number'
import Panel from '../../@UI/Panel'

export interface BuyButtonProps extends ButtonProps {
  /**
   * Button URL
   */
  marketplaceName?: string
  /**
   * Button URL
   */
  url?: string
  /**
   * Button width
   */
  width?: string
  /**
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
}

const BuyButton = forwardRef(
  (
    {
      url,
      width = null,
      marketplaceName,
      linkComponent,
      ...props
    }: BuyButtonProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => (
    <Link href={url} target="_blank" component={linkComponent} {...{ ref }}>
      <StyledButton
        variant="secondary"
        size="md"
        capitalize={true}
        $width={width}
      >
        {marketplaceName === 'OpenSea' && (
          <StyledIcon icon="openSeaBlock" color="white" size={16} />
        )}
        <StyledText color="white">Buy on {marketplaceName}</StyledText>
      </StyledButton>
    </Link>
  )
)

export interface NotifPopperProps extends PanelProps {
  /**
   * Variant: wide or popup. Default: wide. The popup variant has 20% transparency and blurry backdrop.
   */
  variant?: 'wide' | 'popup'
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
      variant = 'wide',
      linkComponent,
      ...props
    }: NotifPopperProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {

    return (
      <StyledPanel>
        <Text
          color="white"
          sx={{
            fontSize: 4,
            fontWeight: 'bold',
          }}
        >
          Notifications
        </Text>

        <Text
          color="grey-600"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Unread
        </Text>

        <Divider />

        <Text>Notification-1</Text>
        <Text>Notification-2</Text>
        <Text>Notification-3</Text>
        <Text>Notification-4</Text>

        <Text
          color="grey-600"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Read
        </Text>

        <Divider />

        <Text>Notification-5</Text>
        <Text>Notification-6</Text>
        <Text>Notification-7</Text>
      </StyledPanel>
    )
  }
)

export default NotifPopper
