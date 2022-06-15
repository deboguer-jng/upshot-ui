import React, {
  forwardRef,
  ReactEventHandler,
  useState,
  useEffect,
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
import Link from '../../@UI/Link'
import Container from '../../Layout/Container'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import Panel from '../../@UI/Panel'
import { usePopper } from 'react-popper'
import InputRoundedSearch, {
  InputSuggestion,
} from '../../@UI/InputRoundedSearch'
import Tooltip from '../../../components/@UI/Tooltip'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import { shortenAddress } from '../../../utils/address'
import zIndex from '../../../themes/UpshotUI/zIndex'
import Modal from '../../@UI/Modal'
import { Text, Flex, BoxProps } from 'theme-ui'

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
   * Link component
   */
  linkComponent?: React.FunctionComponent<any>
  /**
   * Sidebar is visible
   */
  showSidebar?: boolean
  searchSuggestions?: InputSuggestion[]
  searchValue?: string
  searchDefaultValue?: string
  onSettings?: VoidFunction
  onSearchValueChange?: ReactEventHandler<HTMLInputElement>
  onSearchSuggestionChange?: (item: InputSuggestion) => void
  onSearchKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void // @todo Refactor all these props and use rfs
  onSearch: (e: React.FormEvent | React.MouseEvent) => void
  onMenuClick: (e: React.MouseEvent<HTMLElement>) => void
  onConnectClick?: (e: React.MouseEvent<HTMLElement>) => void
  onHelpClick?: (e: React.MouseEvent<HTMLElement>) => void
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
      onSettings,
      onSearchKeyUp,
      onSearchValueChange,
      onSearchSuggestionChange,
      onSearch,
      onConnectClick,
      onDisconnectClick,
      onHelpClick,
      onMenuClick,
      linkComponent,
      children,
      ...props
    }: NavbarInterface,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [showWalletPopper, setShowWalletPopper] = useState(false)
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
    const isMobileOrTablet = useBreakpointIndex() <= 2

    const handleNavPopper = () => {
      if (!showWalletPopper) {
        document.addEventListener(
          'mouseup',
          (e) => {
            if ((e.target as HTMLDivElement).classList.contains('popperButton'))
              return
            setShowWalletPopper(false)
          },
          {
            once: true,
          }
        )
      }
      setShowWalletPopper(!showWalletPopper)
    }

    useEffect(() => {
      forceUpdate?.()
    }, [showWalletPopper])

    return (
      <Container sx={{ paddingY: 5, paddingX: 3 }} {...{ ref, ...props }}>
        <Flex
          sx={{
            width: '100%',
            flexDirection: 'column',
            gap: 4,
            position: 'relative',
          }}
        >
          <NavbarWrapper>
            <Flex
              style={{
                alignItems: 'center',
                gap: '16px',
                position: 'relative',
              }}
            >
              <NavbarItem>
                <Link component={linkComponent} href="/">
                  <NavbarLogo>
                    <Icon icon="upshot" />
                  </NavbarLogo>
                </Link>
              </NavbarItem>
              {!isMobile && (
                <SearchWrapper
                  $hasValue={!!searchValue}
                  style={{ marginLeft: '64px' }}
                >
                  <form onSubmit={onSearch}>
                    <InputRoundedSearch
                      fullWidth
                      hasSearchButton
                      variant="nav"
                      suggestions={searchSuggestions}
                      onSuggestionSelect={onSearchSuggestionChange}
                      placeholder="Try searching for Collections"
                      dark
                      value={searchValue}
                      defaultValue={searchDefaultValue}
                      onChange={onSearchValueChange}
                      onKeyUp={onSearchKeyUp}
                      buttonProps={{
                        onClick: onSearch,
                        type: 'button',
                      }}
                      sx={{
                        background: 'none'
                      }}
                    />
                  </form>
                </SearchWrapper>
              )}
            </Flex>
            <Flex style={{ alignItems: 'center', gap: '16px' }}>
              {!!onHelpClick && (
                <Tooltip
                  tooltip={'How do we price NFTs?'}
                  sx={{ marginLeft: '0px' }}
                >
                  <IconButton
                    onClick={onHelpClick}
                    sx={{
                      backgroundColor: 'grey-800',
                      width: 45,
                      height: 45,
                      transition: 'default',
                      '&:hover': {
                        boxShadow: '0px 0px 14px #0091FF',
                      },
                    }}
                  >
                    <Icon icon="question" color="grey-300" size="20" />
                  </IconButton>
                </Tooltip>
              )}
              <>
                {address ? (
                  <NavbarItem ref={setReferenceElement}>
                    <NavbarProfile
                      ref={setNavProfileElement}
                      $showWalletPopper={showWalletPopper}
                    >
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
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                maxWidth: '120px',
                                whiteSpace: 'nowrap',
                                display: 'inline-block',
                                lineHeight: 1,
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
                          style={{
                            pointerEvents: 'none',
                            transform:
                              'scaleY(' + (showWalletPopper ? '-1' : '1') + ')',
                          }}
                          icon="arrowDropUserBubble"
                        />
                      </IconButton>
                    </NavbarProfile>
                    <Modal
                      onClose={handleNavPopper}
                      {...{ open: showWalletPopper }}
                      style={{
                        background:
                          'linear-gradient(180deg, #000000 17.57%, rgba(0, 0, 0, 0) 100%)',
                        zIndex: zIndex.nav - 1,
                      }}
                    />
                  </NavbarItem>
                ) : (
                  <NavbarItem onClick={onConnectClick}>
                    <NavbarWallet>
                      <Icon icon="wallet" size={32} />
                      {!isMobileOrTablet && (
                        <Text sx={{ paddingRight: '4px' }}>Connect Wallet</Text>
                      )}
                    </NavbarWallet>
                  </NavbarItem>
                )}
              </>

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
            </Flex>
            {children}
          </NavbarWrapper>
          {isMobile && showSidebar && (
            <SearchWrapper style={{ marginTop: '72px' }}>
              <form onSubmit={onSearch}>
                <InputRoundedSearch
                  fullWidth
                  hasSearchButton
                  variant="nav"
                  suggestions={searchSuggestions}
                  onSuggestionSelect={onSearchSuggestionChange}
                  placeholder="Try searching for Collections"
                  dark
                  value={searchValue}
                  defaultValue={searchDefaultValue}
                  onChange={onSearchValueChange}
                  onKeyUp={onSearchKeyUp}
                  buttonProps={{
                    onClick: onSearch,
                    type: 'button',
                  }}
                  sx={{
                    background: 'none',
                    width: 'calc(100% + 24px)',
                    marginLeft: '-12px',
                  }}
                />
              </form>
            </SearchWrapper>
          )}
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
              display: showWalletPopper ? 'flex' : 'none',
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

            <Link
              component={linkComponent}
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
            </Link>

            {/* <Link
              onClick={onSettings}
              color="grey-600"
              sx={{
                cursor: 'pointer',
                transition: 'default',
                '&:hover': { color: 'white' },
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              Settings
            </Link> */}

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
      </Container>
    )
  }
)

export default Navbar
