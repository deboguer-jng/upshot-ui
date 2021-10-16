import styled from '@emotion/styled'
import { Link } from 'theme-ui'
import { Text, Avatar, Panel, Icon } from '../../../'


interface sizeProps {
  $isBig: boolean
}

export const StyledPanel = styled(Panel)<sizeProps>`
  padding: ${({ $isBig }) => $isBig == true ? '27px' : '22px' };
  height: 100%;
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
