import React, { forwardRef } from 'react'
import { CollectionTableBase } from './Styled'
import { TableProps } from '../../Layout/Table'
import TableBody from '../../Layout/TableBody'

export interface CollectionTableProps extends TableProps {}

/**
 * Provides a table for a collection.
 */
const CollectionTable = (
  { children, ...props }: CollectionTableProps,
  ref: React.RefObject<HTMLTableElement>
) => (
  <CollectionTableBase
    sx={{ borderSpacing: '0 8px' }}
    {...{ ref, children, ...props }}
  >
    <TableBody>{children}</TableBody>
  </CollectionTableBase>
)

export default forwardRef(CollectionTable)
