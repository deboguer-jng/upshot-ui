import React, { forwardRef, useState, useRef } from 'react'
import {
  LabelAttributeBase,
  LabelText,
  RightAlignBlock,
  Division,
  CloseButton,
  LabelAttributeTooltip,
} from './Styled'
import Icon from '../Icon'
import { Text } from 'theme-ui'

export interface LabelAttributeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The percentage to display (when relevant).
   */
  percentage?: string
  /**
   * The type of attribute label to display.
   */
  variant?: 'regular' | 'percentage' | 'removeable'
  /**
   * Defines whether the label's background should be transparent.
   */
  transparent?: boolean
  /**
   * The removal callback for the removable variant.
   */
  onRemove?: React.MouseEventHandler<HTMLButtonElement>
}

const LabelAttribute = forwardRef(
  (
    {
      variant = 'regular',
      transparent = true,
      percentage,
      onRemove,
      children,
      ...props
    }: LabelAttributeProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const labelRef = useRef()

    const handleMouseOver = () => {
      if (
        (labelRef.current as HTMLElement).scrollWidth >
        (labelRef.current as HTMLElement).clientWidth
      ) {
        setShowTooltip(true)
      }
    }

    const handleMouseOut = () => {
      if (showTooltip) setShowTooltip(false)
    }

    return (
      <LabelAttributeBase
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}
        $transparent={transparent}
        {...{ ref, props }}
      >
        {showTooltip && (
          <LabelAttributeTooltip>
            <Text variant="small" color="grey-500">
              {children}{' '}
            </Text>
          </LabelAttributeTooltip>
        )}
        <LabelText ref={labelRef} showTooltip={showTooltip}>
          {children}
        </LabelText>
        {variant === 'percentage' && (
          <RightAlignBlock>
            <Division>|</Division>
            <Text variant="body">{percentage}%</Text>
          </RightAlignBlock>
        )}
        {variant === 'removeable' && (
          <CloseButton
            onClick={onRemove}
            variant="plain"
            icon={<Icon icon="x" size="12" />}
          />
        )}
      </LabelAttributeBase>
    )
  }
)

export default LabelAttribute
