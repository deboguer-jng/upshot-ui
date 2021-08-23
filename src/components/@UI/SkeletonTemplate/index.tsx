import React from 'react'
import { CenteredSpinner, BigEmptyFlex, BlurryFlex, CollectionGrid } from './Styled'
import Skeleton from '../Skeleton'
import Box from '../../Layout/Grid'
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
      <CollectionGrid gap={2} columns={[2, '1fr 3fr']} {...props} >
        <Box>
          <Skeleton
            circle={true}
            sx={{
              height: '38px',
              width: '38px',
              marginRight: '16px'
            }}
          />
        </Box>
        <Box sx={{ gridGap: '6px' }}>
          <Skeleton
            circle={true}
            sx={{
              height: '18px',
              width: '90%',
            }}
          />
          <Skeleton
          circle={true}
          sx={{
            height: '10px',
            width: '50%',
          }}
        />
        </Box>

      </CollectionGrid>
    )
  }
}
