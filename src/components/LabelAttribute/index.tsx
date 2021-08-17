import React from 'react'
import { AttributeLabelBase, LabelText } from './Styled'

export interface AttributeLabelProps {
  /**
   * The text to be displayed on the label
  */
  text?: string
  /** 
   * The type of attribute label to display.
   * Defaults to regular.
   */
  variant?: 'regular' | 'percent' | 'removeable'
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
  transparent = true
}: AttributeLabelProps) {
  return (
    <AttributeLabelBase $transparent={transparent}>
      <LabelText>
        {text}
      </LabelText>
    </AttributeLabelBase>)
}