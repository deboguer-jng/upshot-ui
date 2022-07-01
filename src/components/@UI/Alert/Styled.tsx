import styled from '@emotion/styled'
import { Alert, Link, Flex } from 'theme-ui'
import { transientOptions } from '../../../themes'
import theme from '../../../themes/UpshotUI'

interface ThemeUIAlertWrapperProps {
  variant?: string
}

export const ThemeUIAlertWrapper = styled(Alert, transientOptions)<ThemeUIAlertWrapperProps>`  
  position: fixed;
  bottom: 4px;
  right: 4px;
  zIndex: 100;
  min-width: 300px;
  padding: 1px;
  border-radius: 20px;
  background: ${({ variant, theme }) => {
    switch(variant) {
      case 'error': return 'red'
      case 'success': return 'linear-gradient(to bottom, #1891FC, #1BB441)'
      default: return theme.colors['grey-900']
    }
  }}
`

export const AlertWrapperInner = styled(Flex, transientOptions)`
  width: 100%;
  border-radius: inherit;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  padding: 16px 60px 16px 20px;
  background: ${({ theme }) => theme.colors['grey-900']}
`

export const AlertCloseButton = styled(Link, transientOptions)`
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`
