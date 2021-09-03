import React, { forwardRef, ReactNode, useState } from 'react'
import { AccordionWrapper, AccordionHeader, AccordionBody } from './Styled'
import Icon from '../Icon'

export interface AccordionProps {
  title: string
  children: ReactNode
}

const Accordion = forwardRef(
  (
    { title, children, ...props }: AccordionProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [accodionOpen, setAccordionOpen] = useState(false)

    return (
      <AccordionWrapper {...{ ref, ...props }}>
        <AccordionHeader
          open={accodionOpen}
          onClick={() => setAccordionOpen(!accodionOpen)}
        >
          <span>{title}</span>
          <Icon icon="arrowDropdown" />
        </AccordionHeader>
        <AccordionBody open={accodionOpen}>{children}</AccordionBody>
      </AccordionWrapper>
    )
  }
)

export default Accordion
