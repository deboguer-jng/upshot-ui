import React from 'react'
import {
  Radio as ThemeUIRadio,
  RadioProps as ThemeUIRadioProps,
} from 'theme-ui'

interface RadioProps extends ThemeUIRadioProps {
  /**
   * Use the radio.error variant styling.
   */
  error?: boolean
}

/**
 * Provides a radio
 */
export default function Radio({ error, ...props }: RadioProps) {
  return (
    <ThemeUIRadio
      variant={`radio.${error ? 'error' : 'primary'}`}
      {...props}
    />
  )
}