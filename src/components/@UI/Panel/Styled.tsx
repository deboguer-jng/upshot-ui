import styled from '@emotion/styled'
import { Box } from 'theme-ui'

import colors from '../../../themes/UpshotUI/colors'
import { radii } from '../../../themes/UpshotUI/sizes'
interface PanelBaseProps {
  $shadow: string
  $isMobile: boolean
  $backgroundColor: keyof typeof colors
  $outlined: boolean
  $radii: keyof typeof radii
}

export const PanelBase = styled(Box)<PanelBaseProps>`
  padding: ${({ $isMobile }) => ($isMobile ? '24px' : '30px')};
  background-color: ${({ theme, $backgroundColor }) =>
    theme.colors[$backgroundColor]};
  border-radius: ${({ theme, $radii }) => theme.radii[$radii]};
  &:hover {
    ${({ $shadow }) => $shadow.length > 0 && `box-shadow: ${$shadow};`}
  }
  ${({ theme, $outlined }) =>
    $outlined && `border: 1px solid ${theme['rawColors']['grey-700']};`}
`
