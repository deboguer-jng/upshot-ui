import React, { forwardRef } from 'react'
import { Box, BoxProps } from 'theme-ui'

export interface ListProps extends BoxProps {}

/**
 * Provides a full-width table for rendering ListItems.
 */
const List = (
  { sx, ...props }: ListProps,
  ref: React.RefObject<HTMLTableElement>
) => (
  <Box
    as="table"
    sx={{ ...(sx ?? {}), ...{ width: '100%' } }}
    {...{ ref, ...props }}
  />
)

export default forwardRef(List)
