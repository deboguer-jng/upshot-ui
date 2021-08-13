import React from 'react'
import { Flex } from 'theme-ui'
import { InputRoundedProps } from '../InputRounded'
import IconButton from '../IconButton'
import { InputRoundedSearchBase } from './Styled'
import Icon from '../Icon'
import { useTheme } from '../../themes/UpshotUI'

export interface InputRoundedSearchProps extends InputRoundedProps {}

/**
 * Provides a rounded input.
 */
export default function InputRoundedSearch({
  ...props
}: InputRoundedSearchProps) {
  const { theme } = useTheme()

  const size = theme.forms.inputs.rounded.height
  const padding = theme.sizes[1] + 'px'

  return (
    <Flex>
      <InputRoundedSearchBase dark {...props} />

      <IconButton
        color="primary"
        sx={{ marginLeft: '-' + size, height: size, width: size, padding }}
      >
        <Icon icon="searchCircle" />
      </IconButton>
    </Flex>
  )
}
