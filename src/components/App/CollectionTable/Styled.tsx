import styled from '@emotion/styled'
import Table from '../../Layout/Table'

export const CollectionTableBase = styled(Table)`
  /* Constrain cells to 1 line of content. */
  & td {
    padding: ${({ theme }) =>
      [1, 3, 1, 1].map((n) => theme.space[n] + 'px').join(' ')};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSizes[2]};
  }

  /* Expand first text-container column fill remaining space. */
  & thead td:nth-of-type(1), /* First colSpan is 2 */
  & tbody td:nth-of-type(2) {
    // width: 100%;
  }

  /* Round table corners across the child cells. */
  & td:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.radii.sm};
  }
  & td:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.radii.sm};
  }
  & td:first-of-type {
    border-bottom-left-radius: ${({ theme }) => theme.radii.sm};
  }
  & td:last-of-type {
    border-bottom-right-radius: ${({ theme }) => theme.radii.sm};
  }
`
