import React from 'react'
import { AvatarInitialsBase, AvatarInitialsShadow } from './Styled'
import { BoxProps, Text } from 'theme-ui'
import { AvatarSize } from '../Avatar'

export interface AvatarInitialsProp extends BoxProps {
  /**
   * Defines the size for the circle's radius. (Default: md)
   */
  size?: AvatarSize
}

/**
 * Provides a surface for UI elements.
 */
export default function AvatarInitials({
  size = 'md',
  children,
  ...props
}: AvatarInitialsProp) {
  return (
    <AvatarInitialsBase {...props}>
      <AvatarInitialsShadow $size={size}>
        <Text variant={`images.avatar.${size}`} {...props}>
          {children}
        </Text>
      </AvatarInitialsShadow>
    </AvatarInitialsBase>
  )
}
