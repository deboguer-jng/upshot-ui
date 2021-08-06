import React from 'react'
import { Label, Checkbox as ThemeCheckbox } from 'theme-ui'
  
/**
 * Primary UI component for user interaction
 */
export default function Checkbox({
  ...props
}) {
  return (
    <Label {...props}>
      <ThemeCheckbox defaultChecked={true} 
        sx={{
          backgroundColor: 'secondary',
          '&:checked': {
            backgroundColor: 'pink',
          },
        }}
      />
    </Label>
  )
}