import styled from '@emotion/styled'
import { Alert } from 'theme-ui'
import Icon from '../Icon'
import { transientOptions } from '../../../themes'

export const ThemeUIAlertWrapper = styled(Alert, transientOptions)`  
  position: fixed;
  bottom: 4;
  right: 4;
  zIndex: 100;
  width: 300px;
  align-items: center;
  padding: 16px 20px;
  border-radius: 20px;
`

export const AlertCloseButton = styled(Icon, transientOptions)`
  position: absolute;
  right: 20px;
`
