import React from 'react'
import {
  CollectionFlex,
  RightGrid,
  CircleSkeleton,
  BigSkeleton,
  SmallSkeleton,
} from './Styled'
import Grid from '../../Layout/Grid'
import { FlexProps } from 'theme-ui'

/** Provides a loading Skeleton */
export default function CollectionButtonTemplate({ ...props }: FlexProps) {
  return (
    <CollectionFlex {...props}>
      <Grid>
        <CircleSkeleton circle={true} />
      </Grid>
      <RightGrid>
        <BigSkeleton />
        <SmallSkeleton />
      </RightGrid>
    </CollectionFlex>
  )
}
