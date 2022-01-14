import styled from '@emotion/styled'
import { Box } from 'theme-ui'

import colors from '../../../themes/UpshotUI/colors'

interface PanelBaseProps {
  $inner: boolean
  $shadow: string
}

export const PanelBase = styled(Box)<PanelBaseProps>`
  padding: 30px;
  background-color: ${({ theme, $inner }) =>
    theme.colors[$inner ? 'black' : 'grey-800']};
  border-radius: ${({ theme, $inner }) => theme.radii[$inner ? 'md' : 'lg']};
  &:hover {
    ${({ theme, $shadow }) => $shadow.length > 0 && `box-shadow: ${$shadow};`}
  }
`
