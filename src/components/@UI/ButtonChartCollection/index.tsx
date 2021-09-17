import React, { forwardRef, HTMLAttributes, useState } from 'react'
import {
  ButtonChartCollectionWrapper,
  ButtonChartCollectionIcon,
} from './Styled'
import Text from '../Text'

export interface ButtonChartCollectionProps {
  color: string
  selected: Boolean
  title: string
}

// fixme: title should just be a child
// fixme: typescript complaint
const ButtonChartCollection = forwardRef(
  (
    {
      color,
      title,
      selected,
      ...props
    }: ButtonChartCollectionProps & HTMLAttributes<HTMLDivElement>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <ButtonChartCollectionWrapper {...{ ref, ...props }}>
        <ButtonChartCollectionIcon selected={selected} $color={color} />
        <Text variant="large" color={color} sx={{ textTransform: 'uppercase', fontWeight: 400 }}>
          {title}
        </Text>
      </ButtonChartCollectionWrapper>
    )
  }
)

export default ButtonChartCollection
