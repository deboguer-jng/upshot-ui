import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

/**
 * Provides a body for a Table.
 */
const TableBody = (
  props: BoxProps,
  ref: React.RefObject<HTMLTableSectionElement>
) => <Box as="tbody" {...{ ref, ...props }} />

export default forwardRef(TableBody)
