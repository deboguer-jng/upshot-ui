import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface TableProps extends BoxProps {}

/**
 * Provides a full-width table for rendering TableRows.
 */
const Table = (
  { sx, ...props }: TableProps,
  ref: React.RefObject<HTMLTableElement>
) => (
  <Box
    as="table"
    sx={{ ...(sx ?? {}), ...{ width: '100%' } }}
    {...{ ref, ...props }}
  />
)

export default forwardRef(Table)
