import styled from '@emotion/styled'

import Text from '../../@UI/Text'
import Avatar from '../../@UI/Avatar'
import Icon from '../../@UI/Icon'
import Panel from '../../@UI/Panel'

interface sizeProps {
  $isBig: boolean
}

export const StyledPanel = styled(Panel)<sizeProps>`
  padding: ${({ $isBig }) => $isBig == true ? '27px' : '22px' };
  height: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black} !important;
  }
`
export const StyledAvatar = styled(Avatar)`
  float: left;
  margin-right: 14px;
`
export const StyledText = styled(Text)`
  display: block;
  margin-top: 2px;
`

export const StyledIcon = styled(Icon)`
  float: right;
`

export const StyledDescription = styled(Text)<sizeProps>`
  display: block;
  margin-top: ${({ $isBig }) => $isBig == true ? '50px' : '10px' };
  ${({ $isBig }) => $isBig == true ? '' : 'white-space: nowrap; text-overflow: ellipsis; overflow: hidden;' }
  
`
