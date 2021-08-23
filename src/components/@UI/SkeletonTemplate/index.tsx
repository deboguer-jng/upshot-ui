import React from 'react'
import { CenteredSpinner, BigEmptyFlex, BlurryFlex, CollectionGrid } from './Styled'
import { FlexProps } from 'theme-ui'

export interface SkeletonProps extends FlexProps {
  /** Is the skeleton circle? (Default: false) */
  type?: string
}

/** Provides a loading Skeleton */
export default function SkeletonTemplate({ type, ...props }: SkeletonProps) {
  if (type === 'LoadingBox') {
    return (
      <BigEmptyFlex {...props} >
        <CenteredSpinner />
      </BigEmptyFlex>
    )
  } else if (type === 'BlurrySquare') {
    return (
      <BlurryFlex {...props} >
        <CenteredSpinner size={'md'} />
      </BlurryFlex>
    )
  } else if (type === 'CollectionGrid') {
    return (
      <CollectionGrid {...props} >
      </CollectionGrid>
    )
  }
}
