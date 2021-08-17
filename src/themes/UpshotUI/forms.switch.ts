const switches = {
  bg: 'grey-500', // Off: background
  '& div': {
    bg: 'grey-900', // Off: circle
  },
  '&:disabled div': {
    bg: 'disabled', // Disabled: circle
  },
  'input:checked ~ &': {
    bg: 'primary', // On: background
  },
  'input:checked ~ & div': {
    bg: 'grey-900', // On: circle
  },
}

export default switches
