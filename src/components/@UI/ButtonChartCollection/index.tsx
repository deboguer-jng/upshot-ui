import React, { forwardRef, HTMLAttributes, useState } from 'react'
import colors from '../../../themes/UpshotUI/colors'
import {
  ButtonChartCollectionWrapper,
  ButtonChartCollectionIcon,
} from './Styled'
import Text from '../Text'

export interface ButtonChartCollectionProps {
  color: keyof typeof colors
  selected: Boolean
  title: string
  onClose: Function
}

const ButtonChartCollection = forwardRef(
  (
    {
      color,
      title,
      selected,
      onClose,
      ...props
    }: ButtonChartCollectionProps & HTMLAttributes<HTMLDivElement>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <>
        <ButtonChartCollectionWrapper {...{ ref, ...props }}>
          <ButtonChartCollectionIcon selected={selected} $color={color} />
          <Text variant="large" color={color}>
            {' '}
            {title}{' '}
          </Text>
        </ButtonChartCollectionWrapper>
      </>
    )
  }
)

export default ButtonChartCollection
