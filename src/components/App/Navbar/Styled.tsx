import styled from '@emotion/styled'
import css from '@emotion/css'
import { breakpoints } from '../../../themes/UpshotUI/sizes'

interface NavbarItemProps {
  grow?: boolean
}

interface PopperProps {
  $showWalletPopper?: boolean
}
        
export const NavbarBase = styled.div`
  padding: ${({ theme }) => `${theme.sizes[5]}px ${theme.sizes[3]}px`};
  width: 100%;
  margin: 0 auto;

  ${breakpoints.map(
    (bkp: string) => css`
      @media only screen and (min-width: ${bkp}) {
        max-width: ${bkp};
      }
    `
  )}
`

export const NavbarWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.nav + 1};
`

export const NavbarItem = styled.div<NavbarItemProps>`
  background: transparent;
  flex-grow: ${({ grow }) => (grow ? 1 : 0)};
`

export const NavbarLogo = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  cursor: pointer;

  svg {
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const SearchWrapper = styled.div<{ $hasValue?: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 30px;
  background-color: ${({ $hasValue }) =>
    `rgba(0, 0, 0, ${$hasValue ? 0.6 : 0.3})`};
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors['grey-500']};
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.nav + 1};
  transition: all 0.75s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints[1]}) {
      width: 300px;
    }
  `}

  form {
    width: 100%;

    & > div {
      width: unset;

      & > div:first-of-type > input {
        z-index: ${({ theme }) => theme.zIndex.nav + 2};
      }

      & > div:first-of-type > button {
        z-index: ${({ theme }) => theme.zIndex.nav + 2};
      }

      & > div:last-child {
        z-index: ${({ theme }) => theme.zIndex.nav + 1};
      }
    }
  }
`

export const NavbarItemIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['grey-800']};

  svg {
    height: 16px;
    width: 16px;
  }
`

export const NavbarUPTBalance = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 30px;
  padding: 12px 17px 12px 12px;
  background-color: ${({ theme }) => theme.colors['grey-800']};

  svg {
    height: 32px;
    width: 32px;
  }
`

export const NavbarUPTBalanceText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  align-items: flex-end;
`

export const NavbarProfile = styled.div<PopperProps>`
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 30px;
  padding: 12px 17px 12px 12px;
  transition: all 0.75s ease;
  background-color: ${({ theme, $showWalletPopper }) => $showWalletPopper ? theme.colors['black'] : theme.colors['grey-800']};

  img {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    margin-right: 12px;
  }

  svg {
    width: 9px;
  }
`

export const NavbarProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`

export const NavbarWallet = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4] + 'px'};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  height: 56px;
  border-radius: 30px;
  padding: 12px;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['grey-800']};
  }
`

export const Divider = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors['grey-300']};
  opacity: 5%;
`

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
