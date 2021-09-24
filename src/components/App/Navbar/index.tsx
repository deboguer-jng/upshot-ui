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
  NavbarLogo,
  NavbarProfile,
  NavbarProfileDetails,
  SearchWrapper,
} from './Styled'
import Icon from '../../@UI/Icon'
import Text from '../../@UI/Text'
import InputRoundedSearch, {
  InputSuggestion,
} from '../../@UI/InputRoundedSearch'

export interface NavbarInterface {
  searchSuggestions?: InputSuggestion[]
  searchValue?: string
  searchDefaultValue?: string
  onSearchValueChange?: ReactEventHandler<HTMLInputElement>
  onSearchSuggestionChange?: (item: InputSuggestion) => void
  onSearchKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void // @todo Refactor all these props and use rfs
  onSearch: (e: React.FormEvent | React.MouseEvent) => void
  onLogoClick: (e: React.MouseEvent<HTMLElement>) => void
  onSearchBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const Navbar = forwardRef(
  (
    {
      searchValue,
      searchSuggestions = [],
      searchDefaultValue,
      onSearchKeyUp,
      onSearchValueChange,
      onSearchSuggestionChange,
      onSearchBlur,
      onSearch,
      onLogoClick,
      ...props
    }: NavbarInterface,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <NavbarWrapper {...{ ref, ...props }}>
        <NavbarItem>
          <NavbarLogo onClick={onLogoClick}>
            <Icon icon="upshot" />
          </NavbarLogo>
        </NavbarItem>
        <SearchWrapper>
          <form onSubmit={onSearch}>
            <InputRoundedSearch
              hasButton
              fullWidth
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
        {/* comment for now */}
        {/* <NavbarItem>
            <NavbarItemIcon>
              <Icon icon="notificationFilled" />
            </NavbarItemIcon>
          </NavbarItem>
          <NavbarItem>
            <NavbarItemIcon>
              <Icon icon="question" />
            </NavbarItemIcon>
          </NavbarItem>
          <NavbarItem>
            <NavbarUPTBalance>
              <Icon icon="upshot" />
              <NavbarUPTBalanceText>
                <Text variant="large"> 50</Text>
                <Text variant="large">UPT</Text>
              </NavbarUPTBalanceText>
            </NavbarUPTBalance>
          </NavbarItem>
          <NavbarItem>
            <NavbarProfile>
              <img src="https://digitalax.mypinata.cloud/ipfs/QmYftLKLJn4T8GxjwThSJwGcZYop23mc5WkW17K7bi2Ua3" />
              <NavbarProfileDetails>
                <Text variant="small"> emmons.eth </Text>
                <Text variant="small"> 0x4df5...2d0f </Text>
              </NavbarProfileDetails>
              <Icon icon="arrowDropUserBubble" />
            </NavbarProfile>
          </NavbarItem>
          <NavbarItem>
            <NavbarItemIcon>
              <Icon icon="items" />
            </NavbarItemIcon>
          </NavbarItem> */}
      </NavbarWrapper>
    )
  }
)

export default Navbar
