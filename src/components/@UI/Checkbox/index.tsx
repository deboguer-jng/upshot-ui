import React, { forwardRef } from 'react'
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
const Checkbox = (
  { error = false, ...props }: CheckboxProps,
  ref: React.RefObject<HTMLInputElement>
) => (
  <ThemeUICheckbox
    variant={`checkbox.${error ? 'error' : 'primary'}`}
    {...{ ref, ...props }}
  />
)

export default forwardRef(Checkbox)
