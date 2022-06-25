import React, { forwardRef } from 'react'
import { Image as ImageUI, ImageProps as ImageUIProps } from 'theme-ui'

import { imageOptimizer } from '../../../utils/imageOptimizer'

export interface ImageProps extends ImageUIProps {
  /**
   * Image src
   */
  src: string | undefined
  /**
   * Transforms image to the given width. Examples: "150" (in pixels) or "0.5" (in ratio)
   */
  width?: number
  /**
   * Transforms image to the given height. Examples: "150" (in pixels) or "0.5" (in ratio)
   */
  height?: number
  /**
   * Transforms image to the given aspect ratio. Examples: "16:9" or "1.33"
   */
  aspectRatio?: string
}

/**
 * Image component based on theme-ui Image.
 * If image src is a cloudinary url, it will be transformed
 * to the given width, height and aspect ratio.
 * Image optimization (or transformation) does not work for
 * other (non-cloudinary) image sources.
 */
const Image = forwardRef(
  (
    {
      src,
      width = null,
      height = null,
      aspectRatio = null,
      ...props
    }: ImageProps,
    ref: React.ForwardedRef<HTMLImageElement>
  ) => {
    const optimizedSrc = imageOptimizer(src, { width, height, aspectRatio })
    return <ImageUI src={optimizedSrc ?? src} ref={ref} {...props} />
  }
)

export default Image
