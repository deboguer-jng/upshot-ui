import React, { forwardRef } from 'react'
import { CollectionTableBase } from './Styled'
import { TableProps } from '../../Layout/Table'

export interface CollectionTableProps extends TableProps {}

/**
 * Provides a table for a collection.
 */
const CollectionTable = forwardRef(
  (
    { children, sx, ...props }: CollectionTableProps,
    ref: React.ForwardedRef<HTMLTableElement>
  ) => (
    <CollectionTableBase
      sx={{
        ...{ borderSpacing: '0 8px', tableLayout: 'fixed' },
        ...(sx ?? {}),
      }}
      {...{ ref, children, ...props }}
    >
      {children}
    </CollectionTableBase>
  )
)

export default CollectionTable
