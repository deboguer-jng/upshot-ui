import React, { useState, useRef, useEffect } from 'react'
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
  onChange: Function
  disabled: boolean
}

export default function ButtonDropdown({
  options,
  isMulti = false,
  name,
  value,
  disabled,
  onChange,
  ...props
}: ButtonDropdownInterface) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    const handleClickOutside = (e: { target: HTMLElement }) => {
      if (ref && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      <DropdownWrapper ref={ref}>
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
                  unSelected={option !== value && !!value.length}
                  onClick={() => onChange(option)}
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
