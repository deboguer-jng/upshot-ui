import React, { forwardRef } from 'react'
import { AccordionHeadBase } from './Styled'
import { BoxProps } from 'theme-ui'

export interface AccordionHeadProps extends BoxProps {}

/**
 * Provides a surface for UI elements.
 */
const AccordionHead = forwardRef(
  (props: AccordionHeadProps, ref: React.ForwardedRef<HTMLDivElement>) => (
    <AccordionHeadBase {...{ ref, ...props }} />
  )
)

export default AccordionHead
