import React from 'react'
import { AttributeLabelBase } from './Styled'

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
   * The removal callback for the removable variant.
   */
  onRemove?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function AttributeLabel({
  text,
  variant = 'regular'
}: AttributeLabelProps) {
  return (<AttributeLabelBase>{text}</AttributeLabelBase>)
}