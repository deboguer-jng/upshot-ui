import colors from './colors'

const dropdownButtons = {
  arrow: {
    color: colors.primary
  },
  count: {
    background: colors.primary,
    color: colors["grey-800"],
    border: colors["grey-800"]
  },
  variants: {
    default: {
      color: colors["grey-500"],
      selected: colors.primary,
      isSelected: 'white',
      unSelected: colors["grey-700"]
    },
    isMulti: {
      color: colors["grey-300"]
    },
    disabled: {
      color: colors["grey-600"]
    }
  }
}

export default dropdownButtons
