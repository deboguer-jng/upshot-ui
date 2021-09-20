import React, { forwardRef, HTMLAttributes, useState } from 'react'
import {
  ButtonChartCollectionWrapper,
  ButtonChartCollectionIcon,
} from './Styled'
import Text from '../Text'
import colors from '../../../themes/UpshotUI/colors'


export interface ButtonChartCollectionProps {
  color: keyof typeof colors
  selected: Boolean
  title: string
}

// fixme: title should just be a child
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
