import styled from '@emotion/styled'
import { Link } from 'theme-ui'
import colors from '../../../themes/UpshotUI/colors'
import { transientOptions } from '../../../themes'

interface LinkProp {
  $noHover: boolean
  $color: keyof typeof colors
}

export const StyledLink = styled(Link, transientOptions)<LinkProp>`
  color: ${({ $color, theme }) => theme.rawColors[$color] ?? 'inherit'};
  font-size: inherit;
  text-decoration: none;
  flex-shrink: 0;
  white-space: nowrap;
  :hover {
    text-decoration: ${({ $noHover }) => ($noHover ? 'none' : 'underline')};
  }
`
