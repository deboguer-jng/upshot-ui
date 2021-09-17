import React, { forwardRef } from 'react'
import SVG, { Props as SVGProps } from 'react-inlinesvg'
import colors from '../../../themes/UpshotUI/colors'
import icons from './icons'

export interface IconProps extends Omit<SVGProps, 'src'> {
  /**
   * Defines the SVG icon to render.
   */
  icon: keyof typeof icons
  /**
   * Specifies the width & height for the square svg icon.
   */
  size?: number | string
  /**
   * Named color from theme specification.
   */
  color?: keyof typeof colors
}

/**
 * Icon component for SVG assets.
 */
const Icon = forwardRef(
  (
    { size = '100%', color, icon, ...props }: IconProps,
    ref: React.ForwardedRef<SVG>
  ) => (
    <SVG
      src={icons[icon]}
      /* Preprocess SVGs to use color prop. */
      preProcessor={(svg) =>
        svg
          .replace(/fill=".*?"/g, 'fill="currentColor"')
          .replace(/stroke=".*?"/g, 'stroke="currentColor"')
      }
      /* If no color is provided, inherit color from the container. */
      color={colors[color] ?? 'inherit'}
      /* Fixed square size */
      width={size}
      height={size}
      style={{ flexShrink: 0 }}
      {...{ ref, ...props }}
    />
  )
)

export default Icon
