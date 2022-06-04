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
  background-color: ${({ $dark }) => $dark ? 'black': theme.colors['grey-800']};
  border-radius: ${theme.radii.pill};
`

export const WrappedInput = styled(Input)<WrappedInputProps>`
  &:focus::placeholder {
    color: transparent;
  }
  /* Leave space for the right-aligned suffix. */
  ${({ theme, $suffix }) =>
    $suffix?.length &&
    `padding-right: ${theme.forms.inputs.default.height};`
  }
`

export const SuffixText = styled(Text)<SuffixTextProps>`
  padding: ${sizes[3] + 'px'};
  ${({theme, $disabled}) => $disabled && `color: ${theme.colors['grey-500']};`}
`

export const PrefixText = styled(Text)<SuffixTextProps>`
  padding: ${sizes[3] + 'px'};
  padding-right: 0;
  ${({theme, $disabled}) => $disabled && `color: ${theme.colors['grey-500']};`}
`