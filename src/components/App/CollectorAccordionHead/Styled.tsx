import styled from '@emotion/styled'
import { Grid } from 'theme-ui'
import { transientOptions } from '../../../themes'

export const AccordionHeadBase = styled(Grid, transientOptions)`
  grid-template-columns: auto min-content;
  padding: ${({ theme }) => theme.space[2] + 'px'};
  padding-left: 67px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors['grey-500']};
  width: 100%;
`
