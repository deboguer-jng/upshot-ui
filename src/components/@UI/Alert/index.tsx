import React, { forwardRef } from 'react'
import { AlertProps as ThemeUIAlertProps } from 'theme-ui'
import {
  AlertCloseButton,
  AlertWrapperInner,
  ThemeUIAlertWrapper,
} from './Styled'
import Icon from '../Icon'
import Spinner from '../Spinner'

export interface AlertProps {
  onClose?: () => void
}

/**
 * Provides a small toast alert
 */
const Alert = forwardRef(
  (
    { children, variant, onClose, ...props }: AlertProps & ThemeUIAlertProps,
    ref: React.ForwardedRef<HTMLImageElement>
  ) => (
    <ThemeUIAlertWrapper {...{ ref, ...props }} variant={variant}>
      <AlertWrapperInner variant={variant}>
        <div style={{ paddingRight: '10px' }}>
          {
            {
              ['pending']: <Spinner size="sm" />,
              ['error']: <Icon icon="attention" color="red" size="20" />,
              ['success']: <Icon icon="checkmark" color="green" size="20" />,
            }[variant]
          }
        </div>
        {children}
        <AlertCloseButton onClick={onClose}>
          <Icon icon="close" size="15" color="grey-300" />
        </AlertCloseButton>
      </AlertWrapperInner>
    </ThemeUIAlertWrapper>
  )
)

export default Alert
