import './dropdown.css'

import React from 'react'

type DropdownOptions = {
  label: string,
  value: string
}

const dropdownType = {
  radio: 'radio',
  checkbox: 'checkbox'
}



interface DropdownProps {
  /**
   * Dropdown type
   */
   type: keyof typeof dropdownType
  /**
   * Dropdown contents
   */
   options: DropdownOptions[]
}

  
/**
 * Primary UI component for user interaction
 */
export default function Dropdown({
  type,
  options = [],
  ...props
}: DropdownProps) {
  return (
    <select name="cars" id="cars"
      className={['storybook-dropdown'].join(
        ' '
      )}
      {...props}
    >
      {options.map((option, index) => {
        return <option value={option.value}>{option.label}</option>
      })}
    </select>
  )
}