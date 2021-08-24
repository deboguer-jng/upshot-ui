import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

/**
 * Provides a heading for a Table.
 */
const TableHead = (
  props: BoxProps,
  ref: React.RefObject<HTMLTableSectionElement>
) => <Box as="thead" {...{ ref, ...props }} />

export default forwardRef(TableHead)
