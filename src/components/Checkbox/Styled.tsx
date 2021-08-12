import React from 'react'
import {
  Checkbox as ThemeUICheckbox,
  CheckboxProps as ThemeUICheckboxProps,
} from 'theme-ui'

interface CheckboxProps extends ThemeUICheckboxProps {
  /**
   * Use the checkbox.error variant styling.
   */
  error?: boolean
}

/**
 * Provides a checkbox
 */
export default function Checkbox({ error, ...props }: CheckboxProps) {
  return (
    <ThemeUICheckbox
      variant={`checkbox.${error ? 'error' : 'primary'}`}
      {...props}
    />
  )
}