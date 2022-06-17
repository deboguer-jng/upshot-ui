import styled from '@emotion/styled'
import { Grid } from 'theme-ui'
import Panel from '../../@UI/Panel'
import { transientOptions } from '../../../themes'

interface CollectorRowAvatarWrapperProps {
  selected?: boolean
}

export const CollectorRowBase = styled('div', transientOptions)`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors['grey-900']};
`

export const CollectorRowContent = styled(Grid)<{ $hasImage?: boolean }>`
  grid-template-columns: ${({ $hasImage = true }) =>
    $hasImage
      ? '48px auto min-content min-content'
      : 'auto min-content min-content'};
  padding: ${({ theme }) => theme.space[2] + 'px'};
  background: ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  cursor: pointer;
`

export const CollectorRowExpansion = styled('div', transientOptions)<{
  $open: boolean
  $contentHeight?: number
}>`
  overflow: hidden;
  transition: 0.2s ease-in-out;
  max-height: ${({ $open, $contentHeight }) =>
    $open ? ($contentHeight ? $contentHeight + 'px' : 'auto') : '0px'};
`

export const CollectorRowAvatarWrapper = styled(
  'button',
  transientOptions
)<CollectorRowAvatarWrapperProps>`
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  flex-grow: 1;
  position: relative;
  margin: auto;
  width: 70%;
  padding-top: 70%;

  img {
    border: 4px solid
      ${({ selected, theme }) => (selected ? theme.colors.primary : 'white')};
    border-radius: 50%;
  }

  &:hover {
    img {
      border: 4px solid ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
    }
  }
`

export const StyledPanel = styled(Panel)<{
  $hideBorder?: boolean
}>`
  padding: ${({ $hideBorder }) =>
    $hideBorder === true ? '0px' : '16px'} !important;
  border: ${({ theme, $hideBorder }) =>
      $hideBorder === true ? 'none' : theme.colors['grey-700']}
    solid 1px;
  background: ${({ theme }) => theme.colors.transparent};
  border-radius: ${({ theme }) => theme.radii.md};
`
