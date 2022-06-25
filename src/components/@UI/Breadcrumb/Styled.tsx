import styled from '@emotion/styled'
import { transientOptions } from '../../../themes/'

export const BreadcrumbWrapper = styled('div', transientOptions)`
  display: flex;
  align-items: center;
  width: fit-content;
  background: ${({ theme }) => theme.colors['grey-900']};
  opacity: 0.5;
  border-radius: 10px;
  padding: 6px 12px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors['grey-800']};
    opacity: 1;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }

    svg path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`
