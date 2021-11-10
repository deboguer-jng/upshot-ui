import React, { forwardRef } from 'react'
import ReactPagination, { ReactPaginateProps } from 'react-paginate'
import { PaginationBase } from './Styled'
import Icon from '../Icon'

/**
 * Provides a row of pagination buttons & labels.
 */
const Pagination = forwardRef(
  (
    { ...props }: ReactPaginateProps,
    ref: React.ForwardedRef<HTMLDivElement>
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
        showFirstLabel
        showLastLabel
        firstLabel={
          <>
            First
            <Icon icon="arrowDoubleLeft" />
          </>
        }
        lastLabel={
          <>
            Last
            <Icon icon="arrowDoubleRight" />
          </>
        }
        {...props}
      />
    </PaginationBase>
  )
)

export default Pagination
