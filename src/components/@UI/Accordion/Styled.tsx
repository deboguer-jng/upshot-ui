import styled from '@emotion/styled'
import theme from '../../../themes/UpshotUI'

interface AccordionHeaderProps {
  isDropdown?: boolean
  open: boolean
}

interface AccordionBodyProps {
  isDropdown?: boolean
  open: boolean
}

interface AccordionBodyWrapperProps {
  isDropdown?: boolean
  open: boolean
}

export const AccordionWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.accordion.marginBottom}px;
  min-height: 54px;
`

export const AccordionHeader = styled.div<AccordionHeaderProps>`
  position: relative;
  z-index: ${({ theme, isDropdown, open }) =>
    open
      ? (isDropdown ? theme.zIndex.dropdown : theme.zIndex.default) + 4
      : (isDropdown ? theme.zIndex.dropdown : theme.zIndex.default) + 2};
  border-radius: ${({ theme }) => theme.accordion.header.borderRadius}px;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.accordion.header.paddingTop}px ${theme.accordion.header.paddingLeft}px`};
  background-color: ${({ theme }) => theme.colors['grey-800']};
  box-shadow: ${({ theme }) => theme.shadow.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: ${({ theme, open }) => !open && theme.transitions.default};
  transition-delay: ${({ open }) => !open && '0.15s'};

  svg {
    height: 16px;
    width: 16px;

    transform: rotate(${({ open }) => (open ? '180deg' : '0deg')});
    transition: ${({ theme }) => theme.transitions.default};
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const AccordionBodyWrapper = styled.div<AccordionBodyWrapperProps>`
  position: ${({ isDropdown }) => (isDropdown ? 'absolute' : 'relative')};
  z-index: ${({ theme, isDropdown, open }) =>
    open
      ? (isDropdown ? theme.zIndex.dropdown : theme.zIndex.default) + 3
      : (isDropdown ? theme.zIndex.dropdown : theme.zIndex.default) + 1};
  width: 100%;
  top: 0;
  left: 0;
  margin-top: ${({ isDropdown }) => (isDropdown ? '27px' : '-27px')};
  background-color: ${({ theme }) => theme.colors['grey-900']};
  border-radius: ${({ theme }) => theme.accordion.body.borderRadius}px;
  transition: ${({ theme, open }) => !open && theme.transitions.default};
  transition-delay: ${({ open }) => !open && '0.15s'};
`

export const AccordionBody = styled.div<AccordionBodyProps>`
  padding: ${({ theme }) => theme.accordion.body.padding}px;
  padding-top: ${({ open }) => (open ? '27px' : 0)};
  padding-bottom: ${({ open }) => (open ? theme.accordion.body.padding : 0)}px;
  max-height: ${({ open }) => (open ? '1000px' : '0px')};
  overflow-y: auto;
  overflow-x: hidden;
  transition: ${({ theme }) => theme.transitions.default};
  ${({ theme: { scroll } }) => scroll.thin}
`
