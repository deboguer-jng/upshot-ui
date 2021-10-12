import React, { forwardRef } from 'react'
import { Flex, FlexProps } from 'theme-ui'

export interface CollectorAccordionProps extends FlexProps {}

/**
 * Provides an accordion wrapper for the collectors table.
 */
const CollectorAccordion = forwardRef(
  (
    { children, ...props }: CollectorAccordionProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => <Flex {...{ ref, ...props }}>{children}</Flex>
)

export default CollectorAccordion
