import React, { forwardRef, HTMLAttributes, useState } from 'react'
import colors from '../../../themes/UpshotUI/colors'
import {
  ButtonChartCollectionWrapper,
  ButtonChartCollectionIcon,
  ButtonChartCollectionCloseIcon,
  ButtonChartCollectionContentWrapper,
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
    const [showClose, setShowClose] = useState(false)

    return (
      <>
        <ButtonChartCollectionWrapper
          ref={ref}
          onMouseOver={() => setShowClose(true)}
          onMouseOut={() => setShowClose(false)}
        >
          <ButtonChartCollectionContentWrapper {...props}>
            <ButtonChartCollectionIcon selected={selected} $color={color} />
            <Text variant="large" color={color}>
              {' '}
              {title}{' '}
            </Text>
          </ButtonChartCollectionContentWrapper>
          <ButtonChartCollectionCloseIcon
            onClick={() => onClose()}
            show={showClose}
            color={color}
            icon="close"
          />
        </ButtonChartCollectionWrapper>
      </>
    )
  }
)

export default ButtonChartCollection
