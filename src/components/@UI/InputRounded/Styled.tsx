import styled from '@emotion/styled'
import { Flex, Input, Text } from 'theme-ui'
import theme from '../../../themes/UpshotUI'
import sizes, { getSize } from '../../../themes/UpshotUI/sizes'

interface WrappedInputProps {
  $suffix: string
}

interface ContainerProps {
  $dark: boolean
}

interface SuffixTextProps {
  $disabled: boolean
}

export const WrappedInputContainer = styled(Flex)<ContainerProps>`
  display: inline-flex;
  height: ${getSize(10) + 'px'};
  background-color: ${({ $dark }) =>
    $dark ? 'black' : theme.colors['grey-800']};
  border-radius: ${theme.radii.pill};
`

export const WrappedInput = styled(Input)<WrappedInputProps>`
  &:focus::placeholder {
    color: transparent;
  }
  &:disabled {
    color: ${theme.colors['grey-600']};
  }
`

export const SuffixText = styled(Text)<SuffixTextProps>`
  padding: ${sizes[3] + 'px'};
  padding-left: 0;
  ${({ theme, $disabled }) =>
    $disabled && `color: ${theme.colors['grey-600']};`}
  direction: rtl;
`

export const PrefixText = styled(Text)<SuffixTextProps>`
  padding: ${sizes[3] + 'px'};
  padding-right: 0;
  ${({ theme, $disabled }) =>
    $disabled && `color: ${theme.colors['grey-600']};`}
  z-index: ${theme.zIndex.dropdown};
`
