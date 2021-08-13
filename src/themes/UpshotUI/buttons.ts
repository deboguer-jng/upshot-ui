import iconButtons from './buttons.icons'
import colors from './colors'

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
      colors: {
        default: generateColors(
          colors.primary,
          colors.primary,
          colors.black,
          colors.transparent,
          colors.primary,
          colors.primary,
          colors.transparent,
          colors.primary,
          colors.primary,
          colors.primary,
          colors.primary,
          colors.black,
        ),
        active: generateColors(
          colors.transparent,
          colors.primary,
          colors.primary,
          colors.transparent,
          colors.primary,
          colors.primary,
          colors.transparent,
          colors.primary,
          colors.primary,
          colors.primary,
          colors.primary,
          colors.black
        ),
        disabled: generateColors(
          colors["grey-700"],
          colors["grey-700"],
          colors.black,
          colors["grey-700"],
          colors["grey-700"],
          colors.black,
          colors["grey-700"],
          colors["grey-700"],
          colors.black,
          colors["grey-700"],
          colors["grey-700"],
          colors.black
        )
      },
      fontFamily: 'body',
      fontWeight: 'heading',
      fontSize: 4,
      lineHeight: '1.5rem',
    },
    tertiary: {
      colors: {
        default: generateColors(
          colors["grey-800"],
          colors["grey-800"],
          colors["grey-300"],
          colors["grey-800"],
          colors["grey-800"],
          colors["grey-300"],
          colors["grey-200"],
          colors["grey-200"],
          colors["grey-800"],
          colors["grey-800"],
          colors["grey-800"],
          colors["grey-300"],
        ),
        active: generateColors(
          colors["grey-800"],
          colors["grey-800"],
          colors["grey-300"],
          colors["grey-800"],
          colors["grey-800"],
          colors["grey-300"],
          colors["grey-200"],
          colors["grey-200"],
          colors["grey-800"],
          colors["grey-800"],
          colors["grey-800"],
          colors["grey-300"],
        ),
        disabled: generateColors(
          colors["grey-700"],
          colors["grey-700"],
          colors.black,
          colors["grey-700"],
          colors["grey-700"],
          colors.black,
          colors["grey-700"],
          colors["grey-700"],
          colors.black,
          colors["grey-700"],
          colors["grey-700"],
          colors.black
        )
      },
    },
    secondary: {
      colors: {
        default: generateColors(
          colors.transparent,
          colors["grey-300"],
          colors["grey-300"],
          colors["grey-300"],
          colors["grey-300"],
          colors["grey-800"],
          colors["grey-300"],
          colors["grey-300"],
          colors["grey-800"],
          colors.transparent,
          colors["grey-300"],
          colors["grey-300"],
        ),
        active: generateColors(
          colors["grey-300"],
          colors["grey-300"],
          colors["grey-800"],
          colors["grey-300"],
          colors["grey-300"],
          colors["grey-800"],
          colors["grey-300"],
          colors["grey-300"],
          colors["grey-800"],
          colors.transparent,
          colors["grey-300"],
          colors["grey-300"],
        ),
        disabled: generateColors(
          colors["grey-700"],
          colors["grey-700"],
          colors.black,
          colors["grey-700"],
          colors["grey-700"],
          colors.black,
          colors["grey-700"],
          colors["grey-700"],
          colors.black,
          colors["grey-700"],
          colors["grey-700"],
          colors.black
        )
      },
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 6,
      lineHeight: '2.625rem',
    },
    plain: {
      colors: {
        default: generateColors(
          '',
          '',
          colors.primary,
          '',
          '',
          colors.primary,
          '',
          '',
          colors.primary,
          '',
          '',
          ''
        ),
        active: generateColors(
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ),
        disabled: generateColors(
          '',
          '',
          colors["grey-500"],
          '',
          '',
          colors["grey-500"],
          '',
          '',
          colors["grey-500"],
          '',
          '',
          ''
        )
      }
    }
  },
  property: {
    medium: {
      fontSize: 18,
      height: 30,
      iconMargin: 4,
      iconWidth: 16,
    },
    large: {
      fontSize: 32,
      height: 46,
      iconMargin: 12,
      iconWidth: 25
    }
  },
  icon: iconButtons,
}

export default buttons
