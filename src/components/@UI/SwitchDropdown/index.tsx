import React, { forwardRef, useState } from 'react'
import {
  SwitchDropdownHeader,
  SwitchDropdownWrapper,
  SwitchDropdownOptions,
  SwitchDropdownOption,
} from './Styled'
import Text from '../Text'
import Icon from '../Icon'

export interface SwitchDropdownProps {
  value: string
  options: Array<string>
  onChange: Function
}

const SwitchDropdown = forwardRef(
  (
    { value, options, onChange, ...props }: SwitchDropdownProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(false)

    const handleClick = (option: string) => {
      setOpen(!open)
      onChange(option)
    }

    return (
      <>
        <SwitchDropdownWrapper {...{ ref, ...props }}>
          <SwitchDropdownHeader open={open} onClick={() => setOpen(!open)}>
            <Text variant="h1Secondary" color="primary">
              {value ? value : options[0]}
            </Text>
            <Icon icon="arrowDropdown" />
          </SwitchDropdownHeader>
          <SwitchDropdownOptions open={open}>
            {options
              .filter((option, index) => (value ? option !== value : index))
              .map((option, index) => (
                <SwitchDropdownOption
                  key={index}
                  onClick={() => handleClick(option)}
                >
                  <Text variant="h2Secondary" color="primary">
                    {option}
                  </Text>
                </SwitchDropdownOption>
              ))}
          </SwitchDropdownOptions>
        </SwitchDropdownWrapper>
      </>
    )
  }
)

export default SwitchDropdown
