import styled from '@emotion/styled'
import { Box } from 'theme-ui'
import { AvatarSize } from '../Avatar'

export const AvatarInitialsBase = styled(Box)`
  display: inline-flex;
  border-radius: ${({ theme }) => theme.radii.circle};
  background: ${({ theme }) => theme.gradients.primary};
  text-transform: uppercase;
`

export const AvatarInitialsShadow = styled.div<{ $size: AvatarSize }>`
  border-radius: ${({ theme }) => theme.radii.circle};
  margin: ${({ theme, $size }) => theme.images.avatar[$size].borderWidth};
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`
