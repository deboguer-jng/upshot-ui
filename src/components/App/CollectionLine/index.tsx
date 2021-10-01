import React, { forwardRef, ReactNode } from 'react'
import { FlexProps } from 'theme-ui'
import theme from '../../../themes/UpshotUI'
import Box from '../../Layout/Grid'
import Icon from '../../@UI/Icon'
import IconButton from '../../@UI/IconButton'
import colors from '../../../themes/UpshotUI/colors'
import { StyledCollectionLine, StyledBox, StyledIconButton } from './Styled'

export interface CollectionLineProps extends FlexProps {
  underglow?: keyof typeof colors
  icon?: ReactNode
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
}

/** Provides a loading Skeleton */
const CollectionLine = forwardRef(
  (
    {
      underglow,
      icon,
      text1 = 'text1',
      text2 = 'text2',
      text3 = 'text3',
      text4 = 'text4',
      text5 = 'text5',
      ...props
    }: CollectionLineProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <StyledCollectionLine
        gap={2}
        columns={[7, '1.2fr 3fr 3fr 3fr 3fr 3fr 0fr']}
        $underglow={underglow}
        {...{ ref, ...props }}
      >
        <Box>
          <StyledIconButton type="button">
            <Icon
              icon={'upshot'}
              color={'primary'}
              size={'100%'}
              style={{ marginLeft: 0 }}
              aria-label={'Upshot logo'}
            />
          </StyledIconButton>
        </Box>
        <Box>{text1}</Box>
        <StyledBox>{text2}</StyledBox>
        <StyledBox sx={{ color: theme.colors.red }}>{text3}</StyledBox>
        <StyledBox>{text4}</StyledBox>
        <StyledBox sx={{ color: theme.colors.red }}>{text5}</StyledBox>
        <Box sx={{ marginRight: '40px' }}>
          <IconButton>{icon}</IconButton>
        </Box>
      </StyledCollectionLine>
    )
  }
)

export default CollectionLine
