import styled from '@emotion/styled'
import { createAvatarBorder } from './utils'
import colors from '../../themes/UpshotUI/colors'
import { Flex } from 'theme-ui'

import avatars from '../../themes/UpshotUI/avatars'

interface AvatarBaseProps {
  $size: keyof typeof avatars.sizes
  $borderColor: keyof typeof colors
  $hasInitials: boolean
}

export const AvatarBase = styled.div<AvatarBaseProps>`
  position: relative;
  overflow: hidden;
  width: ${({ theme, $size }) => theme.avatars.sizes[$size]}px;
  height: ${({ theme, $size }) => theme.avatars.sizes[$size]}px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.primary};

  /* Add a border to the Avatar if no initials are provided. */
  ${({ theme, $hasInitials, $borderColor, $size }) =>
    !$hasInitials &&
    createAvatarBorder(
      theme.colors[$borderColor],
      /**
       * @notice borderThickness is relative to the avatar size.
       */
      Number(theme.avatars.sizes[$size]) *
        theme.avatars.borderThickness *
        0.01 +
        'px'
    )};
`

export const AvatarInitialsBase = styled(Flex)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 92%;
  height: 92%;
  margin: 4%;
  border-radius: 50%;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`
