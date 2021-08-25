import React, { forwardRef } from 'react'
import { AvatarInitialsBase, AvatarInitialsShadow } from './Styled'
import { Text, BoxProps } from 'theme-ui'
import { AvatarSize } from '../Avatar'

export interface AvatarInitialsProp extends BoxProps {
  /**
   * Defines the size for the circle's radius.
   */
  size?: AvatarSize
}

/**
 * Provides a circular avatar gradient with user initials.
 */
const AvatarInitials = (
  { size = 'md', children, ...props }: AvatarInitialsProp,
  ref: React.RefObject<HTMLDivElement>
) => (
  <AvatarInitialsBase
    $size={size}
    variant={`images.avatar.${size}`}
    {...{ ref, ...props }}
  >
    <AvatarInitialsShadow $size={size}>{children}</AvatarInitialsShadow>
  </AvatarInitialsBase>
)

export default forwardRef(AvatarInitials)
