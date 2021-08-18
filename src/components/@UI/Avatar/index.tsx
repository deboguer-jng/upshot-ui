import React from 'react'
import colors from '../../../themes/UpshotUI/colors'
import {
  Avatar as ThemeUIAvatar,
  AvatarProps as ThemeUIAvatarProps,
} from 'theme-ui'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends Omit<ThemeUIAvatarProps, 'size'> {
  /**
   * Defines the size for the circle's radius. (Default: md)
   */
  size?: AvatarSize
  /**
   * Border color used by image variant avatars. (Default: transparent)
   */
  color?: keyof typeof colors
}

/**
 * Provides a circular avatar.
 */
export default function Avatar({
  color = 'transparent',
  size = 'md',
  ...props
}: AvatarProps) {
  return (
    <ThemeUIAvatar
      variant={`images.avatar.${size}`}
      sx={{ borderColor: color }}
      {...props}
    ></ThemeUIAvatar>
  )
}
