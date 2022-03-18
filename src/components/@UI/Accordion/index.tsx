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

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title for the Accordion component
   */
  title: string
  /**
   * Render the expanded state.
   */
  open?: boolean
  /**
   * Render the AccordionHeader dropdown variant.
   */
  isDropdown?: boolean
  /**
   * Handler for the close click event.
   */
  onClose?: () => void
}

const Accordion = forwardRef(
  (
    {
      title,
      children,
      open,
      isDropdown,
      onClose,
      onClick,
      ...props
    }: AccordionProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const dropdownRef = useRef<HTMLDivElement>()

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!dropdownRef.current.contains(e.target as Node) && isDropdown) {
          onClose?.()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
      <div {...{ ref, ...props }}>
        <AccordionWrapper ref={dropdownRef}>
          <AccordionHeader {...{ open, isDropdown, onClick }}>
            <Text color="text" variant="large">
              {title}
            </Text>
            <Icon icon="arrowDropdown" />
          </AccordionHeader>
          <AccordionBodyWrapper {...{ open, isDropdown }}>
            <AccordionBody {...{ open, isDropdown }}>{children}</AccordionBody>
          </AccordionBodyWrapper>
        </AccordionWrapper>
      </div>
    )
  }
)

export default Accordion
