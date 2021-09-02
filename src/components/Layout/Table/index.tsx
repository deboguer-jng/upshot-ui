import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface TableProps extends Omit<BoxProps, 'ref'> {}

/**
 * Provides a full-width table for rendering TableRows.
 */
const Table = forwardRef(
  (
    { sx, ...props }: TableProps & React.HTMLAttributes<HTMLTableElement>,
    ref: React.ForwardedRef<HTMLTableElement>
  ) => (
    <Box
      as="table"
      sx={{ ...{ width: '100%' }, ...(sx ?? {}) }}
      {...{ ref, ...props }}
    />
  )
)

export default Table
