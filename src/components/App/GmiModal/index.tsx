import React, { forwardRef, useRef } from 'react'
import { GmiModalBase, ConnectProviders, Provider, Search } from './Styled'
import { BoxProps, Image } from 'theme-ui'
import Text from '../../@UI/Text'
import { Input, Flex } from 'theme-ui'

enum ConnectorName {
  Injected = 'Injected',
  WalletConnect = 'WalletConnect',
}

export interface GmiModalProps extends BoxProps {
  /**
   * Handler for the provider onClick event.
   */
  onConnect?: (provider: ConnectorName) => void
  /**
   * Handler for the gmi search event.
   */
  onSearch?: (address: string) => void
  /**
   * Hides the MetaMask web3 provider option if unavailable.
   */
  hideMetaMask?: boolean
}

/**
 * Provides a modal for the gmi page.
 */
const GmiModal = forwardRef(
  (
    { onConnect, onSearch, hideMetaMask = true, ...props }: GmiModalProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const inputRef = useRef<HTMLInputElement>()
    const handleSearch = (e?: React.FormEvent) => {
      e?.preventDefault()
      if (!inputRef.current?.value) return

      onSearch?.(inputRef.current.value)
    }

    return (
      <GmiModalBase {...{ ref, ...props }}>
        <Text variant="h1Primary">Upshot gmi</Text>
        <Text>Search any wallet to see the Upshot gmi.</Text>

        <Flex sx={{ position: 'relative', width: '100%' }}>
          <form onSubmit={handleSearch} style={{ width: '100%' }}>
            <Input
              autoFocus
              ref={inputRef}
              placeholder="Wallet address or ENS"
              sx={{
                background: '#000',
                border: 'none',
                borderRadius: '14px',
                height: '56px',
                padding: '8px 20px',
                outline: 'none',
                flexGrow: 1,
                paddingRight: '120px',
              }}
            />
          </form>
          <Search $color="blue" onClick={handleSearch}>
            Search
          </Search>
        </Flex>

        <Text>Or, connect your wallet:</Text>
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
      </GmiModalBase>
    )
  }
)

export default GmiModal
