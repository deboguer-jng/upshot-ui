import React, {
  forwardRef,
  HTMLAttributes,
  EventHandler,
  ReactEventHandler,
} from 'react'
import {
  NavbarWrapper,
  NavbarItem,
  NavbarItemIcon,
  NavbarUPTBalance,
  NavbarUPTBalanceText,
  NavbarWallet,
  NavbarLogo,
  NavbarProfile,
  NavbarProfileDetails,
  SearchWrapper,
} from './Styled'
import Icon from '../../@UI/Icon'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import InputRoundedSearch, {
  InputSuggestion,
} from '../../@UI/InputRoundedSearch'
import { useBreakpointIndex } from '@theme-ui/match-media'

export interface NavbarInterface {
  /**
   * Avatar Image URL
   */
  avatarImageUrl?: string
  /**
   * ENS name
   */
  ensName?: string
  /**
   * Wallet address
   */
  address?: string
  searchSuggestions?: InputSuggestion[]
  searchValue?: string
  searchDefaultValue?: string
  onSearchValueChange?: ReactEventHandler<HTMLInputElement>
  onSearchSuggestionChange?: (item: InputSuggestion) => void
  onSearchKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void // @todo Refactor all these props and use rfs
  onSearch: (e: React.FormEvent | React.MouseEvent) => void
  onLogoClick: (e: React.MouseEvent<HTMLElement>) => void
  onConnectClick?: (e: React.MouseEvent<HTMLElement>) => void
  onSearchBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const Navbar = forwardRef(
  (
    {
      avatarImageUrl = '/img/defaultAvatar.png',
      ensName,
      address,
      searchValue,
      searchSuggestions = [],
      searchDefaultValue,
      onSearchKeyUp,
      onSearchValueChange,
      onSearchSuggestionChange,
      onSearchBlur,
      onSearch,
      onLogoClick,
      onConnectClick,
      ...props
    }: NavbarInterface,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const isMobile = useBreakpointIndex() <= 1

    return (
      <NavbarWrapper {...{ ref, ...props }}>
        <Flex style={{ alignItems: 'center', gap: '16px' }}>
          <NavbarItem>
            <NavbarLogo onClick={onLogoClick}>
              <Icon icon="upshot" />
            </NavbarLogo>
          </NavbarItem>

          <SearchWrapper>
            <form onSubmit={onSearch}>
              <InputRoundedSearch
                fullWidth
                hasButton={Boolean(searchValue)}
                variant="nav"
                suggestions={searchSuggestions}
                onSuggestionSelect={onSearchSuggestionChange}
                placeholder="Search..."
                dark
                value={searchValue}
                defaultValue={searchDefaultValue}
                onChange={onSearchValueChange}
                onBlur={onSearchBlur}
                onKeyUp={onSearchKeyUp}
                buttonProps={{
                  onClick: onSearch,
                  type: 'button',
                }}
              />
            </form>
          </SearchWrapper>
        </Flex>
        <Flex style={{ alignItems: 'center', gap: '16px' }}>
          {/* <NavbarItem>
          <NavbarItemIcon>
            <Icon icon="notificationFilled" />
          </NavbarItemIcon>
        </NavbarItem> */}
          {/* <NavbarItem>
          <NavbarItemIcon>
            <Icon icon="question" />
          </NavbarItemIcon>
        </NavbarItem> */}
          {/* <NavbarItem>
          <NavbarUPTBalance>
            <Icon icon="upshot" />
            <NavbarUPTBalanceText>
              <Text variant="large"> 50</Text>
              <Text variant="large">UPT</Text>
            </NavbarUPTBalanceText>
          </NavbarUPTBalance>
        </NavbarItem> */}
          {!isMobile && (
            <>
              {address ? (
                <NavbarItem>
                  <NavbarProfile>
                    <img src={avatarImageUrl} />
                    <NavbarProfileDetails>
                      {ensName && <Text variant="small">{ensName}</Text>}
                      <Text variant="small">{address}</Text>
                    </NavbarProfileDetails>
                    {/* <Icon icon="arrowDropUserBubble" /> */}
                  </NavbarProfile>
                </NavbarItem>
              ) : (
                <NavbarItem onClick={onConnectClick}>
                  <NavbarWallet>
                    <Icon icon="wallet" size={32} />
                    Connect Wallet
                  </NavbarWallet>
                </NavbarItem>
              )}
            </>
          )}

          {/* <NavbarItem>
            <NavbarItemIcon>
              <Icon icon="items" />
            </NavbarItemIcon>
          </NavbarItem> */}
        </Flex>
      </NavbarWrapper>
    )
  }
)

export default Navbar
