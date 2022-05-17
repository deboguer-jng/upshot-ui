import styled from '@emotion/styled'
import { Flex, Textarea } from 'theme-ui'

export const WrappedTextarea = styled(Textarea)`
  &:focus::placeholder {
    color: transparent;
  }
`

export const TextareaOverlay = styled(Flex)`
  flex-direction: column;
  text-align: right;
  position: relative;
  top: 10px;
  right: 75px;
`