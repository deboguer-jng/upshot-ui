import styled from '@emotion/styled'
import { Label as ThemeUILabel } from '@theme-ui/components'

interface LabelProps {
  $variant: string
}

export const Label = styled(ThemeUILabel)<LabelProps>`
  variant: variant;
`