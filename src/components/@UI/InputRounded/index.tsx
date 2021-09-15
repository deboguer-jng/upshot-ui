import React, { forwardRef } from 'react'
import { InputProps } from 'theme-ui'
import { WrappedInput } from './Styled'

export interface InputRoundedProps extends InputProps {
  /**
   * Render using the darker grey variant.
   */
  dark?: boolean
}

/**
 * Provides a rounded input.
 */
export const InputRounded = forwardRef(
  (
    { dark = false, ...props }: InputRoundedProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const variant = `forms.inputs.rounded${dark ? 'Dark' : ''}`

    return <WrappedInput {...{ variant, ref, ...props }} />
  }
)

export default InputRounded
