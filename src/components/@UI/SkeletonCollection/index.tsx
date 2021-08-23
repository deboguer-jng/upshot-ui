import React from 'react'
import { CenteredSpinner, BigEmptyFlex, BlurryFlex } from './Styled'
import { FlexProps } from 'theme-ui'

export interface SkeletonProps extends FlexProps {
  /** Is the skeleton circle? (Default: false) */
  type?: string
}

/** Provides a loading Skeleton */
export default function SkeletonCollection({ type, ...props }: SkeletonProps) {
  if (type === 'loadingBox') {
    return (
      <BigEmptyFlex {...props} >
        <CenteredSpinner />
      </BigEmptyFlex>
    )
  } else if (type === 'blurrySquare') {
    return (
      <BlurryFlex {...props} >
        <CenteredSpinner size={'md'} />
      </BlurryFlex>
    )
  }
}
