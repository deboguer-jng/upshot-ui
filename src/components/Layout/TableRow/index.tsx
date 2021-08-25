import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface TableRowProps extends Omit<BoxProps, 'ref'> {}

/**
 * Provides a row for a TableHead or TableBody.
 */
const TableRow = (
  props: BoxProps & React.HTMLAttributes<HTMLTableRowElement>,
  ref: React.RefObject<HTMLTableRowElement>
) => <Box as="tr" {...{ ref, ...props }} />

export default forwardRef(TableRow)
