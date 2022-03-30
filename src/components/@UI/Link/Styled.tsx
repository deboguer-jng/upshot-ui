import styled from '@emotion/styled'
import { Link } from 'theme-ui'

export const StyledLink = styled(Link)<{ $noHover: boolean }>`
  color: #FFF;
  text-decoration: none;
  :hover {
    text-decoration: ${({ $noHover }) => !!$noHover ? 'none' : 'underline'};
    
  }
`
