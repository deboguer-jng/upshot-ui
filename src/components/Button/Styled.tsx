import styled from '@emotion/styled'
import Buttons from '../../themes/UpshotUI/buttons'

interface PrimaryButtonProps {
  $type: keyof typeof Buttons.variants
  $size: keyof typeof Buttons.property
  $status: keyof typeof Buttons.variants.primary.colors
  width: number
  minimized: boolean
}

interface PlainButtonProps {
  $type: keyof typeof Buttons.variants
  $size: keyof typeof Buttons.property
  $status: keyof typeof Buttons.variants.plain.colors
  disabled: boolean
}

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  background: ${({ theme, $type, $status }) =>
    theme.buttons.variants[$type].colors[$status].background};
  border: 2px solid
    ${({ theme, $type, $status }) =>
      theme.buttons.variants[$type].colors[$status].border};
  font-size: ${({ theme, $size }) => theme.buttons.property[$size].fontSize}px;
  height: ${({ theme, $size }) => theme.buttons.property[$size].height}px;
  border-radius: ${({ theme, $size }) =>
    theme.buttons.property[$size].height / 2}px;
  width: ${({ width }) => width}px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 11px;
  padding-right: 11px;

  & svg {
    margin-right: ${({ theme, $size, minimized }) =>
      minimized ? 0 : theme.buttons.property[$size].iconMargin}px;
    width: ${({ theme, $size }) => theme.buttons.property[$size].iconWidth}px;
  }

  & * {
    fill: ${({ theme, $type, $status }) =>
      theme.buttons.variants[$type].colors[$status].color};
  }

  span {
    flex-grow: 1;
    color: ${({ theme, $type, $status }) =>
      theme.buttons.variants[$type].colors[$status].color};
  }

  &:disabled {
    cursor: not-allowed !important;
  }

  &:not(:disabled):hover {
    background: ${({ theme, $type, $status }) =>
      theme.buttons.variants[$type].colors[$status].hoverBackground};
    border: 2px solid
      ${({ theme, $type, $status }) =>
        theme.buttons.variants[$type].colors[$status].hoverBorder};
    span {
      color: ${({ theme, $type, $status }) =>
        theme.buttons.variants[$type].colors[$status].hoverColor};
    }

    & * {
      fill: ${({ theme, $type, $status }) =>
        theme.buttons.variants[$type].colors[$status].hoverColor};
    }
  }

  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 145, 255, 0.6);
  }

  &:not(:disabled):active {
    background: ${({ theme, $type, $status }) =>
      theme.buttons.variants[$type].colors[$status].pressedBackground};
    border: 2px solid
      ${({ theme, $type, $status }) =>
        theme.buttons.variants[$type].colors[$status].pressedBorder};
    span {
      color: ${({ theme, $type, $status }) =>
        theme.buttons.variants[$type].colors[$status].pressedColor};
    }

    svg {
      path {
        fill: ${({ theme, $type, $status }) =>
          theme.buttons.variants[$type].colors[$status].pressedColor};
      }
    }
    transform: scale(0.95);
  }
`

export const PlainButton = styled.button<PlainButtonProps>`
  font-size: 18px;
  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme, $type, $status }) =>
    theme.buttons.variants[$type].colors[$status].color};
  display: flex;
  align-items: center;
  cursor: pointer;
  height: ${({ theme, $size }) => theme.buttons.property[$size].height}px;

  &:not(:disabled):hover {
    span {
      text-decoration: underline;
    }
  }

  & svg {
    margin-left: 0.25rem;
    width: ${({ theme, $size }) => theme.buttons.property[$size].iconWidth}px;

    & * {
      fill: ${({ theme, $type, $status }) =>
        theme.buttons.variants[$type].colors[$status].color};
    }
  }

  &:focus {
    color: ${({ theme, $type, $status }) =>
      theme.buttons.variants[$type].colors[$status].color};
  }
`
