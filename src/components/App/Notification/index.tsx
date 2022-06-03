import React, { forwardRef } from 'react'
import { ButtonProps } from 'theme-ui'

import Link from '../../@UI/Link'
import { PanelProps } from '../../@UI/Panel'
import Text from '../../@UI/Text'
import {
  CenterFlex,
  Divider,
  StyledPanel,
  StyledFlex,
  RoundImage,
} from './Styled'
import Label from '../../@UI/Label'

export interface NotifRowProps extends ButtonProps {
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

export const NotifRow = forwardRef(
  (
    {
      url,
      width = null,
      marketplaceName,
      linkComponent,
      ...props
    }: NotifRowProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => (
    <Link href={url} noHover target="_blank" component={linkComponent} {...{ ref }}>
      <StyledFlex>
        <CenterFlex>
          <RoundImage src={`/img/sample_nft_1.jpg`} />
        </CenterFlex>

        <CenterFlex sx={{ flexGrow: '1' }}>
          <Text variant="xLarge">
            Azuki
          </Text>
          <Text color="grey-500">
            Collection appraisal has been updated
          </Text>
        </CenterFlex>
        
        <CenterFlex>
          <Label
            size="xs"
            variant="currency"
            sx={{ lineHeight: '1rem' }}
          >
            420.69
          </Label>
          <Text color="blue" sx={{ lineHeight: '1rem' }}>
            +6.9%
          </Text>
          <Text color="grey-700" variant="small" sx={{ lineHeight: '1rem' }}>
            69 min ago
          </Text>
        </CenterFlex>

      </StyledFlex>
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
          variant="h3Primary"
        >
          Notifications
        </Text>

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

        <NotifRow />
        <NotifRow />
        <NotifRow />

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

        <NotifRow />
        <NotifRow />
        <NotifRow />
      </StyledPanel>
    )
  }
)

export default NotifPopper
