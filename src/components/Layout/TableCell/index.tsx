import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface TableCellProps extends Omit<BoxProps, 'ref'> {}

/**
 * Provides a cell for a TableRow.
 */
const TableCell = (
  props: BoxProps & React.HTMLAttributes<HTMLTableCellElement>,
  ref: React.RefObject<HTMLTableCellElement>
) => <Box as="td" {...{ ref, ...props }} />

export default forwardRef(TableCell)
