import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import { AvatarSize } from '../Avatar'

export const AvatarInitialsBase = styled(Box)<{ $size: AvatarSize }>`
  display: inline-flex;
  border: none;
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.gradients.primary};
  padding: ${({ theme, $size }) => theme.images.avatar[$size].borderWidth};
`

export const AvatarInitialsShadow = styled.div<{ $size: AvatarSize }>`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.circle};
  box-shadow: ${({ theme }) => theme.shadows.default};
`
