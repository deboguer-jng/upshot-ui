import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

/**
 * Provides a row for a TableHead or TableBody.
 */
const TableRow = (
  props: BoxProps,
  ref: React.RefObject<HTMLTableRowElement>
) => <Box as="tr" {...{ ref, ...props }} />

export default forwardRef(TableRow)
