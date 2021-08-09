/**
 * Calculate border pixels relative to Avatar size
 * @returns border thickness (rounded to nearest pixel)
 */
export const calcBorderPx = (
  size: number,
  percentThickness: number,
  minBorder: number = 1
) => Math.max(minBorder, Math.floor(size * percentThickness * 0.01)) + 'px'
