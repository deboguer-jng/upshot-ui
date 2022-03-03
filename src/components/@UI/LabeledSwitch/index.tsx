import { BoxProps } from 'theme-ui'
import React, { forwardRef } from 'react'

import { LabeledSwitchBase, LabeledSwitchButton } from './Styled'

export interface LabeledSwitchProps extends BoxProps {
  /**
   * The label for the OFF position of the switch.
   */
  labelOff: string
  /**
   * The label for the ON position of the switch.
   */
  labelOn: string
  /**
   * Boolean flag for if the switch is in the ON position.
   */
  on?: boolean
  /**
   * Callback for the toggle click event.
   */
  onToggle?: () => void
}

/**
 * Provides a labeled switch component.
 */
const LabeledSwitch = forwardRef(
  (
    { labelOn, labelOff, on, onToggle, ...props }: LabeledSwitchProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => (
    <LabeledSwitchBase onClick={onToggle} {...{ ref, ...props }}>
      <LabeledSwitchButton $on={!on}>{labelOff}</LabeledSwitchButton>
      <LabeledSwitchButton $on={on}>{labelOn}</LabeledSwitchButton>
    </LabeledSwitchBase>
  )
)

export default LabeledSwitch
