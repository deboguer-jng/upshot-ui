import React, { useState, useRef, useEffect, forwardRef } from 'react'
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

export interface ButtonDropdownInterface
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: string[]
  name: string
  value: string | string[]
  onChange?: (val: string) => void
  label?: string
  isMulti?: boolean
  disabled?: boolean
  hideRadio?: boolean
}

const ButtonDropdown = forwardRef(
  (
    {
      options,
      name,
      value,
      onChange,
      label,
      isMulti = false,
      disabled,
      hideRadio = false,
      ...props
    }: ButtonDropdownInterface,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>()

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!dropdownRef.current.contains(e.target as Node)) {
          setOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
      <div {...{ ref, ...props }}>
        <DropdownWrapper ref={dropdownRef}>
          <Dropdown
            disabled={disabled}
            open={open}
            isMulti={isMulti}
            onClick={() => !disabled && setOpen(!open)}
          >
            <span> {label ? label + ':' : isMulti ? 'Filter By' : 'Category:'} </span>
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
                      <Checkbox readOnly checked={value.includes(option)} />
                    ) : (
                      <Radio hideRadio={hideRadio} readOnly name={name} checked={option === value} />
                    )}
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuItems>
            </DropdownMenu>
          )}
        </DropdownWrapper>
      </div>
    )
  }
)

export default ButtonDropdown
