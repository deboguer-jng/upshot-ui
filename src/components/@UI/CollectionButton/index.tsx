import React, { ReactNode, forwardRef } from 'react'
import ErrorSvg from '../../../assets/svg/icons/Error.svg'
import colors from '../../../themes/UpshotUI/colors'
import Icon from '../Icon'
import {
  CollectionButtonWrapper,
  CollectionButtonTextWrapper,
  CollectionButtonText,
  CollectionButtonSubText,
  CollectionButtonIcon,
  CollectionButtonIconBadge,
  CollectionButtonIconWrapper,
} from './Styled'

export interface CollectionButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  subText: string
  icon: ReactNode
  showBadge?: boolean
  underglow?: keyof typeof colors
  hoverUnderglow?: keyof typeof colors
  error?: boolean
}

const CollectionButton = forwardRef(
  (
    {
      text,
      subText,
      icon,
      showBadge,
      underglow,
      hoverUnderglow,
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
      <CollectionButtonWrapper
        $hoverUnderglow={hoverUnderglow}
        $underglow={underglow}
        {...{ ref, ...props }}
      >
        <CollectionButtonIconWrapper>
          <CollectionButtonIcon>{icon}</CollectionButtonIcon>
          {showBadge && (
            <CollectionButtonIconBadge>
              <Icon icon="upshot" />
            </CollectionButtonIconBadge>
          )}
        </CollectionButtonIconWrapper>
        <CollectionButtonTextWrapper>
          <CollectionButtonText>{text}</CollectionButtonText>
          <CollectionButtonSubText>{subText}</CollectionButtonSubText>
        </CollectionButtonTextWrapper>
      </CollectionButtonWrapper>
    )
  }
)

export default CollectionButton
