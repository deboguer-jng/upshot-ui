import { BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'
import { usePopperTooltip } from 'react-popper-tooltip'

import theme from '../../../themes/UpshotUI'
import { BaseBox, ChildContainer, IconMiddle, StyledPanel } from './Styled'
import { useBreakpointIndex } from '../../../hooks/useBreakpointIndex'
import Text from '../Text'

export interface TooltipProps extends BoxProps {
  /**
   * Optional child element what will trigger the tooltip on hover
   *
   */
  children?: React.ReactNode
  /**
   * The tooltip content
   */
  tooltip: React.ReactNode
}

/**
 * Provides a tooltip element.
 */
const Tooltip = forwardRef(
  (
    {
      children = <IconMiddle color="primary" icon="information" size={16} />,
      tooltip,
      ...props
    }: TooltipProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const {
      getArrowProps,
      getTooltipProps,
      setTooltipRef,
      setTriggerRef,
      visible,
    } = usePopperTooltip({
      interactive: true,
      delayHide: 250,
    })

    return (
      <BaseBox {...{ ref, ...props }}>
        <ChildContainer ref={setTriggerRef}>{children}</ChildContainer>
        {visible && (
          <div ref={setTooltipRef} {...getTooltipProps()}>
            <div {...getArrowProps()} />
            <StyledPanel>{tooltip}</StyledPanel>
          </div>
        )}
      </BaseBox>
    )
  }
)

export default Tooltip
