import React, { forwardRef } from 'react'
import {
  ConnectModalBase,
  ConnectProviders,
  Provider,
  StyledLink,
} from './Styled'
import { BoxProps, Image } from 'theme-ui'
import Text from '../../@UI/Text'

export interface ConnectModalProps extends BoxProps {
  /**
   * Handler for the provider onClick event.
   */
  onConnect?: (provider: string) => void
}

/**
 * Provides a surface for UI elements.
 */
const ConnectModal = forwardRef(
  (
    { onConnect, ...props }: ConnectModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <ConnectModalBase {...{ ref, ...props }}>
      <Text variant="h1Primary">Connect</Text>
      <Text>
        Link your Ethereum wallet to start answering and earning on Upshot.
      </Text>

      <ConnectProviders>
        <Provider $color="orange" onClick={() => onConnect?.('metamask')}>
          MetaMask
          <Image
            src="/img/wallets/branding/metamask-fox.svg"
            alt="MetaMask logo"
            width={40}
            height={40}
          />
        </Provider>
        <Provider $color="blue" onClick={() => onConnect?.('walletconnect')}>
          WalletConnect
          <Image
            src="/img/wallets/branding/walletconnect-logo.svg"
            alt="WalletConnect logo"
            width={40}
            height={40}
          />
        </Provider>
      </ConnectProviders>

      <StyledLink>Learn about wallets →</StyledLink>
    </ConnectModalBase>
  )
)

export default ConnectModal
