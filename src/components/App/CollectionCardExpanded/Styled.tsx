import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import Panel from '../../@UI/Panel'

export const CollectionCardExpandedBase = styled(Panel)`
  padding: 0 ${({ theme }) => theme.space[3] + 'px'};
  background: ${({ theme }) => theme.colors['grey-800']};
  border-color: ${({ theme }) => theme.colors['grey-700']};
  border-width: 2px;
  border-style: solid;
`

export const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  max-height: 95vh;
  gap: ${({ theme }) => theme.sizes[3] + 'px'};
`

export const MasonryContainer = styled(Box)`
  ${({ theme: { scroll } }) => scroll.thin}
  padding: 0 ${({ theme }) => theme.space[3] + 'px'};
  overflow-y: auto;
`

export const GridItemButton = styled(Box)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors['grey-700']};
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors['grey-700']};
  width: 100%;
  height: 100%;
  font-weight: heading;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors['grey-500']};
    border-color: ${({ theme }) => theme.colors['grey-500']};
  }
`
