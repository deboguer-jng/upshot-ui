import styled from '@emotion/styled'
import { Radio } from 'theme-ui'
import radios from '../../themes/UpshotUI/radios'

interface RadioProps {
  $type: keyof typeof radios
}

export const StyledRadio = styled(Radio)<RadioProps>`
  input ~ & {
    color: ${({ $type }) => 
    radios[$type].color};
  },
  input:checked ~ & {
    fill: ${({ $type }) => 
    radios[$type].checkedColor};
  },
  input:focus ~ & {
    background: #00000000;
    border: 2px solid ${({ $type }) => 
      radios[$type].checkedColor};
    color: ${({ $type }) => 
      radios[$type].color};
  }
`