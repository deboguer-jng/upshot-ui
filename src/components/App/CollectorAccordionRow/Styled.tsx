import styled from '@emotion/styled'
import css from '@emotion/css'
import { Grid } from 'theme-ui'
import { CollectorAccordionRowVariant } from './'

export const CollectorRowBase = styled.div<{
  $open: boolean
}>`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors['grey-900']};
`

export const CollectorRowContent = styled(Grid)`
  grid-template-columns: 48px auto min-content min-content;
  padding: ${({ theme }) => theme.space[2] + 'px'};
  background: ${({ theme }) => theme.colors.black};
  border-radius: 20px;
`

export const CollectorRowExpansion = styled.div<{
  $open: boolean
  $variant: CollectorAccordionRowVariant
}>`
  overflow: hidden;
  max-height: ${({ $open, $variant }) =>
    $open ? ($variant === 'landing' ? '180px' : '500px') : 0};
  transition: all 1s ease;

  ${({ theme, $open, $variant }) => css`
    @media only screen and (max-width: ${theme.breakpoints[1]}) {
      max-height: ${$open ? ($variant === 'landing' ? '240px' : '880px') : 0};
    }
  `}
`
