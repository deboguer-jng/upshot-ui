import React from 'react'
import { CenteredSpinner, BlurrySquare } from './Styled'
import { FlexProps } from 'theme-ui'



/** Provides a loading Skeleton */
export default function BlurrySquareTemplate({ ...props }: FlexProps) {

    return (
      <BlurrySquare {...props} >
        <CenteredSpinner size={'md'} />
      </BlurrySquare>
    )

}
