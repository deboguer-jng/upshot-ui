import React, {
  forwardRef,
  ReactEventHandler,
  useState,
  useEffect,
  useMemo,
} from 'react'
import {
  NavbarWrapper,
  NavbarItem,
  NavbarWallet,
  NavbarLogo,
  NavbarProfile,
  NavbarProfileDetails,
  SearchWrapper,
  StyledLink,
  Divider,
} from './Styled'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import Panel from '../../@UI/Panel'
import { usePopper } from 'react-popper'
import InputRoundedSearch, {
  InputSuggestion,
} from '../../@UI/InputRoundedSearch'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import { shortenAddress } from '../../../utils/address'
import zIndex from '../../../themes/UpshotUI/zIndex'
import { Text, Box, Flex, BoxProps } from 'theme-ui'
export interface NavbarInterface extends BoxProps {
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
  /**
   * Sidebar is visible
   */
  showSidebar?: boolean
  searchSuggestions?: InputSuggestion[]
  searchValue?: string
  searchDefaultValue?: string
  onSearchValueChange?: ReactEventHandler<HTMLInputElement>
  onSearchSuggestionChange?: (item: InputSuggestion) => void
  onSearchKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void // @todo Refactor all these props and use rfs
  onSearch: (e: React.FormEvent | React.MouseEvent) => void
  onLogoClick: (e: React.MouseEvent<HTMLElement>) => void
  onMenuClick: (e: React.MouseEvent<HTMLElement>) => void
  onConnectClick?: (e: React.MouseEvent<HTMLElement>) => void
  onSearchBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onDisconnectClick?: () => void
}

const Navbar = forwardRef(
  (
    {
      avatarImageUrl = '/img/defaultAvatar.png',
      showSidebar = false,
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
      onDisconnectClick,
      onMenuClick,
      children,
      ...props
    }: NavbarInterface,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [showNavPopper, setShowNavPopper] = useState(false)
    const [referenceElement, setReferenceElement] = useState(null)
    const [popperElement, setPopperElement] = useState(null)
    const [navProfileElement, setNavProfileElement] = useState(null)
    const { styles, attributes, forceUpdate } = usePopper(
      referenceElement,
      popperElement,
      {
        placement: 'bottom-end',
      }
    )
    const isMobile = useBreakpointIndex() <= 1

    const handleNavPopper = () => {
      if (!showNavPopper) {
        document.addEventListener(
          'mouseup',
          (e) => {
            if ((e.target as HTMLDivElement).classList.contains('popperButton'))
              return
            setShowNavPopper(false)
          },
          {
            once: true,
          }
        )
      }
      setShowNavPopper(!showNavPopper)
    }

    useEffect(() => {
      forceUpdate?.()
    }, [showNavPopper])

    const search = useMemo(
      () => (
        <SearchWrapper>
          <form onSubmit={onSearch}>
            <InputRoundedSearch
              fullWidth
              hasButton
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
      ),
      []
    )

    return (
      <Box {...{ ref, ...props }}>
        <Flex sx={{ flexDirection: 'column', gap: 4 }}>
          <NavbarWrapper>
            <Flex style={{ alignItems: 'center', gap: '16px' }}>
              <NavbarItem>
                <NavbarLogo onClick={onLogoClick}>
                  <Icon icon="upshot" />
                </NavbarLogo>
              </NavbarItem>

              {!isMobile && search}
            </Flex>
            <Flex style={{ alignItems: 'center', gap: '16px' }}>
              <>
                {address ? (
                  <NavbarItem ref={setReferenceElement}>
                    <NavbarProfile ref={setNavProfileElement}>
                      <img src={avatarImageUrl} />
                      {!isMobile && (
                        <NavbarProfileDetails>
                          {ensName && (
                            <Text
                              variant="medium"
                              sx={{
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: 'white',
                              }}
                            >
                              <StyledLink href={`/analytics/user/${address}`}>
                                {ensName}
                              </StyledLink>
                            </Text>
                          )}
                          <Text
                            variant="small"
                            sx={{ color: '#A7A7A7', textDecoration: 'none' }}
                          >
                            <StyledLink href={`/analytics/user/${address}`}>
                              {shortenAddress(address)}
                            </StyledLink>
                          </Text>
                        </NavbarProfileDetails>
                      )}
                      <IconButton
                        className="popperButton"
                        onClick={handleNavPopper}
                      >
                        <Icon
                          style={{ pointerEvents: 'none' }}
                          icon="arrowDropUserBubble"
                        />
                      </IconButton>
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

              {!!address && (
                <IconButton
                  onClick={onMenuClick}
                  sx={{
                    backgroundColor: showSidebar ? 'grey-300' : 'grey-800',
                    width: 45,
                    height: 45,
                    transition: 'default',
                    '&:hover': {
                      backgroundColor: showSidebar
                        ? 'white !important'
                        : 'grey-900 !important',
                    },
                  }}
                >
                  <Icon icon={showSidebar ? 'x' : 'items'} size={16} />
                </IconButton>
              )}
            </Flex>
            {children}
          </NavbarWrapper>
          {isMobile && showSidebar && search}
        </Flex>
        <div
          ref={setPopperElement}
          style={{
            ...styles.popper,
            ...{
              minWidth: navProfileElement?.current?.style?.width ?? '192px',
              zIndex: zIndex.nav + 3,
            },
          }}
          {...attributes.popper}
        >
          <Panel
            sx={{
              display: showNavPopper ? 'flex' : 'none',
              flexDirection: 'column',
              marginTop: 2,
              gap: 4,
            }}
          >
            <Flex
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 1,
              }}
            >
              <Icon icon="ethereum" size={16} />
              <Text
                color="white"
                sx={{
                  fontSize: 4,
                  fontWeight: 'bold',
                }}
              >
                Mainnet
              </Text>
            </Flex>

            <Divider />

            <Text
              as="a"
              // @ts-ignore
              href={`/analytics/user/${address}`}
              color="grey-600"
              sx={{
                cursor: 'pointer',
                transition: 'default',
                '&:hover': { color: 'white' },
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              View Profile
            </Text>

            <Text
              as="a"
              color="grey-600"
              sx={{
                cursor: 'pointer',
                transition: 'default',
                '&:hover': { color: 'white' },
                fontWeight: 'bold',
              }}
              onClick={onDisconnectClick}
            >
              Disconnect
            </Text>
          </Panel>
        </div>
      </Box>
    )
  }
)

export default Navbar
