import styled from '@emotion/styled'
import { Grid } from 'theme-ui'

interface CollectorRowContentProps {
  isMobile?: boolean
}

export const CollectorRowBase = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors['grey-900']};
  cursor: pointer;
`

export const CollectorRowContent = styled(Grid)<CollectorRowContentProps>`
  grid-template-columns: 48px auto min-content min-content;
  padding: ${({ theme }) => theme.space[2] + 'px'};
  padding-left: ${({ theme, isMobile }) => isMobile ? theme.space[2] + 'px' : '16px'};
  padding-right: ${({ theme, isMobile }) => isMobile ? theme.space[2] + 'px' : '16px'};
  background: ${({ theme }) => theme.colors.black};
  border-radius: 20px;
`

export const CollectorRowExpansion = styled.div<{
  $open: boolean
}>`
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? 'auto' : 0)};
`
