import React, { forwardRef, useState } from 'react'
import { BoxProps } from 'theme-ui'
import {
  SwitchDropdownHeader,
  SwitchDropdownWrapper,
  SwitchDropdownOptions,
  SwitchDropdownOption,
} from './Styled'
import Text from '../Text'
import Icon from '../Icon'
import Box from '../../Layout/Box'

export interface SwitchDropdownProps extends BoxProps {
  value: string
  options: Array<string>
  onValueChange: (option: string) => void
  onToggle?: (open: boolean) => void
}

const SwitchDropdown = forwardRef(
  (
    { value, options, onValueChange, onToggle, ...props }: SwitchDropdownProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(false)

    const handleClick = (option: string) => {
      setOpen(!open)
      onValueChange(option)
      onToggle && onToggle(!open)
    }

    return (
      <Box>
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
      </Box>
    )
  }
)

export default SwitchDropdown
