import styled from '@emotion/styled'
import InputRounded from '../InputRounded'

interface InputRoundedSearchBaseProps {
  $hasButton: boolean
}

export const InputRoundedSearchBase = styled(
  InputRounded
)<InputRoundedSearchBaseProps>`
  /* Leave space for the right-aligned IconButton. */
  ${({ theme, $hasButton }) =>
    $hasButton &&
    `
      padding-right: ${theme.forms.inputs.default.height};
    `}
`
