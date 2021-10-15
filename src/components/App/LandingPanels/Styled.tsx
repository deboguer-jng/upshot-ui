import styled from '@emotion/styled'
import { Link } from 'theme-ui'
import { Text, Avatar, Panel, Icon } from '../../../'


interface sizeProps {
  $isBig: boolean
}

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

export const StyledDescription = styled(Text)<sizeProps>`
  display: block;
  margin-top: ${({ $isBig }) => $isBig == true ? '50px' : '10px' };
  ${({ $isBig }) => $isBig == true ? '' : 'white-space: nowrap; text-overflow: ellipsis; overflow: hidden;' }
  
`

/* 
export const LandingPanelBase = styled(Box)<LandingPanelBaseProps>`
  padding: ${({ theme }) => theme.space[5] + 'px'};
  background-color: ${({ theme, $inner }) =>
    theme.colors[$inner ? 'black' : 'grey-800']};
  border-radius: ${({ theme, $inner }) => theme.radii[$inner ? 'md' : 'lg']};
` */
