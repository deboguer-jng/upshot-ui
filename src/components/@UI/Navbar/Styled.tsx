import styled from '@emotion/styled'

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
  padding: ${({ theme }) => theme.navbar.paddingTop}px
    ${({ theme }) => theme.navbar.paddingLeft}px;
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
