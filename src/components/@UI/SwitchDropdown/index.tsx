import React, { forwardRef, useState, useEffect } from 'react'
import { BoxProps } from 'theme-ui'
import {
  SwitchDropdownHeader,
  SwitchDropdownWrapper,
  SwitchDropdownOptions,
  SwitchDropdownOption,
} from './Styled'
import Text from '../Text'
import Icon from '../Icon'

export interface SwitchDropdownProps extends BoxProps {
  value: string
  options: Array<string>
  onValueChange: (option: string) => void
  onToggle?: (open: boolean) => void
  defaultOpen: boolean
}

const SwitchDropdown = forwardRef(
  (
    { value, options, onValueChange, onToggle, defaultOpen = false, ...props }: SwitchDropdownProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(defaultOpen)

    useEffect(() => {
      setOpen(defaultOpen)
    }, [defaultOpen])


    const handleClick = (option: string) => {
      setOpen(!open)
      onValueChange(option)
      onToggle && onToggle(!open)
    }

    return (
      <SwitchDropdownWrapper {...{ ref, ...props }}>
        <SwitchDropdownHeader
          open={open}
          onClick={() => {
            setOpen(!open)
            onToggle && onToggle(!open)
          }}
        >
          <Text variant="h1Secondary" color="primary">
            {value ? value : options[0]}
          </Text>
          <Icon icon="arrowDropdown" />
        </SwitchDropdownHeader>
        {open && (
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
        )}
      </SwitchDropdownWrapper>
    )
  }
)

export default SwitchDropdown
