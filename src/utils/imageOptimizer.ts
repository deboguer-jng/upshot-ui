
/**
 * Optimizes image sizes
 *
 * @returns An image URL with optimized size. This only works for cloudinary URLs
 */

export interface ImageProps {
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
  /**
   * Cloudinary crop mode (default: lfill): https://cloudinary.com/documentation/resizing_and_cropping#resize_and_crop_modes
   */
  cropMode?: string
}

export const imageOptimizer = (
  src: string | undefined,
  opts: ImageProps = {},
) => {
  if (!src) return src

  if (!opts.cropMode) {
    opts.cropMode = 'lfill' // make "lfill" default crop mode
  }

  let optimizations = []
  if (opts.width) {
    optimizations.push('w_' + opts.width.toString())
  }
  if (opts.height) {
    optimizations.push('h_' + opts.height.toString())
  }
  if (opts.aspectRatio) {
    optimizations.push('ar_' + opts.aspectRatio)
  }

  const cloudinaryUrlSchemeStart = '//res.cloudinary.com/upshot-inc/image/upload/'
  if (optimizations.length > 0) {
    optimizations.push('c_' + opts.cropMode)
    const optimiationString = optimizations.join(',')
    if (src.includes(cloudinaryUrlSchemeStart)) {
      return src.replace(cloudinaryUrlSchemeStart, cloudinaryUrlSchemeStart + optimiationString + '/')
    } else {
      return '//res.cloudinary.com/dcc0adga4/image/fetch/' + optimiationString + '/' + encodeURI(src)
    }
  }
  return src
}
