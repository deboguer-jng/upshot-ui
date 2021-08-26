import React from 'react'
import { StyledSkeleton } from './Styled'
import { BoxProps } from 'theme-ui'

export interface SkeletonProps extends BoxProps {
  /** Is the skeleton circle? (Default: false) */
  circle?: boolean
}

/** Provides a loading Skeleton */
export default function Skeleton({ circle = false, ...props }: SkeletonProps) {
  return (
    <StyledSkeleton $circle={circle} {...props} />
  )
}
