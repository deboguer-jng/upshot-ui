import React, { forwardRef } from 'react'
import { CollectorTableBase } from './Styled'
import { TableProps } from '../../Layout/Table'

export interface CollectorTableProps extends TableProps {}

/**
 * Provides a table for a collection.
 */
const CollectorTable = forwardRef(
  (
    { children, ...props }: CollectorTableProps,
    ref: React.ForwardedRef<HTMLTableElement>
  ) => (
    <CollectorTableBase
      sx={{ borderSpacing: '0 8px', tableLayout: 'fixed' }}
      {...{ ref, children, ...props }}
    >
      {children}
    </CollectorTableBase>
  )
)

export default CollectorTable
