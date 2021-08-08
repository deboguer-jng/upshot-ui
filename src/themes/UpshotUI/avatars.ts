import { fontSizes } from './text'

const avatars = {
  /**
   * Border thickness (% container width)
   */
  borderThickness: '4%',
  /**
   * Avatar sizes (px)
   */
  sizes: {
    xs: '16px',
    sm: '46px',
    md: '58px',
    lg: '94px',
    xl: '188px',
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
