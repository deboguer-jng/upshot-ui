import iconButtons from './buttons.icons'
import colors from './colors'
import dropdownButtons from './buttons.dropdown'

const generateColors = (
  background: string,
  border: string,
  color: string,
  hoverBackground: string,
  hoverBorder: string,
  hoverColor: string,
  pressedBackground: string,
  pressedBorder: string,
  pressedColor: string,
  focusBackground: string,
  focusBorder: string,
  focusColor: string
) => ({
  background,
  border,
  color,
  hoverBackground,
  hoverBorder,
  hoverColor,
  pressedBackground,
  pressedBorder,
  pressedColor,
  focusBackground,
  focusBorder,
  focusColor,
})

const buttons = {
  variants: {
    primary: {
      colors: generateColors(
        colors.primary,
        colors.primary,
        colors.black,
        colors.transparent,
        colors.primary,
        colors.primary,
        colors.transparent,
        colors.primary,
        colors.primary,
        colors.transparent,
        colors.primary,
        colors.primary
      ),
      fontFamily: 'body',
      fontWeight: 'heading',
      fontSize: 4,
      lineHeight: '1.5rem',
    },
    tertiary: {
      colors: generateColors(
        colors['grey-800'],
        colors['grey-800'],
        colors['grey-300'],
        colors['grey-900'],
        colors['grey-900'],
        colors['grey-300'],
        colors['grey-900'],
        colors['grey-900'],
        colors['grey-300'],
        colors['grey-200'],
        colors['grey-200'],
        colors['grey-800']
      ),
    },
    secondary: {
      colors: generateColors(
        colors.transparent,
        colors['grey-300'],
        colors['grey-300'],
        colors['grey-300'],
        colors['grey-300'],
        colors['grey-800'],
        colors['grey-400'],
        colors['grey-400'],
        colors['grey-800'],
        colors['grey-300'],
        colors['grey-300'],
        colors['grey-800']
      ),
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 6,
      lineHeight: '2.625rem',
    },
  },
  property: {
    md: {
      fontSize: 18,
      height: 30,
      iconMargin: 4,
      iconWidth: 16,
    },
    lg: {
      fontSize: 32,
      height: 46,
      iconMargin: 12,
      iconWidth: 25,
    },
  },
  icon: iconButtons,
  dropdown: dropdownButtons,
}

export default buttons
