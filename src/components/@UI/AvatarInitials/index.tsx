import React, { forwardRef } from 'react'
import { AvatarInitialsBase, AvatarInitialsShadow } from './Styled'
import { BoxProps, Text } from 'theme-ui'
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
const AvatarInitials = forwardRef(
  (
    { size = 'md', children, ...props }: AvatarInitialsProp,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <AvatarInitialsBase $size={size} {...{ ref, ...props }}>
      <AvatarInitialsShadow $size={size}>
        <Text variant={`images.avatar.${size}`} {...props}>
          {children}
        </Text>
      </AvatarInitialsShadow>
    </AvatarInitialsBase>
  )
)

export default AvatarInitials
