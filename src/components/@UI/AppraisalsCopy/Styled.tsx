import styled from '@emotion/styled'
import { transientOptions } from '../../../themes'

interface AppraisalsCopyWrapperProps {
  open: boolean
}

export const AppraisalsCopyWrapper = styled(
  'div',
  transientOptions
)<AppraisalsCopyWrapperProps>`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;

  &:hover {
    background: ${({ theme, open }) => !open && theme.colors.transparent};
  }
`

export const AppraisalsCopyClosed = styled('div', transientOptions)`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};

  svg {
    color: ${({ theme }) => theme.colors.black};
    path {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};

    span {
      color: ${({ theme }) => theme.colors.primary};
    }

    svg {
      color: ${({ theme }) => theme.colors.primary};
      path {
        color: ${({ theme }) => theme.colors.black};
      }
    }
  }
`

export const AppraisalsCopyOpened = styled('div', transientOptions)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  a {
    font-size: 12px;
  }
`

export const ArrpaisalsCopyOpenedTopBar = styled('div', transientOptions)`
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${({ theme }) => theme.colors.black};
    path {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const AppraisalsCopyButton = styled('span', transientOptions)`
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
`

export const AppraisalsCopyOpenedContent = styled('p', transientOptions)`
  margin: 0;
  font-size: 12px;

  a {
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    margin-left: 5px;
  }
`
