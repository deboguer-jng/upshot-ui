import React, { forwardRef } from 'react'
import { Image as ImageUI, ImageProps as ImageUIProps } from 'theme-ui'

export interface ImageProps extends ImageUIProps {
  /**
   * Image src
   */
  src: string
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

    let optimizations = []
    if (width !== null) {
      optimizations.push('w_' + width.toString())
    }
    if (height !== null) {
      optimizations.push('h_' + height.toString())
    }
    if (aspectRatio !== null) {
      optimizations.push('ar_' + aspectRatio)
    }

    const cloudinaryUrlSchemeStart = 'https://res.cloudinary.com/upshot-inc/image/upload/'
    let optimizedSrc
    if (optimizations.length > 0 && src.startsWith(cloudinaryUrlSchemeStart)) {
      const optimiationString = optimizations.join(',')
      optimizedSrc = src.replace(cloudinaryUrlSchemeStart, cloudinaryUrlSchemeStart + optimiationString + '/')
    }
    
    return (
      <ImageUI src={optimizedSrc || src} ref={ref} {...props} />
    )
  }
)

export default Image
