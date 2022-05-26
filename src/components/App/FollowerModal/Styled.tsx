import styled from '@emotion/styled'
import { Box, Flex } from 'theme-ui'

interface TabButtonParams {
  active: boolean
}

export const ModalContent = styled(Box)`
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors['grey-600']};
  background-color: ${({ theme }) => theme.colors['grey-900']};
`

export const TabButton = styled.button<TabButtonParams>`
  background: transparent;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-bottom: ${({ active }) => active && `1px solid white`};
  color: ${({ active, theme }) =>
    active ? 'white' : theme.colors['grey-500']};
`

export const FollowContentWrapper = styled(Flex)`
  flex-direction: column;
  height: 500px;
  overflow: auto;
  ${({ theme: { scroll } }) => scroll.thin}
`

export const FollowButton = styled.button`
  backgorund: white;
  color: ${({ theme }) => theme.colors['grey-800']};
  padding: 6.5px 15px;
  border-radius: 15px;
  border: 1px solid white;
  margin-right: 1rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: transparent;
    color: white;
  }
`

export const FollowAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
