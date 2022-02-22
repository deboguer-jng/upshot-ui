import styled from '@emotion/styled'
import { Grid } from 'theme-ui'

interface CollectorRowAvatarWrapperProps {
  selected?: boolean
}
interface CollectorRowContentProps {
  isMobile?: boolean
}

export const CollectorRowBase = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors['grey-900']};
`

export const CollectorRowContent = styled(Grid)<CollectorRowContentProps>`
  grid-template-columns: 48px auto min-content min-content;
  padding: ${({ theme }) => theme.space[2] + 'px'};
  padding-left: ${({ theme, isMobile }) => isMobile ? theme.space[2] + 'px' : '16px'};
  padding-right: ${({ theme, isMobile }) => isMobile ? theme.space[2] + 'px' : '16px'};
  background: ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  cursor: pointer;
`

export const CollectorRowExpansion = styled.div<{
  $open: boolean
  $contentHeight?: number
}>`
  overflow: hidden;
  transition: 0.2s ease-in-out;
  max-height: ${({ $open, $contentHeight }) => ($open ? ($contentHeight ? $contentHeight + 'px' : 'auto') : '0px')};
`

export const CollectorRowAvatarWrapper = styled.button<CollectorRowAvatarWrapperProps>`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;

  img {
    border: 4px solid ${({selected, theme}) => selected ? theme.colors.primary : 'white'};
    border-radius: 50%;
  }

  &:hover {
    img {
      border: 4px solid ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
    }
  }
`