import React, { forwardRef } from 'react'
import ReactPagination, { ReactPaginateProps } from 'react-paginate'
import { PaginationBase } from './Styled'
import Icon from '../Icon'

/**
 * Provides a row of pagination buttons & labels.
 */
const Pagination = (
  { ...props }: ReactPaginateProps,
  ref: React.RefObject<HTMLDivElement>
) => (
  <PaginationBase {...{ ref }}>
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

export default forwardRef(Pagination)
