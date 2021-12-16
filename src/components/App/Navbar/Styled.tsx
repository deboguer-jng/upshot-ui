import styled from '@emotion/styled'
import css from '@emotion/css'

interface NavbarItemProps {
  grow?: boolean
}

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

export const SearchWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors['grey-500']};
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.nav + 1};

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

export const NavbarProfile = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 30px;
  padding: 12px 17px 12px 12px;
  background-color: ${({ theme }) => theme.colors['grey-800']};

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
