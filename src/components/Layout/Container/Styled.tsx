import css from '@emotion/css'
import styled from '@emotion/styled'
import { Flex } from 'theme-ui'

export const ContainerBase = styled(Flex)`
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]}px;

  /* Progressively larger widths by breakpoint. */
  max-width: 100%; /* Mobile-first width */
  ${({ theme }) =>
    theme.breakpoints.map(
      (breakpoint) => css`
        @media only screen and (min-width: ${breakpoint}) {
          max-width: ${breakpoint};
        }
      `
    )}
`
