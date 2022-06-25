import styled from '@emotion/styled'
import { Flex, Textarea } from 'theme-ui'
import theme from '../../../themes/UpshotUI'
import { transientOptions } from '../../../themes'

export const TextareaContainer = styled(Flex, transientOptions)`
  padding: ${({ theme }) => theme.sizes[2]}px;
`

export const WrappedTextarea = styled(Textarea, transientOptions)`
  width: 100% !important;
  resize: none;
  overflow: hidden;
  &:focus::placeholder {
    color: transparent;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  ,
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ,
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.1);
    outline: 1px solid ${({ theme }) => theme.colors['grey-500']};
    border-radius: 10px;
  }
`

export const TextareaOverlay = styled(Flex, transientOptions)`
  width: 100px;
  flex-direction: column;
  text-align: right;
  position: relative;
  padding-top: 8px;
  padding-right: 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors['grey-500']};
`
