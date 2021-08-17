import React, { useState } from 'react'
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownSelected,
  DropdownWrapper,
  DropdownMenuItems,
  DropdownMultiSelected,
  DropdownMenuArrow,
  DropdownMultiSelectedCount,
} from './Styled'
import Checkbox from '../Checkbox'
import Radio from '../Radio'
import Icon from '../Icon'

export interface ButtonDropdownInterface {
  options: Array<string>
  name: string
  isMulti: boolean
  value: string | Array<string>
  setValue: Function
  disabled: boolean
}

export default function ButtonDropdown({
  options,
  isMulti = false,
  name,
  value,
  setValue,
  disabled,
  ...props
}: ButtonDropdownInterface) {
  const [open, setOpen] = useState(false)

  const itemSelected = (option: string) => {
    if (!isMulti) {
      setValue(option)
      setOpen(false)
    } else {
      const previousValue = [...(value as Array<string>)]
      let newValue = []
      if (previousValue.indexOf(option) < 0)
        newValue = [...previousValue, option]
      else newValue = previousValue.filter((item) => item !== option)
      setValue(newValue)
    }
  }

  return (
    <>
      <DropdownWrapper>
        <Dropdown
          disabled={disabled}
          open={open}
          isMulti={isMulti}
          onClick={() => !disabled && setOpen(!open)}
        >
          <span> {isMulti ? 'Filter By' : 'Category:'} </span>
          {isMulti ? (
            <DropdownMultiSelected disabled={disabled}>
              <Icon icon="filter" />
              {value.length ? (
                <DropdownMultiSelectedCount>
                  {value.length}
                </DropdownMultiSelectedCount>
              ) : null}
            </DropdownMultiSelected>
          ) : (
            <DropdownSelected disabled={disabled} isSelected={!!value.length}>
              {disabled ? '--' : value.length ? value : 'Select'}
            </DropdownSelected>
          )}
          <DropdownMenuArrow open={open} disabled={disabled}>
            <Icon icon="arrowDropdown" />
          </DropdownMenuArrow>
        </Dropdown>
        {open && (
          <DropdownMenu>
            <DropdownMenuItems>
              {options.map((option, index) => (
                <DropdownMenuItem
                  key={index}
                  isMulti={isMulti}
                  isSelected={option === value}
                  noSelected={!value.length}
                  onClick={() => itemSelected(option)}
                >
                  {isMulti ? (
                    <Checkbox checked={value.includes(option)} />
                  ) : (
                    <Radio name={name} checked={option === value} />
                  )}
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuItems>
          </DropdownMenu>
        )}
      </DropdownWrapper>
    </>
  )
}
