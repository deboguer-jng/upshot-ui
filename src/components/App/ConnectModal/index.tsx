import React, { forwardRef } from 'react'
import {
  ConnectModalBase,
  ConnectProviders,
  Provider,
  StyledLink,
} from './Styled'
import { BoxProps, Image } from 'theme-ui'
import Text from '../../@UI/Text'

enum ConnectorName {
  Injected = 'Injected',
  WalletConnect = 'WalletConnect',
}

export interface ConnectModalProps extends BoxProps {
  /**
   * Handler for the provider onClick event.
   */
  onConnect?: (provider: ConnectorName) => void
  /**
   * Hides the MetaMask web3 provider option if unavailable.
   */
  hideMetaMask?: boolean
}

/**
 * Provides a surface for UI elements.
 */
const ConnectModal = forwardRef(
  (
    { onConnect, hideMetaMask = true, ...props }: ConnectModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <ConnectModalBase {...{ ref, ...props }}>
      <Text variant="h1Primary">Connect</Text>
      <Text>Link your Ethereum wallet to view your NFTs on Upshot</Text>

      <ConnectProviders>
        {!hideMetaMask && (
          <Provider
            $color="orange"
            onClick={() => onConnect?.(ConnectorName.Injected)}
          >
            MetaMask
            <Image
              src="/img/wallets/branding/metamask-fox.svg"
              alt="MetaMask logo"
              width={40}
              height={40}
            />
          </Provider>
        )}
        <Provider
          $color="blue"
          onClick={() => onConnect?.(ConnectorName.WalletConnect)}
        >
          WalletConnect
          <Image
            src="/img/wallets/branding/walletconnect-logo.svg"
            alt="WalletConnect logo"
            width={40}
            height={40}
          />
        </Provider>
      </ConnectProviders>

      <StyledLink
        href="https://ethereum.org/en/wallets/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Learn about wallets →
      </StyledLink>
    </ConnectModalBase>
  )
)

export default ConnectModal
