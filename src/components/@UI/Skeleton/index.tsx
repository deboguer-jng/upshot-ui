import React, { forwardRef } from 'react'
import { StyledSkeleton } from './Styled'
import { BoxProps } from 'theme-ui'

export interface SkeletonProps extends BoxProps {
  /** Is the skeleton circle? (Default: false) */
  circle?: boolean
}

/** Provides a loading Skeleton */
const Skeleton = forwardRef(
  (
    { circle = false, ...props }: SkeletonProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return <StyledSkeleton $circle={circle} {...{ ref, ...props }} />
  }
)

export default Skeleton
