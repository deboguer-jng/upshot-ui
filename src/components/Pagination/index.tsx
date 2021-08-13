import React from 'react'
import ReactPagination, { ReactPaginateProps } from 'react-paginate'
import { PaginationBase } from './Styled'

/**
 * Provides a row of pagination buttons & labels.
 */
export default function Pagination({ ...props }: ReactPaginateProps) {
  return (
    <PaginationBase>
      <ReactPagination
        previousLabel="&lt; Prev"
        nextLabel="Next &gt;"
        {...props}
      />
    </PaginationBase>
  )
}
