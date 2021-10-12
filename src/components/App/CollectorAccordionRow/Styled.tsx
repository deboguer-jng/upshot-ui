import styled from '@emotion/styled'
import { Grid } from 'theme-ui'

export const CollectorRowBase = styled.div<{ $open: boolean }>`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors['grey-900']};
`

export const CollectorRowContent = styled(Grid)`
  grid-template-columns: min-content auto min-content min-content;
  padding: ${({ theme }) => theme.space[2] + 'px'};
  background: ${({ theme }) => theme.colors.black};
  border-radius: 20px;
`

export const CollectorRowExpansion = styled.div<{ $open: boolean }>`
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '100px' : 0)};
  transition: all 1s ease;
`
