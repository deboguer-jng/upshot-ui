/** @jsxImportSource theme-ui */

import React from 'react'
import { Paragraph, Label } from 'theme-ui'
import checkboxes from '../../themes/UpshotUI/checkboxes'
import { StyledCheckbox } from './Styled'
  
export interface CheckboxProps {
  /**
   * Defines the type of the checkbox. (Default: 'default')
   */
  type?: keyof typeof checkboxes
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
}: CheckboxProps & React.HTMLAttributes<HTMLDivElement>) {
  const isDisabled = (type == 'disabled')
  return (
    <Label {...props}>
      <StyledCheckbox $type={type} defaultChecked={checked} disabled={isDisabled} {...props} />
      <Paragraph sx={{color: isDisabled ? 'grey-600' : 'text'}}>{text}</Paragraph>
    </Label>
  )
}