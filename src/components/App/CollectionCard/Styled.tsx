import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import { transientOptions } from '../../../themes'
import Panel from '../../@UI/Panel'

export const CollectionCardBase = styled(Panel, transientOptions)`
  padding: ${({ theme }) => theme.sizes[2] + 'px'};
  border-color: ${({ theme }) => theme.colors['grey-700']};
  border-width: 2px;
  border-style: solid;
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors['grey-600']};
    box-shadow ${({ theme }) => theme.shadow.default};
  }
`

export const CardContainer = styled(Box, transientOptions)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes[3] + 'px'};
`

export const SeeAllButton = styled(Box, transientOptions)<{
  $imageSrc: string
}>`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: ${({ theme }) => theme.radii.sm};
  background-image: ${({ $imageSrc }) => `url(${$imageSrc})`};
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors['grey-400']};
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors['white']} !important;

    &::before {
      background: rgba(0, 0, 0, 0.75);
    }
  }

  &::before {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.67);
    display: block;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(12px);
    transition: ${({ theme }) => theme.transitions.default};
  }

  &::after {
    content: '+ See All';
    position: absolute;
    top: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-weight: ${({ theme }) => theme.fontWeights.heading};
  }
`
