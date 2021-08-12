import React from 'react'
import { InputRoundedBase } from './Styled'
import { InputProps } from 'theme-ui'

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
  const variant = `forms.input.${dark ? 'roundedDark' : 'rounded'}`

  return <InputRoundedBase {...{ variant, ...props }} />
}
