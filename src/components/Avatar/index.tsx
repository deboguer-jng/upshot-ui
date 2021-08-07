import React from 'react'
import { AvatarBase, AvatarOutline } from './Styled'
import { Avatar as ThemeUIAvatar } from 'theme-ui'
import avatars from '../../themes/UpshotUI/avatars'
import colors from '../../themes/UpshotUI/colors'
import AvatarInitials from './AvatarInitials'

export interface AvatarProps {
  /**
   * Defines the size for the circle's radius. (Default: md)
   */
  size?: keyof typeof avatars['sizes']
  /**
   * If initials are provided, a background gradient is used
   * with centered text.
   */
  initials?: string
  /**
   * Is a src prop is defined, the image is rendered inside the Avatar.
   */
  src?: string
  /**
   * Border color for the avatar. (Default: black)
   */
  borderColor?: keyof typeof colors
}

/**
 * Provides a surface for UI elements.
 */
export default function Avatar({
  initials,
  borderColor = 'black',
  size = 'md',
  src,
  ...props
}: AvatarProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AvatarBase {...{ size, initials, ...props }}>
      {/* Image variant: Render with ThemeUI */}
      {!!src && <ThemeUIAvatar size={avatars.sizes[size]} {...{ src }} />}

      {/* Initials variant: Render if the size is defined. */}
      {!!initials && size in avatars.initialSizes && (
        <AvatarInitials size={size as keyof typeof avatars.initialSizes}>
          {initials}
        </AvatarInitials>
      )}

      {/* Image variant: Render border overlay. */}
      {!!src && <AvatarOutline {...{ size, borderColor }} />}
    </AvatarBase>
  )
}
