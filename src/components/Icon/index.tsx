import React from 'react'
import SVG, { Props as SVGProps } from 'react-inlinesvg'
import colors from '../../themes/UpshotUI/colors'
import icons from './icons'

interface IconProps extends Omit<SVGProps, 'src'> {
  /**
   * Defines the SVG icon to render.
   */
  icon: keyof typeof icons
  /**
   * Specifies the width & height for the square svg icon. (Default: 64)
   */
  size?: number | string
  /**
   * Named color from theme specification. (Default: inherit)
   */
  color?: keyof typeof colors
}

/**
 * Icon component for SVG assets.
 */
export default function Icon({ size = 64, color, icon, ...props }: IconProps) {
  return (
    <SVG
      src={icons[icon]}
      width={size}
      height={size}
      /* Preprocess SVGs to use color prop. */
      preProcessor={(svg) => svg.replace(/fill=".*?"/g, 'fill="currentColor"')}
      /* If no color is provided, inherit color from the container. */
      color={colors[color] ?? 'inherit'}
      {...props}
    />
  )
}
