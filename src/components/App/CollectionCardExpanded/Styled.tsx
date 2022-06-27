import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import { transientOptions } from '../../../themes'
import Panel from '../../@UI/Panel'

export const CollectionCardExpandedBase = styled(Panel, transientOptions)`
  padding: 0;
  background-color: ${({ theme }) => theme.colors['grey-900']};
  border-color: ${({ theme }) => theme.colors['grey-700']};
  border-width: 2px;
  border-style: solid;
`

export const CardContainer = styled(Box, transientOptions)`
  display: flex;
  flex-direction: column;
  max-height: 95vh;
  gap: ${({ theme }) => theme.sizes[3] + 'px'};
`

export const MasonryContainer = styled(Box, transientOptions)`
  ${({ theme: { scroll } }) => scroll.thin}
  margin-left: ${({ theme }) => theme.space[5] + 'px'};
  margin-right: ${({ theme }) => theme.space[2] + 'px'};
  overflow-x: hidden;
  overflow-y: scroll;
`

export const GridItemButton = styled(Box, transientOptions)`
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
