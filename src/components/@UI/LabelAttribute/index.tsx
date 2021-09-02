import React, { forwardRef } from 'react'
import {
  LabelAttributeBase,
  LabelText,
  RightAlignBlock,
  Division,
  CloseButton,
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
    return (
      <LabelAttributeBase $transparent={transparent} {...{ ref, props }}>
        <LabelText>{children}</LabelText>
        {variant === 'percentage' && (
          <RightAlignBlock>
            <Division>|</Division>
            <Text variant="body">{percentage}%</Text>
          </RightAlignBlock>
        )}
        {variant === 'removeable' && (
          <CloseButton
            onClick={onRemove}
            type="plain"
            icon={<Icon icon="x" size="12" />}
          />
        )}
      </LabelAttributeBase>
    )
  }
)

export default LabelAttribute
