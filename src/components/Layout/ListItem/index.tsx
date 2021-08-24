import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

/**
 * Provides a row for a ListHead or ListBody.
 */
const ListItem = (
  props: BoxProps,
  ref: React.RefObject<HTMLTableRowElement>
) => <Box as="tr" {...{ ref, ...props }} />

export default forwardRef(ListItem)
