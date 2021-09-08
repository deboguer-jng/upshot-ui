import styled from '@emotion/styled'
import { transparentize } from 'polished'

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
    justify-content: center;
  }

  & ul,
  & a {
    gap: ${({ theme }) => theme.space[1] + 'px'};
  }

  & ul {
    padding: 0;
    margin: 0;
  }

  /* Pagination buttons */
  & li {
    border-radius: ${({ theme }) => theme.radii.xs};
    transition: ${({ theme }) => theme.transitions.default};

    &.disabled,
    &.selected {
      pointer-events: none;
    }

    &.disabled {
      color: ${({ theme }) => theme.colors.disabled};
    }

    &.selected {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.black};
    }

    /* Unselected interactive buttons */
    &:not(.selected):not(.break):hover {
      background: ${({ theme }) =>
        transparentize(0.5, theme.rawColors.primary)};
    }

    /* Button contents */
    & a {
      user-select: none;
      padding: ${({ theme }) => `${theme.space[1]}px ${theme.space[2]}px`};
      cursor: pointer;

      /* Chevron arrows */
      & svg {
        height: ${({ theme }) => theme.sizes[3] + 'px'};
        width: ${({ theme }) => theme.sizes[3] + 'px'};
      }
    }
  }
`
