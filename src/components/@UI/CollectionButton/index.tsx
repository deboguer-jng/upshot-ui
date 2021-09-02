import React, { ReactNode, forwardRef } from 'react'
import ErrorSvg from '../../../assets/svg/icons/Error.svg'
import colors from '../../../themes/UpshotUI/colors'
import {
  CollectionButtonWrapper,
  CollectionButtonTextWrapper,
  CollectionButtonText,
  CollectionButtonSubText,
  CollectionButtonIcon,
} from './Styled'

export interface CollectionButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  subText: string
  icon: ReactNode
  underglow?: keyof typeof colors
  error?: boolean
}

const CollectionButton = forwardRef(
  (
    {
      text,
      subText,
      icon,
      underglow,
      error = false,
      ...props
    }: CollectionButtonProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    if (error) {
      return (
        <CollectionButtonWrapper {...{ ref, ...props }}>
          <CollectionButtonIcon>
            <img src={ErrorSvg} />
          </CollectionButtonIcon>
          <CollectionButtonTextWrapper>
            <CollectionButtonText>Error</CollectionButtonText>
            <CollectionButtonSubText>
              Error loading data
            </CollectionButtonSubText>
          </CollectionButtonTextWrapper>
        </CollectionButtonWrapper>
      )
    }

    return (
      <CollectionButtonWrapper $underglow={underglow} {...{ ref, ...props }}>
        <CollectionButtonIcon>{icon}</CollectionButtonIcon>
        <CollectionButtonTextWrapper>
          <CollectionButtonText>{text}</CollectionButtonText>
          <CollectionButtonSubText>{subText}</CollectionButtonSubText>
        </CollectionButtonTextWrapper>
      </CollectionButtonWrapper>
    )
  }
)

export default CollectionButton
