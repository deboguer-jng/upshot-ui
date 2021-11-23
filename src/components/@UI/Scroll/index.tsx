import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from 'react'
import Icon from '../Icon'
import { ScrollWrapper, Slider, SliderIconWrapper } from './Styled'

export interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Scroll = forwardRef(
  (
    { children, ...props }: ScrollProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [value, setValue] = useState(0)
    const [bodyWidth, setBodyWidth] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0)
    const childrenRef = useRef<HTMLDivElement>()
    const imgRef = useRef<HTMLImageElement>()

    useEffect(() => {
      if (childrenRef.current) {
        const children = childrenRef.current.children[0]

        setBodyWidth(
          (children as HTMLDivElement).offsetWidth -
            childrenRef.current.offsetWidth
        )
        setSliderWidth(childrenRef.current.offsetWidth)
      }
    }, [childrenRef.current?.offsetWidth])

    const onValueChanged = (e: { target: { value: string } }) => {
      setValue(parseInt(e.target.value))
      const children = childrenRef.current.children[0] as HTMLDivElement
      imgRef.current.style.left =
        ((sliderWidth - 30) / 100) * parseInt(e.target.value) + 'px'

      children.style.marginLeft = `-${
        (bodyWidth / 100) * parseInt(e.target.value)
      }px`
    }

    return (
      <ScrollWrapper {...{ ref, ...props }}>
        <div ref={childrenRef}>{children}</div>
        {bodyWidth >= 0 ? (
          <>
            <SliderIconWrapper ref={imgRef}>
              <Icon icon="subtract" color="primary" size="30" />
            </SliderIconWrapper>
            <Slider
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={onValueChanged}
              id="myRange"
            ></Slider>
          </>
        ) : null}
      </ScrollWrapper>
    )
  }
)

export default Scroll
