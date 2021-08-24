import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

/**
 * Provides a cell for a TableItem.
 */
const TableCell = (
  props: BoxProps,
  ref: React.RefObject<HTMLTableCellElement>
) => <Box as="td" {...{ ref, ...props }} />

export default forwardRef(TableCell)
