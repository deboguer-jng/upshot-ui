/** @jsxImportSource theme-ui */

import React from 'react'
import { Paragraph, Label } from 'theme-ui'
import radios from '../../themes/UpshotUI/radios'
import { StyledRadio } from './Styled'
  
export interface RadioProps {
  /**
   * Defines the type of the checkbox. (Default: 'default')
   */
  type?: keyof typeof radios
  /**
   * Display text
   */
  text?: string
  /**
   * Is textbox checked?
   */
  checked?: boolean
}

/**
 * Checkbox component with label
 */

export default function Checkbox({
  type = 'default',
  text = '',
  checked = false,
  ...props
}: RadioProps & React.HTMLAttributes<HTMLDivElement>) {
  const isDisabled = (type == 'disabled')
  return (
    <Label {...props}>
      <StyledRadio $type={type} defaultChecked={checked} disabled={isDisabled} {...props} />
      <Paragraph sx={{color: radios[type].color, lineHeight: '1.5rem'}}>{text}</Paragraph>
    </Label>
  )
}