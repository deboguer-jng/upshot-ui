import React, { forwardRef } from 'react'
import {
  Radio as ThemeUIRadio,
  RadioProps as ThemeUIRadioProps,
} from 'theme-ui'

export interface RadioProps extends ThemeUIRadioProps {
  /**
   * Use the radio.error variant styling.
   */
  error?: boolean
}

/**
 * Provides a radio
 */
const Radio = forwardRef(
  (
    { error = false, ...props }: RadioProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => (
    <ThemeUIRadio
      variant={`radio.${error ? 'error' : 'primary'}`}
      {...{ ref, ...props }}
    />
  )
)

export default Radio
