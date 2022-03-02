import React from 'react'
import {
  CollectionLine,
  StyledBox,
  StyledSkeletonCircle,
  StyledSkeletonBig,
  StyledSkeletonSmall,
} from './Styled'
import Skeleton from '../../@UI/Skeleton'
import Box from '../../Layout/Grid'
import { FlexProps } from 'theme-ui'

/** Provides a loading Skeleton */
export default function CollectionLineTemplate({ ...props }: FlexProps) {
  return (
    <CollectionLine
      gap={2}
      columns={[7, '1.2fr 3fr 3fr 3fr 3fr 3fr 0fr']}
      {...props}
    >
      <Box>
        <StyledSkeletonCircle circle={true} />
      </Box>
      <Box>
        <StyledSkeletonBig />
      </Box>
      <StyledBox>
        <StyledSkeletonSmall />
      </StyledBox>
      <StyledBox>
        <StyledSkeletonSmall />
      </StyledBox>
      <StyledBox>
        <StyledSkeletonSmall />
      </StyledBox>
      <StyledBox>
        <StyledSkeletonSmall />
      </StyledBox>
    </CollectionLine>
  )
}
