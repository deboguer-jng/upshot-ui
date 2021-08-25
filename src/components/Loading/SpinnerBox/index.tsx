import React from 'react'
import { CenteredSpinner, BigEmptyFlex} from './Styled'
import { FlexProps } from 'theme-ui'


/** Provides a loading Skeleton */
export default function SpinnerBoxTemplate({ ...props }: FlexProps) {
    return (
      <BigEmptyFlex {...props} >
        <CenteredSpinner />
      </BigEmptyFlex>
    )
}
