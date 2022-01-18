import React, { forwardRef, useState, useRef, ReactNode } from 'react'
import { Relative, ScrollWrapper, FadeEffect } from './StyledSliderFade'
import { BoxProps } from '@theme-ui/components'

export interface ScrollProps extends BoxProps {
  children: ReactNode
}

const SliderFade = forwardRef(
  (
    { children, ...props }: ScrollProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const childrenRef = useRef<HTMLDivElement>()

    const [isScrolledRight, setIsScrolledRight] = useState(false)
    const handleScroll = (elem: any) => {
      const scrollLeft = elem.target.scrollLeft
      const scrollWidth = elem.target.scrollWidth
      const clientWidth = elem.target.clientWidth
      setIsScrolledRight(scrollLeft + clientWidth == scrollWidth)
    }

    return (
      <Relative>
        <FadeEffect $isScrolledRight={isScrolledRight} />
        <ScrollWrapper
          onScroll={handleScroll.bind(this)}
          {...{ ref, ...props }}
        >
          <div ref={childrenRef}>{children}</div>
        </ScrollWrapper>
      </Relative>
    )
  }
)

export default SliderFade
