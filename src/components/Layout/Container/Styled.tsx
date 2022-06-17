import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Flex } from 'theme-ui'
import { breakpointsNamed, breakpoints } from '../../../themes/UpshotUI/sizes'

interface ContainerBaseProps {
  $maxBkp?: keyof typeof breakpointsNamed
}

export const ContainerBase = styled(Flex, transientOptions)<ContainerBaseProps>`
  width: 100%;
  margin: 0 auto;

  ${({ $maxBkp }) =>
    breakpoints.map(
      (bkp: string) => css`
        @media only screen and (min-width: ${bkp}) {
          max-width: ${$maxBkp
            ? `calc(min(${bkp}, ${breakpointsNamed[$maxBkp]}))`
            : bkp};
        }
      `
    )}
`
