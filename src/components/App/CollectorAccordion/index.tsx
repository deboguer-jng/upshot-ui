import React, { forwardRef } from 'react'
import { Flex, FlexProps } from 'theme-ui'

export interface CollectorAccordionProps extends FlexProps {
  /**
   * Expand to 100% of the container width.
   */
  fullWidth?: boolean
}

/**
 * Provides an accordion wrapper for the collectors table.
 */
const CollectorAccordion = forwardRef(
  (
    { children, fullWidth, ...props }: CollectorAccordionProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <Flex
      {...{ ref, ...props }}
      sx={{
        flexDirection: 'column',
        gap: 4,
        width: fullWidth ? '100%' : 'auto',
      }}
    >
      {children}
    </Flex>
  )
)

export default CollectorAccordion
