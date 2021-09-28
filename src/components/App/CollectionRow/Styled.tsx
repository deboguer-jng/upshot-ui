import styled from '@emotion/styled'
import TableRow from '../../Layout/TableRow'

export const CollectionRowBase = styled(TableRow)<{ $dark: boolean }>`
  background-color: ${({ theme, $dark }) =>
    theme.colors[$dark ? 'black' : 'grey-800']};
  
  & td {
    padding-right: 40px;
    padding-left: 40px;
  }
`
