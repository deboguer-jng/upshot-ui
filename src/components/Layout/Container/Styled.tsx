import css from '@emotion/css'
import styled from '@emotion/styled'
import { Flex } from 'theme-ui'
import { breakpoints } from '../../../themes/UpshotUI/sizes'

export const ContainerBase = styled(Flex)<{ $constrain?: number }>`
  width: 100%;
  margin: 0 auto;

  ${({ $constrain = 0 }) =>
    breakpoints.map(
      (bkp: string, idx: number) => css`
        @media only screen and (min-width: ${bkp}) {
          max-width: ${breakpoints[Math.max(0, idx - $constrain)]};
        }
      `
    )}
`
