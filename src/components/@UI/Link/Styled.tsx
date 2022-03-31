import styled from '@emotion/styled'
import { Link } from 'theme-ui'

import colors from '../../../themes/UpshotUI/colors'

interface LinkProp {
  $noHover: boolean,
  $color: keyof typeof colors
}

export const StyledLink = styled(Link)<LinkProp>`
  color:  ${({ $color }) => $color ?? 'inherit'};
  font-size: inherit;
  text-decoration: none;
  :hover {
    text-decoration: ${({ $noHover }) => !!$noHover ? 'none' : 'underline'};
  }
`
