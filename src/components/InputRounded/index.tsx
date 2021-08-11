import React from 'react'
import { InputRoundedBase } from './Styled'
import { InputProps } from 'theme-ui'

export interface InputRoundedProps extends InputProps {}

/**
 * Provides a rounded input.
 */
export default function InputRounded({ ...props }: InputRoundedProps) {
  return <InputRoundedBase {...props} />
}
