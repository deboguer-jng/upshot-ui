import styled from '@emotion/styled'
import css from '@emotion/css'

interface NavbarItemProps {
  grow?: boolean
}

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    180deg,
    #000000 0%,
    #000000 82.81%,
    rgba(0, 0, 0, 0) 100%
  );
  height: ${({ theme }) => theme.navbar.height}px;
  width: 100%;
  padding-top: ${({ theme }) => theme.navbar.paddingTop}px;
  padding-bottom: ${({ theme }) => theme.navbar.paddingTop}px;
  padding-left: ${({ theme }) => theme.navbar.mobile.paddingLeft}px;
  padding-right: ${({ theme }) => theme.navbar.mobile.paddingLeft}px;

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints[1]}) {
      padding-left: ${theme.navbar.tablet.paddingLeft}px;
      padding-right: ${theme.navbar.tablet.paddingLeft}px;
    }
  `}

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints[2]}) {
      padding-left: ${theme.navbar.default.paddingLeft}px;
      padding-right: ${theme.navbar.default.paddingLeft}px;
    }
  `}
`

export const NavbarItem = styled.div<NavbarItemProps>`
  margin-left: 7px;
  margin-right: 7px;
  background: transparent;
  flex-grow: ${({ grow }) => (grow ? 1 : 0)};
`

export const NavbarLogo = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;

  svg {
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 30px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors['grey-500']};

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.breakpoints[1]}) {
      width: 300px;
    }
  `}
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
