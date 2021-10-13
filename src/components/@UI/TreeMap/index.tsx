import React, { forwardRef } from 'react'
import { useTheme } from '@emotion/react'
import { WrappedReactApexChart } from './Styled'
import { getOptions } from './utils'

export interface TreeMapProps {
  data: Array<{
    name: string
  }>
}

const TreeMap = forwardRef(
  ({ data }: TreeMapProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const theme = useTheme()
    const series = [
      {
        data,
      },
    ]
    const options = getOptions(theme, series[0].data)
    return (
      <WrappedReactApexChart
        series={series}
        type="treemap"
        height="350"
        {...{ options }}
      />
    )
  }
)

export default TreeMap
