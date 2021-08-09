/**
 * Calculate border pixels relative to Avatar size
 * @returns border thickness (rounded to nearest pixel)
 */
export const calcBorder = (
  sizePx: number,
  thicknessPercent: number,
  minPx: number = 1
) => Math.max(minPx, Math.floor(sizePx * thicknessPercent * 0.01)) + 'px'
