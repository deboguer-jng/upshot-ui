import React, { forwardRef } from 'react'
import {
  Checkbox as ThemeUICheckbox,
  CheckboxProps as ThemeUICheckboxProps,
} from 'theme-ui'

export interface CheckboxProps extends ThemeUICheckboxProps {
  /**
   * Use the checkbox.error variant styling.
   */
  error?: boolean
}

/**
 * Provides a checkbox
 */
const Checkbox = forwardRef(
  (
    { error = false, ...props }: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => (
    <ThemeUICheckbox
      variant={`checkbox.${error ? 'error' : 'primary'}`}
      {...{ ref, ...props }}
    />
  )
)

export default Checkbox
