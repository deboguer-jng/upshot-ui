import styled from '@emotion/styled'
import Grid from '../../Layout/Grid'
import Spinner from '../../@UI/Spinner'

export const CenteredSpinner = styled(Spinner)`
  margin: auto;
`

export const CollectionGrid = styled(Grid)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.circle};
  padding: 4px;
`

