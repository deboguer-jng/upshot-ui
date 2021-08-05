import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import { PanelProps } from './'

export const PanelBase = styled(Box)<PanelProps>`
  display: inline-block;
  padding: ${({ theme }) => theme.space[4] + 'px'};
  background-color: ${({ theme, isInner }) =>
    theme.colors[isInner ? 'black' : 'grey-800']};
  border-radius: ${({ theme, isInner }) => theme.radii[isInner ? 'md' : 'lg']};
`
