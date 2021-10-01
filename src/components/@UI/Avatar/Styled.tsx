import styled from '@emotion/styled'
import { Avatar } from 'theme-ui'

interface ThemeUIAvatarWrapperProps {
  pixelated?: boolean
}

export const ThemeUIAvatarWrapper = styled(Avatar)<ThemeUIAvatarWrapperProps>`
  object-fit: cover;
  image-rendering: ${({ pixelated }) => (pixelated ? 'pixelated' : '')};
`
