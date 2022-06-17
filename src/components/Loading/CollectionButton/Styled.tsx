import styled from '@emotion/styled'
import Flex from '../../Layout/Flex'
import Grid from '../../Layout/Grid'
import Spinner from '../../@UI/Spinner'
import Skeleton from '../../@UI/Skeleton'
import { transientOptions } from '../../../themes'

export const CenteredSpinner = styled(Spinner, transientOptions)`
  margin: auto;
`

export const CollectionFlex = styled(Flex, transientOptions)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: 4px;
  width: 100%;
`

export const RightGrid = styled(Grid, transientOptions)`
  grid-gap: 6px;
  width: 100%;
  margin-right: 16px;
`

export const CircleSkeleton = styled(Skeleton, transientOptions)`
  height: 38px;
  width: 38px;
  margin-right: 16px;
`

export const BigSkeleton = styled(Skeleton, transientOptions)`
  height: 18px;
  width: 100%;
`

export const SmallSkeleton = styled(Skeleton, transientOptions)`
  height: 10px;
  width: 50%;
`
