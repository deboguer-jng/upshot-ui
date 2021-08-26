import styled from '@emotion/styled'
import Grid from '../../Layout/Grid'
import colors from '../../../themes/UpshotUI/colors'
import Box from '../../Layout/Grid'

interface CollectionButtonWrapperProps {
  $underglow?: keyof typeof colors
}

export const StyledBox = styled(Box)`
  justify-items: center;
`

export const StyledCollectionLine = styled(Grid)<CollectionButtonWrapperProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 6px 18px;
  ${({ theme, $underglow }) =>
    !!$underglow && `box-shadow: ${theme.shadows.underglow($underglow)};`}
`


