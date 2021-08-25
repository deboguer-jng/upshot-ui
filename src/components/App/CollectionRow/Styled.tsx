import styled from '@emotion/styled'
import TableRow from '../../Layout/TableRow'

export const CollectionRowBase = styled(TableRow)`
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.space[1]}px;
`
