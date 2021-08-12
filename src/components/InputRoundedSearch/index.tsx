import React from 'react'
import { Flex } from 'theme-ui'
import { InputRoundedProps } from '../InputRounded'
import IconButton from '../IconButton'
import { InputRoundedSearchBase } from './Styled'
import Icon from '../Icon'
import buttons from '../../themes/UpshotUI/buttons'

export interface InputRoundedSearchProps extends InputRoundedProps {}

/**
 * Provides a rounded input.
 */
export default function InputRoundedSearch({
  ...props
}: InputRoundedSearchProps) {
  return (
    <Flex>
      <InputRoundedSearchBase dark sx={{ background: 'green' }} {...props} />

      <IconButton
        color="primary"
        variant="buttons.icon.input"
        sx={{ marginLeft: '-' + buttons.icon.input.size }}
      >
        <Icon icon="searchCircle" />
      </IconButton>
    </Flex>
  )
}
