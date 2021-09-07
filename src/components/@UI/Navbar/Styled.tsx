import styled from '@emotion/styled'

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

export const NavbarItem = styled.div`
  margin-left: 7px;
  margin-right: 7px;
  height: 100%;
`
