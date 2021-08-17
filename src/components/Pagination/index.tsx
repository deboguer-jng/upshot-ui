import React from 'react'
import ReactPagination, { ReactPaginateProps } from 'react-paginate'
import { PaginationBase } from './Styled'
import Icon from '../Icon'

/**
 * Provides a row of pagination buttons & labels.
 */
export default function Pagination({ ...props }: ReactPaginateProps) {
  return (
    <PaginationBase>
      <ReactPagination
        previousLabel={
          <>
            <Icon icon="arrowSmallLeft" />
            Prev
          </>
        }
        nextLabel={
          <>
            Next
            <Icon icon="arrowSmallRight" />
          </>
        }
        {...props}
      />
    </PaginationBase>
  )
}
