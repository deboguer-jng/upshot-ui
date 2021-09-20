import styled from '@emotion/styled'
import { Label as ThemeUILabel } from '@theme-ui/components'
import Colors from '../../../themes/UpshotUI/colors'

interface ColorProp {
  $color?: keyof typeof Colors
}

export const StyledThemeUILabel = styled(ThemeUILabel)<ColorProp>`
  ${({ theme, $color }) =>
    `
      color: ${theme.colors[$color]};
    `}
`
