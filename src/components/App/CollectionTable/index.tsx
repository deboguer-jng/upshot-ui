import React, { forwardRef } from 'react'
import { CollectionTableBase } from './Styled'
import { TableProps } from '../../Layout/Table'

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
    {children}
  </CollectionTableBase>
)

export default forwardRef(CollectionTable)
