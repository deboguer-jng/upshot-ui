import styled from '@emotion/styled'
import { darken } from 'polished'
import Buttons from '../../../themes/UpshotUI/buttons'

interface PrimaryButtonProps {
  $type: keyof typeof Buttons.variants
  $size: keyof typeof Buttons.property
  toggled: boolean
  width: number
  minimized: boolean
}

interface PlainButtonProps {
  $size: keyof typeof Buttons.property
}

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  background: ${({ theme, $type, toggled }) =>
    typeof toggled === 'undefined'
      ? theme.buttons.variants[$type].colors.background
      : toggled
      ? theme.buttons.variants[$type].colors.toggledBackground
      : theme.buttons.variants[$type].colors.hoverBackground};
  border: none;
  box-shadow: ${({ theme, $type, toggled }) =>
      typeof toggled === 'undefined'
        ? theme.buttons.variants[$type].colors.border
        : toggled
        ? theme.buttons.variants[$type].colors.toggledBorder
        : theme.buttons.variants[$type].colors.hoverBorder}
    0px 0px 0px 1.8px;
  font-size: ${({ theme, $size }) => theme.buttons.property[$size].fontSize}px;
  height: ${({ theme, $size }) => theme.buttons.property[$size].height}px;
  border-radius: ${({ theme }) => theme.radii.pill};
  width: ${({ width }) => width}px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 25px;
  transition: ${({ theme }) => theme.transitions.default};
  text-transform: uppercase;

  & svg {
    margin-right: ${({ theme, $size, minimized }) =>
      minimized ? 0 : theme.buttons.property[$size].iconMargin}px;
    width: ${({ theme, $size }) => theme.buttons.property[$size].iconWidth}px;
  }

  & * {
    fill: ${({ theme, $type, toggled }) =>
      typeof toggled === 'undefined'
        ? theme.buttons.variants[$type].colors.color
        : toggled
        ? theme.buttons.variants[$type].colors.toggledColor
        : theme.buttons.variants[$type].colors.hoverColor};
  }

  span {
    flex-grow: 1;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme, $type, toggled }) =>
      typeof toggled === 'undefined'
        ? theme.buttons.variants[$type].colors.color
        : toggled
        ? theme.buttons.variants[$type].colors.toggledColor
        : theme.buttons.variants[$type].colors.hoverColor};
  }

  &:disabled {
    cursor: not-allowed !important;
    background: ${({ theme }) => theme.colors['grey-700']};
    span {
      color: ${({ theme }) => theme.colors.black};
    }
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors['grey-700']};
  }

  &:not(:disabled):not(:focus):hover {
    background: ${({ theme, $type, toggled }) =>
      typeof toggled === 'undefined'
        ? theme.buttons.variants[$type].colors.hoverBackground
        : toggled
        ? `${darken(
            0.1,
            theme.buttons.variants[$type].colors.toggledHoverBackground
          )}`
        : theme.buttons.variants[$type].colors.background};
    box-shadow: ${({ theme, $type, toggled }) =>
        typeof toggled === 'undefined'
          ? theme.buttons.variants[$type].colors.hoverBorder
          : toggled
          ? `${darken(
              0.1,
              theme.buttons.variants[$type].colors.toggledHoverBorder
            )}`
          : theme.buttons.variants[$type].colors.border}
      0px 0px 0px 1.8px;
    span {
      color: ${({ theme, $type, toggled }) =>
        typeof toggled === 'undefined'
          ? theme.buttons.variants[$type].colors.hoverColor
          : toggled
          ? `${darken(
              0.1,
              theme.buttons.variants[$type].colors.toggledHoverColor
            )}`
          : theme.buttons.variants[$type].colors.color};
    }

    & * {
      fill: ${({ theme, $type, toggled }) =>
        typeof toggled === 'undefined'
          ? theme.buttons.variants[$type].colors.hoverColor
          : toggled
          ? `${darken(
              0.1,
              theme.buttons.variants[$type].colors.toggledHoverColor
            )}`
          : theme.buttons.variants[$type].colors.color};
    }
  }

  &:not(:disabled):active {
    transform: scale(0.95);
    ${({ theme, $type, toggled }) => `background: ${
      typeof toggled === 'undefined'
        ? theme.buttons.variants[$type].colors.pressedBackground
        : theme.buttons.variants[$type].colors.background
    };
      box-shadow:
        ${theme.buttons.variants[$type].colors.pressedBorder} 0px 0px 0px 1.8px;
      span {
        color: ${
          typeof toggled === 'undefined'
            ? theme.buttons.variants[$type].colors.pressedColor
            : theme.buttons.variants[$type].colors.color
        };
      }

      svg {
        path {
          fill: ${
            typeof toggled === 'undefined'
              ? theme.buttons.variants[$type].colors.pressedColor
              : theme.buttons.variants[$type].colors.color
          };
        }
      }`}
  }

  &:not(:disabled):focus {
    ${({ theme, $type, toggled }) =>
      typeof toggled !== 'undefined'
        ? ''
        : `background: ${theme.buttons.variants[$type].colors.pressedBackground};
          box-shadow:
            ${theme.buttons.variants[$type].colors.pressedBorder} 0px 0px 0px 1.8px;
          span {
            color: ${theme.buttons.variants[$type].colors.pressedColor};
          }

          svg {
            path {
              fill: ${theme.buttons.variants[$type].colors.pressedColor};
            }
          }`}
  }
`

// fixme: 'plain' should be a theme variant
export const PlainButton = styled.button<PlainButtonProps>`
  font-size: ${({ theme, $size }) => theme.buttons.property[$size].fontSize}px;
  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  height: ${({ theme, $size }) => theme.buttons.property[$size].height}px;

  &:not(:disabled):hover {
    span {
      text-decoration: underline;
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors['grey-700']};
  }

  & svg {
    margin-left: ${({ theme, $size }) =>
      theme.buttons.property[$size].iconMargin}px;
    width: ${({ theme, $size }) => theme.buttons.property[$size].iconWidth}px;

    & * {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`
