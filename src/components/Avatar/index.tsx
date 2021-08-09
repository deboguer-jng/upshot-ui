import React from 'react'
import { AvatarBase, AvatarBackground } from './Styled'
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
   * Image urls used by image variant avatars.
   */
  src?: string
  /**
   * Border color used by image variant avatars. (Default: black)
   */
  borderColor?: keyof typeof colors
}

/**
 * Provides a circular avatar.
 */
export default function Avatar({
  initials,
  borderColor = 'black',
  size = 'md',
  src,
  ...props
}: AvatarProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AvatarBase $size={size} {...props}>
      <AvatarBackground
        $size={size}
        $borderColor={borderColor}
        $hasImage={Boolean(src)}
      >
        {src ? (
          /* Render image variant if a src is defined. */
          <ThemeUIAvatar size="100%" {...{ src }} />
        ) : (
          /* Render initials variant if no image src provided. */
          <AvatarInitials size={size as keyof typeof avatars.initialsSizes}>
            {initials}
          </AvatarInitials>
        )}
      </AvatarBackground>
    </AvatarBase>
  )
}
