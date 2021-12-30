
/**
 * Optimizes image sizes
 *
 * @returns An image URL with optimized size. This only works for cloudinary URLs
 */


export const imageOptimizer = (
  src: string | undefined,
  width: number = null,
  height: number = null,
  aspectRatio: string = null,
) => {
  if (typeof src === 'undefined') return src

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

  const cloudinaryUrlSchemeStart = '//res.cloudinary.com/upshot-inc/image/upload/'
  if (optimizations.length > 0 && src.includes(cloudinaryUrlSchemeStart)) {
    const optimiationString = optimizations.join(',')
    return src.replace(cloudinaryUrlSchemeStart, cloudinaryUrlSchemeStart + optimiationString + '/')
  }
  return null
}
