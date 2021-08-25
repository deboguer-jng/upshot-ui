import styled from '@emotion/styled'
import Table from '../../Layout/Table'

export const CollectionTableBase = styled(Table)`
  & td:nth-of-type(2) {
    width: 100%;
  }

  /* Round table corners across the child cells. */
  & tr:first-of-type td:first-of-type {
    border-top-left-radius: ${({ theme }) => theme.radii.sm};
  }
  & tr:first-of-type td:last-of-type {
    border-top-right-radius: ${({ theme }) => theme.radii.sm};
  }
  & tr:last-of-type td:first-of-type {
    border-bottom-left-radius: ${({ theme }) => theme.radii.sm};
  }
  & tr:last-of-type td:last-of-type {
    border-bottom-right-radius: ${({ theme }) => theme.radii.sm};
  }
`
