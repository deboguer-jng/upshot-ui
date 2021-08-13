import React from 'react'
import { Text, TextProps } from 'theme-ui'
import { AvatarInitialsBase } from './Styled'
import images from '../../themes/UpshotUI/images'

// type AvatarInitialsSize = keyof typeof avatars.initialsSizes

export interface AvatarInitialsProps extends TextProps {
  /**
   * Base size of the Avatar container.
   */
  size: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Used internally in the Avatar component.
 */
export default function AvatarInitials({
  // size,
  children,
  ...props
}: AvatarInitialsProps) {
  return (
    <AvatarInitialsBase>
      <Text
        variant="h0Primary"
        color="black"
        sx={{
          textTransform: 'uppercase',
          // fontSize: avatars.initialsSizes[size],
          lineHeight: 1,
        }}
        {...props}
      >
        {children}
      </Text>
    </AvatarInitialsBase>
  )
}
