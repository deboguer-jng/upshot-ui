import React from 'react'
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
export default function InputRounded({ dark, ...props }: InputRoundedProps) {
  const variant = `forms.inputs.rounded${dark ? 'Dark' : ''}`

  return <Input {...{ variant, ...props }} />
}
