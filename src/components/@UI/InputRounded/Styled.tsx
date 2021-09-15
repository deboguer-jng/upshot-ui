import styled from '@emotion/styled'
import { Input } from 'theme-ui'

export const WrappedInput = styled(Input)`
  &:focus::placeholder {
    color: transparent;
  }
`
