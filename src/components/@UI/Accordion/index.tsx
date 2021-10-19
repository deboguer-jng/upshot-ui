import React, {
  forwardRef,
  ReactNode,
  useState,
  useEffect,
  useRef,
} from 'react'
import {
  AccordionWrapper,
  AccordionHeader,
  AccordionBody,
  AccordionBodyWrapper,
} from './Styled'
import Icon from '../Icon'
import Text from '../Text'

export interface AccordionProps {
  title: string
  children: ReactNode
  isDropdown?: boolean
}

const Accordion = forwardRef(
  (
    { title, children, isDropdown, ...props }: AccordionProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [accodionOpen, setAccordionOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>()

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!dropdownRef.current.contains(e.target as Node) && isDropdown) {
          setAccordionOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
      <div {...{ ref, ...props }}>
        <AccordionWrapper ref={dropdownRef}>
          <AccordionHeader
            open={accodionOpen}
            isDropdown={isDropdown}
            onClick={() => setAccordionOpen(!accodionOpen)}
          >
            <Text color="text" variant="large">
              {title}
            </Text>
            <Icon icon="arrowDropdown" />
          </AccordionHeader>
          <AccordionBodyWrapper isDropdown={isDropdown} open={accodionOpen}>
            <AccordionBody isDropdown={isDropdown} open={accodionOpen}>
              {children}
            </AccordionBody>
          </AccordionBodyWrapper>
        </AccordionWrapper>
      </div>
    )
  }
)

export default Accordion
