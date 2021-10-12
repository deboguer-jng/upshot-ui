import styled from '@emotion/styled'
import TableRow from '../../Layout/TableRow'

export const CollectorRowBase = styled(TableRow)`
  padding: ${({ theme }) => theme.space[2] + 'px'};
  background: ${({ theme }) => theme.colors['grey-900']};
`
