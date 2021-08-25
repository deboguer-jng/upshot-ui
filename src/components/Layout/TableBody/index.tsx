import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface TableBodyProps extends Omit<BoxProps, 'ref'> {}

/**
 * Provides a body for a Table.
 */
const TableBody = (
  props: BoxProps & React.HTMLAttributes<HTMLTableSectionElement>,
  ref: React.RefObject<HTMLTableSectionElement>
) => <Box as="tbody" {...{ ref, ...props }} />

export default forwardRef(TableBody)
