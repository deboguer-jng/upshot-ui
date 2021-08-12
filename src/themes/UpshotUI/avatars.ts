import { fontSizes } from './text'

const avatars = {
  /**
   * Border thickness (% avatar width)
   */
  borderThickness: 4,
  /**
   * Avatar sizes (px)
   */
  sizes: {
    xs: 16,
    sm: 46,
    md: 58,
    lg: 94,
    xl: 188,
  },
  /**
   * Initials typography sizes
   */
  initialsSizes: {
    /**
     * @notice xs sized Avatars do not display initials.
     */
    sm: fontSizes[4],
    md: fontSizes[5],
    lg: fontSizes[6],
    xl: fontSizes[8],
  },
}

export default avatars