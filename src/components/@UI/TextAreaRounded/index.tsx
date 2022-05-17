import React, { ChangeEvent, forwardRef, useState } from 'react'
import { Flex, Text, TextareaProps } from 'theme-ui'
import { WrappedTextarea, TextareaOverlay } from './Styled'

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
    { dark = false, rows = 3, maxLength = 100, optional = false, showCount = false, ...props }: TextareaRoundedProps,
    ref: React.ForwardedRef<HTMLTextAreaElement>
  ) => {
    const variant = `forms.textarea.rounded${dark ? 'Dark' : ''}`
    const [curLength, setCurLength] = useState(0);
    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setCurLength(e.currentTarget.value.length);
    }

    return (
      <Flex sx={{width: props.sx}}>
        <WrappedTextarea 
          {...{ variant, ref, ...props }} 
          sx={{ ...(optional || showCount) && {paddingRight: '100px'}, ...props.sx }}
          rows={rows}
          maxLength={maxLength}
          onChange={onChange}
        />
        <TextareaOverlay>
          {optional && (<Text>Optional</Text>)}
          {showCount && (<Text>{curLength}/{maxLength}</Text>)}
        </TextareaOverlay>
      </Flex>
    )
  }
)

export default TextareaRounded
