import React, { forwardRef } from 'react'
import colors from '../../../themes/UpshotUI/colors'
import {
  Avatar as ThemeUIAvatar,
  AvatarProps as ThemeUIAvatarProps,
} from 'theme-ui'
import { useTheme } from '../../../themes/UpshotUI'
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface AvatarProps extends Omit<ThemeUIAvatarProps, 'size'> {
  /**
   * Defines the size for the circle's radius.
   */
  size?: AvatarSize
  /**
   * Border color used by image variant avatars.
   */
  color?: keyof typeof colors
}

/**
 * Provides a circular avatar.
 */
const Avatar = (
  {
    color: borderColor = 'transparent',
    size = 'md',
    sx,
    ...props
  }: AvatarProps,
  ref: React.RefObject<HTMLImageElement>
) => {
  const { theme } = useTheme()

  return (
    <ThemeUIAvatar
      variant={`images.avatar.${size}`}
      size={theme.images.avatar[size].size}
      sx={{
        ...{
          borderColor,
          /* Retain fixed size. */
          minWidth: theme.images.avatar[size].size,
          flexShrink: 0,
        },
        ...(sx ?? {}),
      }}
      {...{ ref, ...props }}
    />
  )
}

export default forwardRef(Avatar)
