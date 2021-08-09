import styled from '@emotion/styled'
import colors from '../../themes/UpshotUI/colors'
import { Flex } from 'theme-ui'
import { calcBorderThickness, createAvatarImageBorder } from './utils'
import avatars from '../../themes/UpshotUI/avatars'

interface AvatarBaseProps {
  $size: keyof typeof avatars.sizes
}
interface AvatarBackgroundProps extends AvatarBaseProps {
  $borderColor: keyof typeof colors
  $hasImage: boolean
}

export const AvatarBase = styled.div<AvatarBaseProps>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.circle};
  width: ${({ theme, $size }) => theme.avatars.sizes[$size] + 'px'};
  height: ${({ theme, $size }) => theme.avatars.sizes[$size] + 'px'};
`

export const AvatarBackground = styled.div<AvatarBackgroundProps>`
  position: relative;
  width: 100%;
  height: 100%;

  background: ${({ theme, $hasImage }) =>
    !$hasImage && theme.gradients.primary};

  /* Add a padding to text variant Avatars
   * leaving space for AvatarInitialsBase's box-shadow.
   */
  padding: ${({ theme, $size, $hasImage }) =>
    !$hasImage &&
    calcBorderThickness(
      theme.avatars.sizes[$size],
      theme.avatars.borderThickness
    )};

  /* Creates a border overlay for image variant Avatars. */
  ${({ theme, $hasImage, $borderColor, $size }) =>
    $hasImage &&
    createAvatarImageBorder(
      theme.colors[$borderColor],
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
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.circle};
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
`
