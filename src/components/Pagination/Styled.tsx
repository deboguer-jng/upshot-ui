import styled from '@emotion/styled'

export const PaginationBase = styled.div`
  color: ${({ theme }) => theme.colors['grey-300']};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  font-size: ${({ theme }) => theme.fontSizes[1]};

  & ul {
    display: inline-block;
  }

  & li {
    display: inline-block;
    margin: 0 ${({ theme }) => theme.space[1] + 'px'};
    padding: ${({ theme }) => theme.space[2] + 'px'};
  }

  & li.disabled {
    color: ${({ theme }) => theme.colors['grey-700']};
  }

  & li.selected {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.radii.xs};
  }
`
