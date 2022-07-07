import styled from '@emotion/styled'
import { Avatar } from 'theme-ui'
import { transientOptions } from '../../../themes'

interface ThemeUIAvatarWrapperProps {
  $pixelated?: boolean
}

export const ThemeUIAvatarWrapper = styled(
  Avatar,
  transientOptions
)<ThemeUIAvatarWrapperProps>`
  object-fit: cover;
  image-rendering: ${({ $pixelated }) => ($pixelated ? 'pixelated' : '')};
`
