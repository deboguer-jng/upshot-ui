import styled from '@emotion/styled'
import Grid from '../../Layout/Grid'
import Spinner from '../../@UI/Spinner'
import Skeleton from '../../@UI/Skeleton'
import Box from '../../Layout/Grid'
import { transientOptions } from '../../../themes'

export const StyledBox = styled(Box, transientOptions)`
  justify-items: center;
`

export const StyledSkeletonCircle = styled(Skeleton, transientOptions)`
  height: 50px;
  width: 50px;
`

export const StyledSkeletonBig = styled(Skeleton, transientOptions)`
  height: 18px;
  width: 90%;
`

export const StyledSkeletonSmall = styled(Skeleton, transientOptions)`
  height: 18px;
  width: 45%;
`

export const CollectionLine = styled(Grid, transientOptions)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 6px 18px;
`
