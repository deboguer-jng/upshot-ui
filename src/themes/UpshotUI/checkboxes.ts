import colors from '../../themes/UpshotUI/colors'

const checkboxes = {
    default: {
      color: colors.primary,
      '&:checked': {
        color: colors.red,
      },
    },
    error: {
      color: colors.red,
      '&:checked': {
        color: colors.red,
      },
    },
    disabled: {
      color: colors.text,
      '&:checked': {
        color: colors.primary,
      },
    },
  }
  
  export default checkboxes