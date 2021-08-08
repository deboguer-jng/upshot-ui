import React from 'react'
import { Text, TextProps } from 'theme-ui'
import { AvatarInitialsBase } from './Styled'
import avatars from '../../themes/UpshotUI/avatars'

type AvatarInitialsSize = keyof typeof avatars.initialsSizes

export interface AvatarInitialsProps extends TextProps {
  /**
   * Base size of the Avatar container.
   */
  size: AvatarInitialsSize
}

/**
 * Used internally in the Avatar component.
 */
export default function AvatarInitials({
  size,
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
          fontSize: avatars.initialsSizes[size],
          lineHeight: 1,
        }}
        {...props}
      >
        {children}
      </Text>
    </AvatarInitialsBase>
  )
}
