import React, {
  forwardRef,
  HTMLAttributes,
  EventHandler,
  ReactEventHandler,
  useState,
  useEffect,
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
  Divider,
} from './Styled'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import Text from '../../@UI/Text'
import Flex from '../../Layout/Flex'
import Panel from '../../@UI/Panel'
import { usePopper } from 'react-popper'
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
  onDisconnectClick?: () => void
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
      onDisconnectClick,
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

    return (
      <>
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
                  <NavbarItem ref={setReferenceElement}>
                    <NavbarProfile ref={setNavProfileElement}>
                      <img src={avatarImageUrl} />
                      <NavbarProfileDetails>
                        {ensName && <Text variant="small">{ensName}</Text>}
                        <Text variant="small">{address}</Text>
                      </NavbarProfileDetails>
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
            )}

            {/* <NavbarItem>
            <NavbarItemIcon>
              <Icon icon="items" />
            </NavbarItemIcon>
          </NavbarItem> */}
          </Flex>
        </NavbarWrapper>
        <div
          ref={setPopperElement}
          style={{
            ...styles.popper,
            ...{
              minWidth: navProfileElement?.current?.style?.width ?? '192px',
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
              sx={{ alignItems: 'center', justifyContent: 'center', gap: 1 }}
            >
              <Icon icon="ethereum" size={16} />
              <Text
                color="white"
                sx={{
                  fontSize: 4,
                  fontWeight: 'bold',
                }}
              >
                Ethereum
              </Text>
            </Flex>

            <Divider />

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
      </>
    )
  }
)

export default Navbar
