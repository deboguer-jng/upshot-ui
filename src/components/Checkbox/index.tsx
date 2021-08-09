import React from 'react'
import { Label, Checkbox as ThemeCheckbox } from 'theme-ui'
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
}

export default function Checkbox({
  type = 'default',
  text = '',
  ...props
}: CheckboxProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Label {...props}>
      <ThemeCheckbox defaultChecked={true} sx={checkboxes[type]} />
      {text}
    </Label>
  )
}