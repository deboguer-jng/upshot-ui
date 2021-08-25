import styled from '@emotion/styled'
import Grid from '../../Layout/Grid'
import Spinner from '../../@UI/Spinner'
import Skeleton from '../../@UI/Skeleton'
import Box from '../../Layout/Grid'

export const StyledBox = styled(Box)`
  justify-items: center;
`

export const StyledSkeleton = styled(Skeleton)`
  height: 18px;
  width: 45%;
`

export const CollectionLine = styled(Grid)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 6px 18px;
`

