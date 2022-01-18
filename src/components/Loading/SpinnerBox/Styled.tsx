import styled from '@emotion/styled'
import Flex from '../../Layout/Flex'
import Spinner from '../../@UI/Spinner'

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
