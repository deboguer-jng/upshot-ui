import React, { forwardRef } from 'react'
import { StyledWrapper } from './Styled'
import { Radio as ThemeRadio, RadioProps as ThemeRadioProps } from 'theme-ui'

export interface RadioProps extends ThemeRadioProps {
  /**
   * Use the radio.error variant styling.
   */
  error?: boolean
  /**
   * Hide radio circle
   */
  hideRadio?: boolean
}

/**
 * Provides a radio
 */
const Radio = forwardRef(
  (
    { error = false, hideRadio = false, ...props }: RadioProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => (
    <StyledWrapper $hideRadio={hideRadio}>
      <ThemeRadio
        variant={`radio.${error ? 'error' : 'primary'}`}
        {...{ ref, ...props }}
      />
    </StyledWrapper>
  )
)

export default Radio
