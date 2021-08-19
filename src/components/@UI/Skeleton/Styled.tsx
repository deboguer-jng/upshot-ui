import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Box } from 'theme-ui'

const loadingFlash = keyframes`
  0% { background-position: -250px; }
  100% { background-position: calc(100% + 250px); }
`

interface StyledSkeletonProps {
  $circle: boolean
}

const minWidth = '12px'
const minHeight = '12px'

export const StyledSkeleton = styled(Box)<StyledSkeletonProps>`
  background: ${({ theme }) => theme.colors['grey-700'] };
  min-width: ${ minWidth };
  min-height: ${ minHeight };
  border-radius: ${({ theme, $circle }) => ($circle === true ? theme.radii.circle : theme.radii.md)};
  &::before {
    min-width: ${ minWidth };
    min-height: ${ minHeight };
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme, $circle }) => ($circle === true ? theme.radii.circle : theme.radii.md)};
    background: ${({ theme }) => `
      linear-gradient(
        90deg,
        ${theme.colors['grey-700']} 0px,
        ${theme.colors['grey-600']} 30%,
        ${theme.colors['grey-600']} 70%,
        ${theme.colors['grey-700']} 100%
      )
    `};
    background-size: 35%;
    background-position: 0%;
    background-repeat: no-repeat;
    animation: ${loadingFlash} 1.2s infinite linear;
  }
`