import styled from '@emotion/styled'
import Flex from '../../Layout/Flex'
import Grid from '../../Layout/Grid'
import Spinner from '../Spinner'

export const CenteredSpinner = styled(Spinner)`
  margin: auto;
`
export const BigEmptyFlex = styled(Flex)`
  overflow: auto;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors['grey-900']};
`

export const BlurryFlex = styled(Flex)`
  overflow: auto;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors['grey-700']};
  background-image: radial-gradient(circle at 50% 45%, #000 10%, #0000 50%),radial-gradient(50% 100% ellipse at 50% 90%, #000 20%, #0000 60%);
  box-shadow: 8px 0px;
`

export const CollectionGrid = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.red};
`

