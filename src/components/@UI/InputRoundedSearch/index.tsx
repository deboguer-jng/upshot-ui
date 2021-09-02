import React, { forwardRef } from 'react'
import { Flex } from 'theme-ui'
import { InputRoundedProps } from '../InputRounded'
import IconButton from '../IconButton'
import { IconButtonProps } from 'theme-ui'
import { InputRoundedSearchBase } from './Styled'
import Icon from '../Icon'
import { useTheme } from '../../../themes/UpshotUI'

export interface InputRoundedSearchProps
  extends Omit<InputRoundedProps, 'dark'> {
  /**
   * Display the search icon button.
   */
  hasButton?: boolean
  /**
   * Properties for the button.
   */
  buttonProps?: IconButtonProps
}

/**
 * Provides a rounded search input.
 */
const InputRoundedSearch = forwardRef(
  (
    {
      hasButton = false,
      buttonProps: buttonPropsRaw,
      ...props
    }: InputRoundedSearchProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const { theme } = useTheme()

    /* Size the button equal to the height of the field. */
    const buttonSize = theme.forms.inputs.default.height

    /* Padding used between button and container. */
    const padding = theme.sizes[1] + 'px'

    /* Apply button style & properties. */
    const { sx: buttonSx, ...buttonProps } = buttonPropsRaw ?? {}

    return (
      <Flex>
        <InputRoundedSearchBase
          placeholder="Search..."
          $hasButton={hasButton}
          {...{ ref, ...props }}
        />

        <IconButton
          color="primary"
          sx={{
            marginLeft: '-' + buttonSize /* Position inside input field. */,
            height: buttonSize,
            width: buttonSize,
            padding,
            /* Fade in / out. */
            pointerEvents: hasButton ? 'auto' : 'none',
            opacity: Number(hasButton),
            transition: 'default',
            transitionDuration: theme.durations.normal,
            ...buttonSx,
          }}
          {...buttonProps}
        >
          <Icon icon="searchCircle" aria-label="Search icon" />
        </IconButton>
      </Flex>
    )
  }
)

export default InputRoundedSearch
