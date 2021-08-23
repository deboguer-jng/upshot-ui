import React, { forwardRef } from 'react'
import { Input, InputProps } from 'theme-ui'

export interface InputRoundedProps extends InputProps {
  /**
   * Render using the darker grey variant.
   */
  dark?: boolean
}

/**
 * Provides a rounded input.
 */
export const InputRounded = (
  { dark = false, ...props }: InputRoundedProps,
  ref: React.RefObject<HTMLInputElement>
) => {
  const variant = `forms.inputs.rounded${dark ? 'Dark' : ''}`

  return <Input {...{ variant, ref, ...props }} />
}

export default forwardRef(InputRounded)
