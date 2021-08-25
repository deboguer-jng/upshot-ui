import React from 'react'
import { CollectionGrid } from './Styled'
import Skeleton from '../../@UI/Skeleton'
import Box from '../../Layout/Grid'
import { FlexProps } from 'theme-ui'


/** Provides a loading Skeleton */
export default function CollectionGridTemplate({ ...props }: FlexProps) {
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
