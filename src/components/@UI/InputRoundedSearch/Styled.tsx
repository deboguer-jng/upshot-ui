import styled from '@emotion/styled'
import InputRounded from '../InputRounded'

export const InputRoundedSearchBase = styled(InputRounded)`
  /* Leave space for the right-aligned IconButton. */
  padding-right: ${({ theme }) => theme.forms.inputs.default.height};
`
