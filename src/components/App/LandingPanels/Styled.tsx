import styled from '@emotion/styled'
import { Link } from 'theme-ui'
import { Text, Avatar, Panel, Icon } from '../../../'


/* interface LandingPanelBaseProps {
  $inner: boolean
} */

export const StyledPanel = styled(Panel)`
  padding: 27px;
`
export const StyledAvatar = styled(Avatar)`
  float: left;
  margin-right: 14px;
`
export const StyledText = styled(Text)`
  display: block;
  margin-top: 2px;
`
export const StyledTitle = styled(Text)`
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

export const StyledIcon = styled(Icon)`
  float: right;
`

export const StyledDescription = styled(Text)`
  display: block;
  margin-top: 50px;
`

/* 
export const LandingPanelBase = styled(Box)<LandingPanelBaseProps>`
  padding: ${({ theme }) => theme.space[5] + 'px'};
  background-color: ${({ theme, $inner }) =>
    theme.colors[$inner ? 'black' : 'grey-800']};
  border-radius: ${({ theme, $inner }) => theme.radii[$inner ? 'md' : 'lg']};
` */
