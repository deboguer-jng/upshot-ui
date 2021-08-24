import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

/**
 * Provides a cell for a ListItem.
 */
const ListCell = (
  props: BoxProps,
  ref: React.RefObject<HTMLTableCellElement>
) => <Box as="td" {...{ ref, ...props }} />

export default forwardRef(ListCell)
