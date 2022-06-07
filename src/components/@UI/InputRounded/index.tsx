import React, { forwardRef } from 'react'
import { InputProps, Text, Flex } from 'theme-ui'
import { getSize } from '../../../themes/UpshotUI/sizes'
import { SuffixText, PrefixText, WrappedInput, WrappedInputContainer } from './Styled'

export interface InputRoundedProps extends InputProps {
  /**
   * Render using the darker grey variant.
   */
  dark?: boolean
  /**
   * optional text to display at the right end of the field
   */
  suffix?: string
  /**
   * optional text to display at the left end of the field
   */
  prefix?: string
}

/**
 * Provides a rounded input.
 */
export const InputRounded = forwardRef(
  (
    { dark = false, suffix, prefix, disabled = false, ...props }: InputRoundedProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const variant = `forms.inputs.rounded${dark ? 'Dark' : ''}`

    return (
      <WrappedInputContainer $dark={dark}>
        {prefix?.length &&
          <PrefixText $disabled={disabled}>{prefix}</PrefixText>  
        }
        <WrappedInput {...{ variant, $suffix: suffix, ref, disabled, ...props }} />
        {suffix?.length && 
          <SuffixText $disabled={disabled}>{suffix}</SuffixText>
        }
      </WrappedInputContainer>
    )
  }
)

export default InputRounded
