import { useState, useEffect } from 'react'
import { useTheme } from '../themes/UpshotUI'

export const useBreakpointIndex = () => {
  const context = useTheme()
  const defaultIndex = 0
  const breakpoints = context.theme && context.theme.breakpoints

  if (typeof defaultIndex !== 'number') {
    throw new TypeError(
      `Default breakpoint index should be a number. Got: ${defaultIndex}, ${typeof defaultIndex}`
    )
  } else if (defaultIndex < 0 || defaultIndex > breakpoints.length - 1) {
    throw new RangeError(
      `Default breakpoint index out of range. Theme has ${breakpoints.length} breakpoints, got index ${defaultIndex}`
    )
  }

  const [value, setValue] = useState(defaultIndex)
  useEffect(() => {
    const getIndex = () =>
      breakpoints.filter(
        (bp) => window.matchMedia(`screen and (min-width: ${bp})`).matches
      ).length

    const onResize = () => {
      const newValue = getIndex()
      if (value !== newValue) {
        setValue(newValue)
      }
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [breakpoints, value])

  return value
}
