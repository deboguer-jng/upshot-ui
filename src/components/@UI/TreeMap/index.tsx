import React, { forwardRef } from 'react'
import { useTheme } from '@emotion/react'
import {
  WrappedReactApexChart,
  TreeMapChartWrapper,
  TreeMapWrapper,
  TreeMapChartInnerWrapper,
} from './Styled'
import { getOptions } from './utils'
import EmptyChart from '../Chart/components/emptyChart'
import { useBreakpointIndex } from '@theme-ui/match-media'

export interface TreeMapProps {
  data: Array<{
    name: string
    delta: number
    marketCap: number
  }>
  loading?: boolean

  error?: boolean

  noData?: boolean
}

const TreeMap = forwardRef(
  (
    { data = [], loading, error, noData, ...props }: TreeMapProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme()
    const isMobile = useBreakpointIndex() <= 1
    const dataAvailable = !loading && data.length !== 0 && !error && !noData
    const options = getOptions(theme, data, dataAvailable)

    return (
      <TreeMapChartWrapper {...{ ref, ...props }}>
        {dataAvailable ? (
          <TreeMapChartInnerWrapper isMobile={isMobile}>
            <TreeMapWrapper>
              <WrappedReactApexChart
                series={[
                  {
                    data: data.map((item: any) => ({
                      x: item.name,
                      y: Math.log(item.marketCap) ** 3,
                    })),
                  },
                ]}
                type="treemap"
                width="100%"
                height="100%"
                {...{ options }}
              />
            </TreeMapWrapper>
          </TreeMapChartInnerWrapper>
        ) : (
          <EmptyChart
            {...{
              loading,
              error,
              noData,
            }}
          />
        )}
      </TreeMapChartWrapper>
    )
  }
)

export default TreeMap
