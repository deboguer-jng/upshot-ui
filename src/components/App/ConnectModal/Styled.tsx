import styled from '@emotion/styled'
import { Flex } from 'theme-ui'
import Colors from '../../../themes/UpshotUI/colors'

export const ConnectModalBase = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100vw;
  max-width: 360px;
  padding: ${({ theme }) => theme.space[6] + 'px'};
  background-color: ${({ theme }) => theme.rawColors['grey-800']};
  color: ${({ theme }) => theme.rawColors['grey-300']};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadow.default};
`

export const ConnectProviders = styled(Flex)`
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const Provider = styled(Flex)<{ $color: keyof typeof Colors }>`
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.space[5] + 'px'};
  background: ${({ theme, $color }) => theme.rawColors[$color]};
  height: 56px;
  width: 100%;
  border-radius: 14px;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  color: ${({ theme }) => theme.rawColors['grey-200']};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  user-select: none;

  &:active {
    transform: scale(0.98);
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.default};
    color: ${({ theme }) => theme.rawColors.white};
  }
`

export const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
