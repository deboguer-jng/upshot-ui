import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import Panel from '../../@UI/Panel'

export const CollectionCardBase = styled(Panel)`
  padding: ${({ theme }) => theme.sizes[2] + 'px'};
  border-color: ${({ theme }) => theme.colors['grey-700']};
  border-width: 2px;
  border-style: solid;
`

export const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes[3] + 'px'};
`

export const SeeAllButton = styled(Box)`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-color: ${({ theme }) => theme.colors['grey-700']};
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.radii.sm};

  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors['grey-500']};
    border-color: ${({ theme }) => theme.colors['grey-500']};
  }

  &::after {
    content: '+ See All';
    position: absolute;
    top: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: ${({ theme }) => theme.fontWeights.heading};
    color: ${({ theme }) => theme.colors['grey-700']};
    width: 100%;
    height: 100%;
  }
`
