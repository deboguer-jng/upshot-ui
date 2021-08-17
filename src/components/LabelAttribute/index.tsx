import React from 'react'
import {
  AttributeLabelBase,
  LabelText,
  RightAlignBlock,
  Division
} from './Styled'

export interface AttributeLabelProps {
  /**
   * The text to be displayed on the label.
   */
  text?: string
  /**
   * The percentage to display (when relevant).
   */
  percentage?: string
  /** 
   * The type of attribute label to display.
   * Defaults to regular.
   */
  variant?: 'regular' | 'percentage' | 'removeable'
  /**
   * Defines whether the label's background should be transparent.
   * Defaults to true.
   */
  transparent?: boolean
  /** 
   * The removal callback for the removable variant.
   */
  onRemove?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function AttributeLabel({
  text,
  variant = 'regular',
  transparent = true,
  percentage
}: AttributeLabelProps) {
  return (
    <AttributeLabelBase $transparent={transparent}>
      <LabelText>
        {text}
      </LabelText>
      {
        variant === 'percentage' &&
          <RightAlignBlock>
            <Division>|</Division>
            <LabelText>{percentage}%</LabelText>
          </RightAlignBlock>
      }
    </AttributeLabelBase>)
}
