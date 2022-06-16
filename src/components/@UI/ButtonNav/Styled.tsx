import styled from '@emotion/styled'
import { Flex } from '../../..'

interface ButtonNavProps {
  toggled: boolean
  capitalize?: boolean
}

export const StyledButtonNav = styled.div<ButtonNavProps>`    
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: min-content;
  transition: ${({ theme }) => theme.transitions.default};
  border-bottom: ${({ toggled }) => toggled ? `3px solid white` : `3px solid transparent`};
  flex-wrap: nowrap;
  color: ${({ theme, toggled }) => toggled ? theme.colors.white : theme.colors['grey-500']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  &:hover {
    border-bottom: 3px solid white;
    color: ${({ theme }) => theme.colors.white};
  }
`