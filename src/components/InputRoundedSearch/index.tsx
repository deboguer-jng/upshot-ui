import React from 'react'
import { Flex } from 'theme-ui'
import { InputRoundedProps } from '../InputRounded'
import IconButton from '../IconButton'
import { InputRoundedSearchBase } from './Styled'
import Icon from '../Icon'
import { useTheme } from '../../themes/UpshotUI'

export interface InputRoundedSearchProps extends InputRoundedProps {}

/**
 * Provides a rounded search input.
 */
export default function InputRoundedSearch({
  ...props
}: InputRoundedSearchProps) {
  const { theme } = useTheme()

  /* Size the button equal to the height of the field. */
  const buttonSize = theme.forms.inputs.default.height

  /* Padding used between button and container. */
  const padding = theme.sizes[1] + 'px'

  return (
    <Flex>
      <InputRoundedSearchBase dark {...props} />

      <IconButton
        color="primary"
        sx={{
          /* Negative margin to render button inside input field. */
          marginLeft: '-' + buttonSize,
          height: buttonSize,
          width: buttonSize,
          padding,
        }}
      >
        <Icon icon="searchCircle" />
      </IconButton>
    </Flex>
  )
}
