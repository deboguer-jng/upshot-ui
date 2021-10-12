import styled from '@emotion/styled'
import Table from '../../Layout/Table'

export const CollectorTableBase = styled(Table)`
  width: auto;

  /* Constrain cells to 1 line of content. */
  & td {
    padding: ${({ theme }) =>
      [1, 3, 1, 1].map((n) => theme.space[n] + 'px').join(' ')};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.fontSizes[2]};
    width: auto;
  }

  /* Expand name column. */
  & thead td:nth-of-type(2),
  & tbody td:nth-of-type(2) {
    width: 100%;
    max-width: 0; /* Used for text-overflow: ellipsis. */
  }

  /* Round table corners across the child cells. */
  & td:first-of-type {
    border-top-left-radius: 20px;
  }
  & td:last-of-type {
    border-top-right-radius: 20px;
  }
  & td:first-of-type {
    border-bottom-left-radius: 20px;
  }
  & td:last-of-type {
    border-bottom-right-radius: 20px;
  }
`
