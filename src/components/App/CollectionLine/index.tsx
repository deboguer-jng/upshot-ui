import React from 'react'
import { FlexProps } from 'theme-ui'
import theme from '../../../themes/UpshotUI'
import Box from '../../Layout/Grid'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import colors from '../../../themes/UpshotUI/colors'
import { StyledCollectionLine, StyledBox } from './Styled'



export interface CollectionLineProps extends FlexProps{
    underglow?: keyof typeof colors
}

/** Provides a loading Skeleton */
export default function CollectionLine({underglow, ...props }: CollectionLineProps) {

    return (
      <StyledCollectionLine gap={2} columns={[6, '1fr 3fr 3fr 3fr 3fr 3fr']} $underglow={underglow} {...{ ...props }} >
        <Box>
          <IconButton
            type="button"
            sx={{ height: '48px', width: '48px', padding: 0 }}
          >
            <Icon
              icon={'upshot'}
              color={'primary'}
              size={ '100%'}
              style={{ marginLeft: 0 }}
              aria-label={'Upshot logo'}
            />
          </IconButton>
        </Box>
        <Box>
          Cripto Punks
        </Box>
        <StyledBox>
         1.5hrs
        </StyledBox>
        <StyledBox
          sx={{ color : theme.colors.red }}
        >
        $18928.38
        </StyledBox>
        <StyledBox>
         1,111,111
        </StyledBox>
        <StyledBox
          sx={{ color : theme.colors.red }}
        >
        1467
        </StyledBox>

      </StyledCollectionLine>
    )
}
