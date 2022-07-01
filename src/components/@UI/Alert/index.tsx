import React, { forwardRef } from 'react'
import colors from '../../../themes/UpshotUI/colors'
import { AlertProps as ThemeUIAlertProps, Theme } from 'theme-ui'
import { AlertCloseButton, ThemeUIAlertWrapper } from './Styled'
import { useTheme } from '@emotion/react'
import Icon from '../Icon'
import Spinner from '../Spinner'

export interface AlertProps {
  
}

/**
 * Provides a small toast alert
 */
const Alert = forwardRef(
  (
    {
      children,
      variant,
      ...props
    }: AlertProps & ThemeUIAlertProps,
    ref: React.ForwardedRef<HTMLImageElement>
  ) => {
    const theme = useTheme()

    return (
      <ThemeUIAlertWrapper {...props} variant={variant} bg='grey-900'>
        {{
          ['pending']:  <Spinner size='sm' />,
          ['error']:    <Icon icon="attention" color='red' size='20' />,
          ['success']:  <Icon icon="checkmark" color='green' size='20' />,
        }[variant]}
        {children}
        <AlertCloseButton icon='close' size='15' color='grey-300' />
      </ThemeUIAlertWrapper>
    )
  }
)

export default Alert
