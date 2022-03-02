import React, { forwardRef } from 'react'
import Icon from '../Icon'
import Text from '../Text'
import { BreadcrumbWrapper } from './Styled'

export interface BreadcrumbProps {
  text: string
}

const Breadcrumb = forwardRef(
  (
    { text, ...props }: BreadcrumbProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <BreadcrumbWrapper {...{ ref, ...props }}>
        <Icon icon="arrowStylizedLeft" />
        <Text> {text} </Text>
      </BreadcrumbWrapper>
    )
  }
)

export default Breadcrumb
