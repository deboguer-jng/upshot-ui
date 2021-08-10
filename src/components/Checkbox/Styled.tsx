import styled from '@emotion/styled'
import { Checkbox } from 'theme-ui'
import checkboxes from '../../themes/UpshotUI/checkboxes'

interface CheckboxProps {
  $type: keyof typeof checkboxes
}

export const StyledCheckbox = styled(Checkbox)<CheckboxProps>`
  input ~ & {
    color: ${({ $type }) => 
      checkboxes[$type].color};
  },
  input:checked ~ & {
    fill: ${({ $type }) => 
      checkboxes[$type].checkedColor};
  }
`