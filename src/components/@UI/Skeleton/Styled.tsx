import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Box } from 'theme-ui'
import colors from '../../../themes/UpshotUI/colors'

const loadingFlash = keyframes`
  25%  {background-color: ${ colors['grey-700'] };}
  50%  {background-color: ${ colors['grey-600'] };}
  75% {background-color: ${ colors['grey-700'] };}
`

interface StyledSkeletonProps {
  $circle: boolean
}

const minWidth = '10px'
const minHeight = '10px'

export const StyledSkeleton = styled(Box)<StyledSkeletonProps>`
  background: ${({ theme }) => theme.colors['grey-700'] };
  min-width: ${ minWidth };
  min-height: ${ minHeight };
  border-radius: ${({ theme, $circle }) => ($circle === true ? theme.radii.circle : theme.radii.md)};
  animation: ${loadingFlash} 1.2s infinite linear;
`