import React from 'react'
import { ContainerBase } from './Styled'
import { FlexProps } from 'theme-ui'

export interface ContainerProps extends FlexProps {}

/**
 * Provides a centered layout container with mobile-first breakpoints.
 */
export default function Container({ ...props }: ContainerProps) {
  return <ContainerBase {...props} />
}
