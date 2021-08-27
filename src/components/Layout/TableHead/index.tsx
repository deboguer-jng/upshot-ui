import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface TableHeadProps extends Omit<BoxProps, 'ref'> {}

/**
 * Provides a heading for a Table.
 */
const TableHead = (
  props: BoxProps & React.HTMLAttributes<HTMLTableSectionElement>,
  ref: React.RefObject<HTMLTableSectionElement>
) => <Box as="thead" {...{ ref, ...props }} />

export default forwardRef(TableHead)
