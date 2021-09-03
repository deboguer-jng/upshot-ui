import styled from '@emotion/styled'
import theme from '../../../themes/UpshotUI'

interface AccordionHeaderProps {
  open: boolean
}

interface AccordionBodyProps {
  open: boolean
}

export const AccordionWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.accordion.marginBottom}px;
`

export const AccordionHeader = styled.div<AccordionHeaderProps>`
  position: relative;
  z-index: 2;
  border-radius: ${({ theme }) => theme.accordion.header.borderRadius}px;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.accordion.header.paddingTop}px ${theme.accordion.header.paddingLeft}px`};
  background-color: ${({ theme }) => theme.colors['grey-800']};
  box-shadow: ${({ theme }) => theme.shadow.default};
  display: flex;
  align-itmes: center;
  justify-content: space-between;

  svg {
    height: 16px;
    width: 16px;

    transform: rotate(${({ open }) => (open ? '180deg' : '0deg')});

    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`

export const AccordionBody = styled.div<AccordionBodyProps>`
  position: relative;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  margin-top: -50px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors['grey-900']};
  border-radius: ${({ theme }) => theme.accordion.body.borderRadius}px;
  padding: ${({ theme }) => theme.accordion.body.padding}px;
  padding-top: 50px;
  padding-bottom: ${({ open }) => (open ? theme.accordion.body.padding : 0)}px;
  height: ${({ open }) => (open ? 'fit-content' : '0px')};
`
