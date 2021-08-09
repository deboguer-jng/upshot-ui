import { css } from '@emotion/react'

/**
 * Create a border for an image variant Avatar.
 * @returns {FlattenSimpleInterpolation}
 */
export const createAvatarImageBorder = (
  color: string,
  thickness: string
) => css`
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

/**
 * Calculate border thickness (px) relative to Avatar size
 * @returns {string} border thickness (rounded to nearest pixel)
 */
export const calcBorderThickness = (
  sizePx: number,
  thicknessPercent: number,
  minPx: number = 1
) => Math.max(minPx, Math.floor(sizePx * thicknessPercent * 0.01)) + 'px'
