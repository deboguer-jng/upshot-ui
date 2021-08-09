/** @jsxImportSource theme-ui */

import React from 'react'
import { Paragraph, Label, Checkbox as ThemeCheckbox } from 'theme-ui'
import checkboxes from '../../themes/UpshotUI/checkboxes'
  
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
      <ThemeCheckbox defaultChecked={checked} sx={checkboxes[type]} disabled={isDisabled} />
      <Paragraph sx={{color: isDisabled ? 'grey-600' : 'text'}}>{text}</Paragraph>
    </Label>
  )
}