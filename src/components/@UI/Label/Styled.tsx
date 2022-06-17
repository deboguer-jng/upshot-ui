import styled from '@emotion/styled'
import { Label as ThemeUILabel } from '@theme-ui/components'
import Colors from '../../../themes/UpshotUI/colors'
import { transientOptions } from '../../../themes'

interface ColorProp {
  $color?: keyof typeof Colors
}

export const StyledThemeUILabel = styled(
  ThemeUILabel,
  transientOptions
)<ColorProp>`
  ${({ theme, $color }) =>
    `
      border-color: ${theme.colors[$color]};
      color: ${theme.colors[$color]};
    `}
`
