import React from 'react'
import { CollectionLine, StyledBox, StyledSkeleton } from './Styled'
import Skeleton from '../../@UI/Skeleton'
import Box from '../../Layout/Grid'
import { FlexProps } from 'theme-ui'


/** Provides a loading Skeleton */
export default function CollectionLineTemplate({ ...props }: FlexProps) {
    return (
      <CollectionLine gap={2} columns={[6, '1fr 3fr 3fr 3fr 3fr 3fr']} {...props} >
        <Box>
          <Skeleton
            circle={true}
            sx={{
              height: '50px',
              width: '50px'
            }}
          />
        </Box>
        <Box>
          <Skeleton
            circle={true}
            sx={{
              height: '18px',
              width: '90%',
            }}
          />
        </Box>
        <StyledBox>
          <StyledSkeleton circle={true} />
        </StyledBox>
        <StyledBox>
          <StyledSkeleton circle={true} />
        </StyledBox>
        <StyledBox>
          <StyledSkeleton circle={true} />
        </StyledBox>
        <StyledBox>
          <StyledSkeleton circle={true} />
        </StyledBox>

      </CollectionLine>
    ) 
}
