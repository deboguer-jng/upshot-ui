import React, { forwardRef } from 'react'
import { CenteredSpinner, BlurrySquare } from './Styled'
import { FlexProps } from 'theme-ui'



/** Provides a loading Skeleton */
const BlurrySquareTemplate = forwardRef(
  (
    { ...props }: FlexProps,
    ref: React.ForwardedRef<HTMLImageElement>
  ) => (
    <BlurrySquare {...{ ref, ...props }} >
      <CenteredSpinner size={'md'} />
    </BlurrySquare>
  )
)

export default BlurrySquareTemplate
