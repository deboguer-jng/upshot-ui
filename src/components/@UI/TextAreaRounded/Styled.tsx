import styled from '@emotion/styled'
import { Flex, Textarea } from 'theme-ui'
import theme from '../../../themes/UpshotUI'

export const TextareaContainer = styled(Flex)`
  padding: ${({ theme }) => theme.sizes[2]}px;
`

export const WrappedTextarea = styled(Textarea)`
  width: 100% !important;
  resize: none;
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

export const TextareaOverlay = styled(Flex)`
  width: 100px;
  flex-direction: column;
  text-align: right;
  position: relative;
  padding-top: 8px;
  padding-right: 6px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors['grey-500']};
`
