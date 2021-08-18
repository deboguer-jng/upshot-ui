import React, { ReactNode } from 'react'
import {
  CollectionButtonWrapper,
  CollectionButtonTextWrapper,
  CollectionButtonText,
  CollectionButtonSubText,
  CollectionButtonIcon,
} from './Styled'

interface CollectionButtonProps {
  text: string
  subText: string
  icon: ReactNode
  highlight?: 'blue' | 'pink' | 'red' | 'green' | 'yellow' | 'grey'
  error: boolean
  loading: boolean
}

const CollectionButton = ({
  text,
  subText,
  icon,
  highlight,
  error = false,
  loading = false,
  ...props
}: CollectionButtonProps) => {
  if (error) {
    return <CollectionButtonWrapper></CollectionButtonWrapper>
  }

  if (loading) {
    return (
      <CollectionButtonWrapper>
        <div />
        <CollectionButtonTextWrapper>
          <div />
          <div />
        </CollectionButtonTextWrapper>
      </CollectionButtonWrapper>
    )
  }

  return (
    <CollectionButtonWrapper highlight={highlight}>
      <CollectionButtonIcon>{icon}</CollectionButtonIcon>
      <CollectionButtonTextWrapper>
        <CollectionButtonText>{text}</CollectionButtonText>
        <CollectionButtonSubText>{subText}</CollectionButtonSubText>
      </CollectionButtonTextWrapper>
    </CollectionButtonWrapper>
  )
}

export default CollectionButton
