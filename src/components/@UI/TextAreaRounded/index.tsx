import React, { ChangeEvent, forwardRef, useState, useEffect } from 'react'
import { Flex, Text, TextareaProps } from 'theme-ui'
import { WrappedTextarea, TextareaOverlay, TextareaContainer } from './Styled'

export interface TextareaRoundedProps extends TextareaProps {
  /**
   * Render using the darker grey variant.
   */
  dark?: boolean
  /**
   * show overlay text "optional"
   */
  optional?: boolean
  /**
   * show overlay character count
   */
  showCount?: boolean
}

/**
 * Provides a rounded input.
 */
export const TextareaRounded = forwardRef(
  (
    {
      dark = false,
      rows = 3,
      maxLength = 100,
      optional = false,
      showCount = false,
      ...props
    }: TextareaRoundedProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const variant = `forms.textarea.rounded${dark ? 'Dark' : ''}`
    const [curLength, setCurLength] = useState(0)

    useEffect(() => {
      if(props.value) setCurLength(props.value.toString().length)
    }, [props])

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setCurLength(e.currentTarget.value.length)
      props.onChange?.(e)
    }

    return (
      <TextareaContainer {...{ variant }} sx={props.sx}>
        <WrappedTextarea
          {...{ variant, ref, ...props }}
          rows={rows}
          maxLength={maxLength}
          onChange={onChange}
        />
        {(optional || showCount) && (
          <TextareaOverlay>
            {optional && <Text>Optional</Text>}
            {showCount && (
              <Text>
                {curLength}/{maxLength}
              </Text>
            )}
          </TextareaOverlay>
        )}
      </TextareaContainer>
    )
  }
)

export default TextareaRounded
