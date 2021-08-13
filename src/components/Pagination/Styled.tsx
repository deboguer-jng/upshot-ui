import styled from '@emotion/styled'

export const PaginationBase = styled.div`
  color: ${({ theme }) => theme.colors['grey-300']};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes[1]};

  & ul,
  & li,
  & a {
    display: inline-flex;
    align-items: center;
  }

  /* Pagination buttons */
  & li {
    margin: 0 ${({ theme }) => theme.space[1] + 'px'};
    padding: ${({ theme }) => theme.space[1] + 'px'};
    min-width: ${({ theme }) => theme.sizes[3] + 'px'};

    &.disabled {
      color: ${({ theme }) => theme.colors['grey-700']};
    }

    &.selected {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: ${({ theme }) => theme.radii.xs};
      min-width: ${({ theme }) => theme.sizes[3] + 'px'};
      justify-content: center;
    }

    /* Button contents */
    & a {
      gap: ${({ theme }) => theme.sizes[1] + 'px'};

      /* Chevron arrows */
      & svg {
        height: ${({ theme }) => theme.sizes[3] + 'px'};
        width: ${({ theme }) => theme.sizes[3] + 'px'};
      }
    }
  }
`
