import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface TableCellProps extends Omit<BoxProps, 'ref'> {}

/**
 * Provides a cell for a TableRow.
 */
const TableCell = forwardRef(
  (
    props: BoxProps &
      React.HTMLAttributes<HTMLTableCellElement> & { colSpan?: number },
    ref: React.ForwardedRef<HTMLTableCellElement>
  ) => <Box as="td" {...{ ref, ...props }} />
)

export default TableCell
