import { css } from '@emotion/react'
import colors from '../../themes/UpshotUI/colors'

/**
 * CSS fragment for an avatar border.
 */
export const createAvatarBorder = (color: string, thickness: string) => css`
  &:after {
    content: '';
    position: absolute;
    pointer-events: none;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 0 0 max(1px, ${thickness}) ${color};
  }
`
