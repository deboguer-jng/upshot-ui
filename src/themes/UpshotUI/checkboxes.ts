import colors from '../../themes/UpshotUI/colors'

const checkboxes = {
  default: {
    color: colors.text,
    checkedColor: colors.primary,
  },
  error: {
    color: colors.red,
    checkedColor: colors.red,
  },
  disabled: {
    color: colors['grey-600'],
    checkedColor: colors['grey-600'],
  },
}

export default checkboxes
