import React from 'react'
import { CenteredSpinner, BlurrySquare, BackgroundBox } from './Styled'
import { FlexProps } from 'theme-ui'

/** Provides a loading Skeleton */
export default function BlurrySquareTemplate({ ...props }: FlexProps) {
  return (
    <BlurrySquare {...props}>
      <BackgroundBox />
      <CenteredSpinner size={'md'} />
    </BlurrySquare>
  )
}
